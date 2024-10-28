import { NextRequest, NextResponse } from 'next/server';
import { HttpStatusCodes } from '../../statusCodes';
import { prisma } from '@prisma/prisma-client';
import { hashSync } from 'bcrypt';
import { generateCodeMessage } from '@/utils';
import { sendEmail } from '@/utils/sendEmail';

export async function POST(req: NextRequest) {
  const { data: body } = (await req.json()) as {
    data: { email: string; phone: string; password: string };
  };
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        throw new Error('Почта не подтверждена');
      }

      throw new Error('Пользователь уже существует');
    }

    const createdUser = await prisma.user.create({
      data: {
        name: 'Покупатель 22wiek.by',
        email: body.email,
        phone: body.phone,
        password: hashSync(body.password, 10),
      },
    });

    const { code } = await prisma.verificationCode.create({
      data: {
        userId: createdUser.id,
      },
    });

    await sendEmail(
      body.email,
      '22wiek.by / Подтверждение регистрации',
      generateCodeMessage(code),
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
