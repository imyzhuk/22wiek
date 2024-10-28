import { generateResetPasswordMessage } from '@/utils/mailMessages';
import { sendEmail } from '@/utils/sendEmail';
import { prisma } from '@prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { HttpStatusCodes } from '../../statusCodes';
import { hashSync } from 'bcrypt';

export async function POST(req: NextRequest) {
  const { data: body } = (await req.json()) as {
    data: { email: string };
  };

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      throw new Error('Пользователь уже существует');
    }

    if (!user.verified) {
      throw new Error('Почта еще не подтверждена');
    }

    const { code } = await prisma.verificationCode.create({
      data: {
        userId: user.id,
      },
    });

    await sendEmail(
      body.email,
      '22wiek.by / Сброс пароля',
      generateResetPasswordMessage(code),
    );

    return NextResponse.json('OK');
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error },
      {
        status: HttpStatusCodes.BAD_REQUEST,
      },
    );
  }
}
export async function PATCH(req: NextRequest) {
  const { data: body } = (await req.json()) as {
    data: { userId: string; password: string };
  };

  try {
    if (!(body.password || body.userId)) {
      throw new Error();
    }

    await prisma.user.update({
      where: {
        id: body.userId,
      },
      data: {
        password: hashSync(body.password, 10),
      },
    });

    await prisma.verificationCode.delete({
      where: {
        userId: body.userId,
      },
    });

    return NextResponse.json('');
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error },
      {
        status: HttpStatusCodes.BAD_REQUEST,
      },
    );
  }
}
