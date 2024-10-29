import { ProductCardType } from '@/types/productCardModel';
import { Option } from '@/types/optionsModel';

export const promos = [
  {
    name: 'Уценка',
    url: '/special_offers/promo?filters[discountTypes][0]=Sale',
  },
  {
    name: 'Холодильники',
    url: '/refrigerators/',
  },
];

export const discountTypes = [
  {
    name: 'Товары со скидкой',
    value: 'discounts',
  },
  {
    name: 'Товары с подарками',
    value: 'presents',
  },
  {
    name: 'Суперцена',
    value: 'superprice',
  },
  {
    name: 'Уцененные товары',
    value: 'sale',
  },
];

export const options: Option[] = [
  {
    name: 'Все',
    value: 'all',
  },
  ...discountTypes,
];

export const promoProducts: ProductCardType[] = [
  {
    id: 612022,
    currentPrice: '5,01 р.',
    productImg:
      'https://cdn21vek.by/img/galleries/7712/33/preview/612022_aversev_6311ac53a09d2.jpeg',
    oldPrice: '8,15 р.',
    title:
      'Рабочая тетрадь Аверсэв Английский язык. 6 класс. Часть 1. 2022 (Юхнель Н. и др.)',
    productLink: '/educational_literature/612022_aversev.html',
    type: 'Рабочая тетрадь',
    discount: 39,
  },
  {
    id: 45,
    currentPrice: '10,92 р.',
    productImg:
      'https://cdn21vek.by/img/galleries/6472/963/preview/45_aversev_6135d0d81569d.jpeg',
    title:
      'Учебное пособие Аверсэв Умней-ка. 4-5 лет. Знакомство с природой (Петрикевич А.А.)',
    productLink: '/educational_literature/45_aversev.html',
    type: 'Учебное пособие',
    discountType: 'Суперцена',
  },
  {
    id: 612023,
    currentPrice: '5,01 р.',
    productImg:
      'https://cdn21vek.by/img/galleries/7712/33/preview/612022_aversev_6311ac53a09d2.jpeg',
    oldPrice: '8,15 р.',
    title:
      'Рабочая тетрадь Аверсэв Английский язык. 6 класс. Часть 1. 2022 (Юхнель Н. и др.)',
    productLink: '/educational_literature/612022_aversev.html',
    type: 'Рабочая тетрадь',
    discount: 39,
  },
  {
    id: 46,
    currentPrice: '10,92 р.',
    productImg:
      'https://cdn21vek.by/img/galleries/6472/963/preview/45_aversev_6135d0d81569d.jpeg',
    title:
      'Учебное пособие Аверсэв Умней-ка. 4-5 лет. Знакомство с природой (Петрикевич А.А.)',
    productLink: '/educational_literature/45_aversev.html',
    type: 'Учебное пособие',
    discountType: 'Суперцена',
  },
  {
    id: 612024,
    currentPrice: '5,01 р.',
    productImg:
      'https://cdn21vek.by/img/galleries/7712/33/preview/612022_aversev_6311ac53a09d2.jpeg',
    oldPrice: '8,15 р.',
    title:
      'Рабочая тетрадь Аверсэв Английский язык. 6 класс. Часть 1. 2022 (Юхнель Н. и др.)',
    productLink: '/educational_literature/612022_aversev.html',
    type: 'Рабочая тетрадь',
    discount: 39,
  },
  {
    id: 612030,
    currentPrice: '5,01 р.',
    productImg:
      'https://cdn21vek.by/img/galleries/7712/33/preview/612022_aversev_6311ac53a09d2.jpeg',
    oldPrice: '8,15 р.',
    title:
      'Рабочая тетрадь Аверсэв Английский язык. 6 класс. Часть 1. 2022 (Юхнель Н. и др.)',
    productLink: '/educational_literature/612022_aversev.html',
    type: 'Рабочая тетрадь',
    discount: 39,
  },
  {
    id: 50,
    currentPrice: '10,92 р.',
    productImg:
      'https://cdn21vek.by/img/galleries/6472/963/preview/45_aversev_6135d0d81569d.jpeg',
    title:
      'Учебное пособие Аверсэв Умней-ка. 4-5 лет. Знакомство с природой (Петрикевич А.А.)',
    productLink: '/educational_literature/45_aversev.html',
    type: 'Учебное пособие',
    discountType: 'Суперцена',
  },
  {
    id: 51,
    currentPrice: '5,01 р.',
    productImg:
      'https://cdn21vek.by/img/galleries/7712/33/preview/612022_aversev_6311ac53a09d2.jpeg',
    oldPrice: '8,15 р.',
    title:
      'Рабочая тетрадь Аверсэв Английский язык. 6 класс. Часть 1. 2022 (Юхнель Н. и др.)',
    productLink: '/educational_literature/612022_aversev.html',
    type: 'Рабочая тетрадь',
    discount: 39,
  },
  {
    id: 53,
    currentPrice: '10,92 р.',
    productImg:
      'https://cdn21vek.by/img/galleries/6472/963/preview/45_aversev_6135d0d81569d.jpeg',
    title:
      'Учебное пособие Аверсэв Умней-ка. 4-5 лет. Знакомство с природой (Петрикевич А.А.)',
    productLink: '/educational_literature/45_aversev.html',
    type: 'Учебное пособие',
    discountType: 'Суперцена',
  },
  {
    id: 54,
    currentPrice: '5,01 р.',
    productImg:
      'https://cdn21vek.by/img/galleries/7712/33/preview/612022_aversev_6311ac53a09d2.jpeg',
    oldPrice: '8,15 р.',
    title:
      'Рабочая тетрадь Аверсэв Английский язык. 6 класс. Часть 1. 2022 (Юхнель Н. и др.)',
    productLink: '/educational_literature/612022_aversev.html',
    type: 'Рабочая тетрадь',
    discount: 39,
  },
];
