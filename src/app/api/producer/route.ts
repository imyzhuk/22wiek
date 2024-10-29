import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@prisma/prisma-client';
import { GetProducersResponseType } from '@/types/producer';

export async function GET(request: NextRequest) {
  const data = await prisma.producer.findMany();
  return NextResponse.json<GetProducersResponseType>(data);
}
