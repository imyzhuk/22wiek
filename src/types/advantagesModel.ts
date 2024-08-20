import { StaticImageData } from 'next/image';

export type AdvantageType = {
  id: number;
  title: string;
  link: string;
  desc: string;
  color: string;
  img: StaticImageData;
  bgImg: string;
};
