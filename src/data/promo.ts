import { ProductCardType } from '@/types/productCardModel';
import { Option } from '@/types/optionsModel';

export const promos = [
  {
    name: 'Уценка',
    url: '/special_offers/promo.html?discountTypes=sale',
  },
  {
    name: 'Зоотовары',
    url: '/special_offers/promo.html?categories=9697',
  },
  {
    name: 'Велосипеды',
    url: '/bikes/',
  },
  {
    name: 'Дом, сад',
    url: '/special_offers/promo.html?categories=203',
  },
  {
    name: 'Холодильники',
    url: '/refrigerators/',
  },
  {
    name: 'Батуты',
    url: '/tramps/',
  },
  {
    name: 'Телевизоры',
    url: '/tv/?filter%5B224869%5D%5Bfrom%5D=50',
  },
  {
    name: 'Смартфоны',
    url: '/mobile/',
  },
  {
    name: 'Ноутбуки',
    url: '/notebooks/',
  },
  {
    name: 'Пылесосы',
    url: '/vacuum/',
  },
  {
    name: 'Матрасы',
    url: '/mattresses/',
  },
  {
    name: 'Диван',
    url: '/cushioned_furniture/',
  },
];

export const options: Option[] = [
  {
    name: 'Все',
    value: 'all',
  },
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
];

export const promoProducts: ProductCardType[] = [
  {
    id: 612022,
    currentPrice: '5,01 р.',
    productImg:
      'https://cdn21vek.by/img/galleries/7712/33/preview/612022_aversev_6311ac53a09d2.jpeg',
    oldPrice: '8,15 р.',
    title: 'Рабочая тетрадь Аверсэв Английский язык. 6 класс. Часть 1. 2022 (Юхнель Н. и др.)',
    productLink: 'https://www.21vek.by/educational_literature/612022_aversev.html',
    type: 'Рабочая тетрадь',
    discount: 39,
  },
  {
    id: 45,
    currentPrice: '10,92 р.',
    productImg: 'https://cdn21vek.by/img/galleries/6472/963/preview/45_aversev_6135d0d81569d.jpeg',
    title: 'Учебное пособие Аверсэв Умней-ка. 4-5 лет. Знакомство с природой (Петрикевич А.А.)',
    productLink: 'https://www.21vek.by/educational_literature/45_aversev.html',
    type: 'Учебное пособие',
    discountType: 'Суперцена',
  },
  {
    id: 612023,
    currentPrice: '5,01 р.',
    productImg:
      'https://cdn21vek.by/img/galleries/7712/33/preview/612022_aversev_6311ac53a09d2.jpeg',
    oldPrice: '8,15 р.',
    title: 'Рабочая тетрадь Аверсэв Английский язык. 6 класс. Часть 1. 2022 (Юхнель Н. и др.)',
    productLink: 'https://www.21vek.by/educational_literature/612022_aversev.html',
    type: 'Рабочая тетрадь',
    discount: 39,
  },
  {
    id: 46,
    currentPrice: '10,92 р.',
    productImg: 'https://cdn21vek.by/img/galleries/6472/963/preview/45_aversev_6135d0d81569d.jpeg',
    title: 'Учебное пособие Аверсэв Умней-ка. 4-5 лет. Знакомство с природой (Петрикевич А.А.)',
    productLink: 'https://www.21vek.by/educational_literature/45_aversev.html',
    type: 'Учебное пособие',
    discountType: 'Суперцена',
  },
  {
    id: 612024,
    currentPrice: '5,01 р.',
    productImg:
      'https://cdn21vek.by/img/galleries/7712/33/preview/612022_aversev_6311ac53a09d2.jpeg',
    oldPrice: '8,15 р.',
    title: 'Рабочая тетрадь Аверсэв Английский язык. 6 класс. Часть 1. 2022 (Юхнель Н. и др.)',
    productLink: 'https://www.21vek.by/educational_literature/612022_aversev.html',
    type: 'Рабочая тетрадь',
    discount: 39,
  },
];
