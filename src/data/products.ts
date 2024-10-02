import { ProductCardType } from '@/types/productCardModel';

export const popularProducts: ProductCardType[] = [
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
];

export type Refrigerator = {
  code: number;
  article: string;
  status: string;
  promoDiscount: number;
  discountRange: number | null;
  discountTypes: string[];
  categories: number[];
  name: string;
  model: string;
  modelSecondary: string;
  price: string;
  oldPrice: string | null;
  popular: number;
  multiple: number;
  producerId: number;
  producerName: string;
  producerNameSort: string;
  picture: string;
  url: string;
  sales: any[];
};

export const refrigerators: Refrigerator[] = [
  {
    code: 58129,
    article: '58.129',
    status: 'in',
    promoDiscount: 10,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4208-000',
    modelSecondary: '',
    price: '794,7 р.',
    oldPrice: '883,00 р.',
    popular: 1020.92,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/58/129/preview/atlant_4208000_65bc97b9ca11d.jpeg',
    url: '/refrigerators/4208000_atlant_58129.html',
    sales: [
      {
        id: 7019171,
        price: 794.7,
        description:
          'Новый, царапина на двери ХК, повреждена заводская упаковка, гарантия полная.',
        code: 7019171,
        image:
          'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview/4081809732575451183.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/4081809732575451183.jpg',
            small:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_s/4081809732575451183.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview/4081809732575451183.jpg',
            large:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_b/4081809732575451183.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/9082234382303833811.jpg',
            small:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_s/9082234382303833811.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview/9082234382303833811.jpg',
            large:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_b/9082234382303833811.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/106378024983555276.jpg',
            small:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_s/106378024983555276.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview/106378024983555276.jpg',
            large:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_b/106378024983555276.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/8768869503384550125.jpg',
            small:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_s/8768869503384550125.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview/8768869503384550125.jpg',
            large:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_b/8768869503384550125.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview/1267469253778301689.jpg',
            large:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_b/1267469253778301689.jpg',
            original:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/1267469253778301689.jpg',
            small:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_s/1267469253778301689.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/3595434475684865528.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview/3595434475684865528.jpg',
            small:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_s/3595434475684865528.jpg',
            large:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_b/3595434475684865528.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/1335222974362418442.jpg',
            small:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_s/1335222974362418442.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview/1335222974362418442.jpg',
            large:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_b/1335222974362418442.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/5486958228377450605.jpg',
            small:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_s/5486958228377450605.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview/5486958228377450605.jpg',
            large:
              'https://cdn21vek.by/img/galleries/58/129/sale/7019171/preview_b/5486958228377450605.jpg',
          },
        ],
        promoDiscount: 10,
      },
    ],
  },
  {
    code: 9028597,
    article: '9.028.597',
    status: 'in',
    promoDiscount: 10,
    discountRange: 10,
    discountTypes: ['discount'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ITS 5180 G',
    modelSecondary: '',
    price: '1349,00 р.',
    oldPrice: '1500,00 р.',
    popular: 781.68,
    multiple: 1,
    producerId: 13,
    producerName: 'Indesit',
    producerNameSort: 'Indesit_13',
    picture:
      'https://cdn21vek.by/img/galleries/9028/597/preview/its5180g_indesit_9028597_664b09c385df5.jpeg',
    url: '/refrigerators/its5180g_indesit_9028597.html',
    sales: [],
  },
  {
    code: 8285575,
    article: '8.285.575',
    status: 'in',
    promoDiscount: 18,
    discountRange: 10,
    discountTypes: ['discount'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'STS 150',
    modelSecondary: '',
    price: '789,00 р.',
    oldPrice: '960,00 р.',
    popular: 781.4,
    multiple: 1,
    producerId: 112389,
    producerName: 'Stinol',
    producerNameSort: 'Stinol_112389',
    picture:
      'https://cdn21vek.by/img/galleries/8285/575/preview/sts150_stinol__66a8ea9da3921.jpeg',
    url: '/refrigerators/sts150_stinol_.html',
    sales: [],
  },
  {
    code: 7167643,
    article: '7.167.643',
    status: 'in',
    promoDiscount: 36,
    discountRange: 30,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'CNMV5335E20VXR',
    modelSecondary: '',
    price: '1124,25 р.',
    oldPrice: '1750,00 р.',
    popular: 567.08,
    multiple: 1,
    producerId: 6,
    producerName: 'Beko',
    producerNameSort: 'Beko_6',
    picture:
      'https://cdn21vek.by/img/galleries/7167/643/preview/cnmv5335e20vxr_beko_dcc95f44ff51bf0f26c8bac151e57d99.jpg',
    url: '/refrigerators/cnmv5335e20vxr_beko.html',
    sales: [
      {
        id: 7015096,
        price: 1124.25,
        description:
          'Был в эксплуатации, после сервисного обслуживания (замена дверей ХК и МК), вмятина на левой боковой стенке, царапина на правой боковой стенке, загрязнения, нет заводской упаковки, гарантия полная.',
        code: 7015096,
        image:
          'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview/6613329152628557824.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/6613329152628557824.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_s/6613329152628557824.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview/6613329152628557824.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_b/6613329152628557824.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/3282930485704070457.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_s/3282930485704070457.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview/3282930485704070457.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_b/3282930485704070457.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/3570986719129705393.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_s/3570986719129705393.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview/3570986719129705393.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_b/3570986719129705393.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/3879091559572393445.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_s/3879091559572393445.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview/3879091559572393445.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_b/3879091559572393445.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/6255333751307100910.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_s/6255333751307100910.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview/6255333751307100910.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_b/6255333751307100910.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/2010128743311233202.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_s/2010128743311233202.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview/2010128743311233202.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_b/2010128743311233202.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/283653445268526667.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_s/283653445268526667.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview/283653445268526667.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7167/643/sale/7015096/preview_b/283653445268526667.jpg',
          },
        ],
        promoDiscount: 36,
      },
    ],
  },
  {
    code: 7167643,
    article: '7.167.643',
    status: 'in',
    promoDiscount: 14,
    discountRange: 10,
    discountTypes: ['discount'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'CNMV5335E20VXR',
    modelSecondary: '',
    price: '1499,00 р.',
    oldPrice: '1750,00 р.',
    popular: 567.08,
    multiple: 1,
    producerId: 6,
    producerName: 'Beko',
    producerNameSort: 'Beko_6',
    picture:
      'https://cdn21vek.by/img/galleries/7167/643/preview/cnmv5335e20vxr_beko_dcc95f44ff51bf0f26c8bac151e57d99.jpg',
    url: '/refrigerators/cnmv5335e20vxr_beko.html',
    sales: [],
  },
  {
    code: 5009,
    article: '5.009',
    status: 'in',
    promoDiscount: 10,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 6023-031',
    modelSecondary: '',
    price: '1101,6 р.',
    oldPrice: '1224,00 р.',
    popular: 530.54,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/5/9/preview/atlant_6023031_65e9779b05370.jpeg',
    url: '/refrigerators/atlant_6023031.html',
    sales: [
      {
        id: 6999115,
        price: 1162.8,
        description: 'Новый, царапина на двери МК, гарантия полная.',
        code: 6999115,
        image:
          'https://cdn21vek.by/img/galleries/5/9/sale/6999115/preview/555390477353198553.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/5/9/sale/6999115/555390477353198553.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5/9/sale/6999115/preview_s/555390477353198553.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5/9/sale/6999115/preview/555390477353198553.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5/9/sale/6999115/preview_b/555390477353198553.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5/9/sale/6999115/8608284799909081610.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5/9/sale/6999115/preview_s/8608284799909081610.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5/9/sale/6999115/preview/8608284799909081610.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5/9/sale/6999115/preview_b/8608284799909081610.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/5/9/sale/6999115/preview_s/1702954542806070956.jpg',
            original:
              'https://cdn21vek.by/img/galleries/5/9/sale/6999115/1702954542806070956.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5/9/sale/6999115/preview/1702954542806070956.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5/9/sale/6999115/preview_b/1702954542806070956.jpg',
          },
        ],
        promoDiscount: 5,
      },
      {
        id: 7015150,
        price: 1101.6,
        description:
          'Новый, вмятины на дверях и правой боковой стенке, нет заводской упаковки, гарантия полная.',
        code: 7015150,
        image:
          'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview/8994827332420086723.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/8994827332420086723.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_s/8994827332420086723.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview/8994827332420086723.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_b/8994827332420086723.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_s/4450098739323129413.jpg',
            original:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/4450098739323129413.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview/4450098739323129413.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_b/4450098739323129413.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/117263594629636943.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_s/117263594629636943.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview/117263594629636943.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_b/117263594629636943.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/4439006306224630175.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_s/4439006306224630175.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview/4439006306224630175.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_b/4439006306224630175.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/1612509339561729112.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_s/1612509339561729112.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview/1612509339561729112.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_b/1612509339561729112.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/3415335924497854567.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_s/3415335924497854567.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview/3415335924497854567.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_b/3415335924497854567.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_s/6687448323257851913.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview/6687448323257851913.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_b/6687448323257851913.jpg',
            original:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/6687448323257851913.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/7816129762314350848.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_s/7816129762314350848.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview/7816129762314350848.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_b/7816129762314350848.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/2320153094296436492.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_b/2320153094296436492.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_s/2320153094296436492.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview/2320153094296436492.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/4758135156242803197.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_b/4758135156242803197.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview_s/4758135156242803197.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5/9/sale/7015150/preview/4758135156242803197.jpg',
          },
        ],
        promoDiscount: 10,
      },
    ],
  },
  {
    code: 8174900,
    article: '8.174.900',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'RID-80W',
    modelSecondary: '',
    price: '434,5 р.',
    oldPrice: null,
    popular: 474.14,
    multiple: 1,
    producerId: 2091,
    producerName: 'Renova',
    producerNameSort: 'Renova_2091',
    picture:
      'https://cdn21vek.by/img/galleries/8174/900/preview/rid80w_renova_640048591f18b.jpeg',
    url: '/refrigerators/rid80w_renova.html',
    sales: [
      {
        id: 6995982,
        price: 434.5,
        description:
          'Был в эксплуатации, после сервисного обслуживания (замена компрессора, фильтр-осушитель, пз реле), царапины, загрязнения, не заводской упаковки, гарантия полная.',
        code: 6995982,
        image:
          'https://cdn21vek.by/img/galleries/8174/900/sale/6995982/preview/4523116346702407709.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/8174/900/sale/6995982/4523116346702407709.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8174/900/sale/6995982/preview_s/4523116346702407709.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8174/900/sale/6995982/preview/4523116346702407709.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8174/900/sale/6995982/preview_b/4523116346702407709.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8174/900/sale/6995982/8851536576182097581.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8174/900/sale/6995982/preview_s/8851536576182097581.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8174/900/sale/6995982/preview/8851536576182097581.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8174/900/sale/6995982/preview_b/8851536576182097581.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8174/900/sale/6995982/7416448058614266758.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8174/900/sale/6995982/preview_s/7416448058614266758.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8174/900/sale/6995982/preview/7416448058614266758.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8174/900/sale/6995982/preview_b/7416448058614266758.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 6359799,
    article: '6.359.799',
    status: 'in',
    promoDiscount: 14,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ-4625-109-ND',
    modelSecondary: '',
    price: '1464,73 р.',
    oldPrice: '1703,18 р.',
    popular: 457.58,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/6359/799/preview/4625109nd_atlant_65c4cf57ad45b.jpeg',
    url: '/refrigerators/4625109nd_atlant.html',
    sales: [
      {
        id: 6960515,
        price: 1515.83,
        description:
          'Новый, две вмятины на задней стенке, потертости на вилке, нет заводской упаковки, гарантия полная.',
        code: 6960515,
        image:
          'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview/3623450340418998787.jpg',
        images: [
          {
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview/3623450340418998787.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview_b/3623450340418998787.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview_s/3623450340418998787.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/3623450340418998787.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/8571248037383481982.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview/8571248037383481982.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview_b/8571248037383481982.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview_s/8571248037383481982.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/4041593635401656835.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview/4041593635401656835.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview_b/4041593635401656835.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview_s/4041593635401656835.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/7104005437862444270.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview_s/7104005437862444270.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview/7104005437862444270.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview_b/7104005437862444270.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/5973552681663351436.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview_s/5973552681663351436.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview/5973552681663351436.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview_b/5973552681663351436.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/8842467855712025895.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview_s/8842467855712025895.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview/8842467855712025895.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6960515/preview_b/8842467855712025895.jpg',
          },
        ],
        promoDiscount: 11,
      },
      {
        id: 6924003,
        price: 1464.73,
        description:
          'Новый, вмятины на двери м/к, нет заводской упаковки, гарантия полная.',
        code: 6924003,
        image:
          'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview/2930356994012274784.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/2930356994012274784.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_s/2930356994012274784.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview/2930356994012274784.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_b/2930356994012274784.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview/1306848621849517387.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_b/1306848621849517387.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/1306848621849517387.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_s/1306848621849517387.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/4565910635311222720.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_s/4565910635311222720.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview/4565910635311222720.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_b/4565910635311222720.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/7112928032763860984.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_s/7112928032763860984.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview/7112928032763860984.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_b/7112928032763860984.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/4101339120148399816.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_s/4101339120148399816.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview/4101339120148399816.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_b/4101339120148399816.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/1802219308703499400.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_s/1802219308703499400.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview/1802219308703499400.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_b/1802219308703499400.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/1977027559049410415.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_s/1977027559049410415.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview/1977027559049410415.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_b/1977027559049410415.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/5695649592551930395.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_s/5695649592551930395.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview/5695649592551930395.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_b/5695649592551930395.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/3149727791321294115.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_s/3149727791321294115.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview/3149727791321294115.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_b/3149727791321294115.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/7076240657000720612.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_s/7076240657000720612.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview/7076240657000720612.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6924003/preview_b/7076240657000720612.jpg',
          },
        ],
        promoDiscount: 14,
      },
      {
        id: 6995953,
        price: 1515.83,
        description:
          'Новый, вмятина на левой боковой стенке, повреждена заводская упаковка, гарантия полная.',
        code: 6995953,
        image:
          'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview/1036552929302457533.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/1036552929302457533.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview_s/1036552929302457533.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview/1036552929302457533.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview_b/1036552929302457533.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/1740430631836035800.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview_s/1740430631836035800.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview/1740430631836035800.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview_b/1740430631836035800.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/6395575563416932618.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview_s/6395575563416932618.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview/6395575563416932618.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview_b/6395575563416932618.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/915381699843224626.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview_s/915381699843224626.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview_b/915381699843224626.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview/915381699843224626.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/513185414050782725.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview_s/513185414050782725.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview/513185414050782725.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6359/799/sale/6995953/preview_b/513185414050782725.jpg',
          },
        ],
        promoDiscount: 11,
      },
    ],
  },
  {
    code: 8990390,
    article: '8.990.390',
    status: 'in',
    promoDiscount: 13,
    discountRange: 10,
    discountTypes: ['discount'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'DS 4160 G',
    modelSecondary: '',
    price: '1049,00 р.',
    oldPrice: '1200,00 р.',
    popular: 422.72,
    multiple: 1,
    producerId: 13,
    producerName: 'Indesit',
    producerNameSort: 'Indesit_13',
    picture:
      'https://cdn21vek.by/img/galleries/8990/390/preview/ds4160g_indesit_8990390_662f399a963cf.jpeg',
    url: '/refrigerators/ds4160g_indesit_8990390.html',
    sales: [],
  },
  {
    code: 6368410,
    article: '6.368.410',
    status: 'in',
    promoDiscount: 16,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4626-109 ND',
    modelSecondary: '',
    price: '1434,72 р.',
    oldPrice: '1708,00 р.',
    popular: 411.06,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/6368/410/preview/4626109nd_atlant_65c4e65eeb253.jpeg',
    url: '/refrigerators/4626109nd_atlant.html',
    sales: [
      {
        id: 6967323,
        price: 1434.72,
        description:
          'Новый, вмятина на двери х/к, нет заводской упаковки, гарантия полная.',
        code: 6967323,
        image:
          'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview/8391950846696168395.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/8391950846696168395.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview_s/8391950846696168395.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview/8391950846696168395.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview_b/8391950846696168395.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/5364418154391377243.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview/5364418154391377243.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview_b/5364418154391377243.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview_s/5364418154391377243.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/7504524892072529601.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview_s/7504524892072529601.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview/7504524892072529601.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview_b/7504524892072529601.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/7817665362290093548.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview_s/7817665362290093548.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview/7817665362290093548.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview_b/7817665362290093548.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/4943855588328212239.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview_s/4943855588328212239.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview/4943855588328212239.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/410/sale/6967323/preview_b/4943855588328212239.jpg',
          },
        ],
        promoDiscount: 16,
      },
    ],
  },
  {
    code: 8956660,
    article: '8.956.660',
    status: 'in',
    promoDiscount: 16,
    discountRange: 10,
    discountTypes: ['discount'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ITS 5200 G',
    modelSecondary: '',
    price: '1111,00 р.',
    oldPrice: '1111,00 р.',
    popular: 408.4,
    multiple: 1,
    producerId: 13,
    producerName: 'Indesit',
    producerNameSort: 'Indesit_13',
    picture:
      'https://cdn21vek.by/img/galleries/8956/660/preview/its5200g_indesit_8956660_66a20e0963715.jpeg',
    url: '/refrigerators/its5200g_indesit_8956660.html',
    sales: [],
  },
  {
    code: 8174352,
    article: '8.174.352',
    status: 'in',
    promoDiscount: 10,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4623-101',
    modelSecondary: '',
    price: '1111,00 р.',
    oldPrice: '1111,00 р.',
    popular: 388.76,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/8174/352/preview/4623101_atlant_65c32118f1a34.jpeg',
    url: '/refrigerators/4623101_atlant.html',
    sales: [
      {
        id: 7015101,
        price: 1098,
        description:
          'Новый, вмятина на дверце МК, повреждена заводская упаковка, гарантия полная.',
        code: 7015101,
        image:
          'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview/402788025160237758.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/402788025160237758.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_s/402788025160237758.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview/402788025160237758.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_b/402788025160237758.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/2056481430503016760.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_s/2056481430503016760.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview/2056481430503016760.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_b/2056481430503016760.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/9103786979248429250.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_s/9103786979248429250.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview/9103786979248429250.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_b/9103786979248429250.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/1545161714782390624.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_s/1545161714782390624.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview/1545161714782390624.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_b/1545161714782390624.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/4655749716487046886.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_s/4655749716487046886.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview/4655749716487046886.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_b/4655749716487046886.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/8129673614387598178.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_s/8129673614387598178.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview/8129673614387598178.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_b/8129673614387598178.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview/1167857574437374340.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_b/1167857574437374340.jpg',
            original:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/1167857574437374340.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8174/352/sale/7015101/preview_s/1167857574437374340.jpg',
          },
        ],
        promoDiscount: 10,
      },
    ],
  },
  {
    code: 8285581,
    article: '8.285.581',
    status: 'in',
    promoDiscount: 15,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'STS 167',
    modelSecondary: '',
    price: '755111,00 р.',
    oldPrice: '111,00 р.',
    popular: 370.3,
    multiple: 1,
    producerId: 112389,
    producerName: 'Stinol',
    producerNameSort: 'Stinol_112389',
    picture:
      'https://cdn21vek.by/img/galleries/8285/581/preview/sts167_stinol__66a9feace8058.jpeg',
    url: '/refrigerators/sts167_stinol_.html',
    sales: [
      {
        id: 7006564,
        price: 755.65,
        description:
          'Новый, сломано крепление планки, нет заводской упаковки, гарантия полная.',
        code: 7006564,
        image:
          'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview/5153062758617770190.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/5153062758617770190.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview/5153062758617770190.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_s/5153062758617770190.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_b/5153062758617770190.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/9127699167233871440.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_s/9127699167233871440.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview/9127699167233871440.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_b/9127699167233871440.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/6512136187298083876.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview/6512136187298083876.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_b/6512136187298083876.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_s/6512136187298083876.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/2958444326896389355.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_s/2958444326896389355.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview/2958444326896389355.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_b/2958444326896389355.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/1908303892401512076.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_s/1908303892401512076.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview/1908303892401512076.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_b/1908303892401512076.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/4238466431345144397.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_s/4238466431345144397.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview/4238466431345144397.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_b/4238466431345144397.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/4175709828069934112.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_s/4175709828069934112.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview/4175709828069934112.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8285/581/sale/7006564/preview_b/4175709828069934112.jpg',
          },
        ],
        promoDiscount: 15,
      },
    ],
  },
  {
    code: 461713,
    article: '461.713',
    status: 'in',
    promoDiscount: 21,
    discountRange: 20,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4624-101',
    modelSecondary: '',
    price: '951111,00 р.',
    oldPrice: '1111,00 р.',
    popular: 369.26,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/461/713/preview/4624101_atlant_65f17fa3cf10c.jpeg',
    url: '/refrigerators/4624101_atlant.html',
    sales: [
      {
        id: 6955921,
        price: 951.16,
        description:
          'Был в эксплуатации, вмятины и царапины на боковых стенках и дверце, загрязнения, нет заводской упаковки, гарантия полная.',
        code: 6955921,
        image:
          'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview/8613927782671817631.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/8613927782671817631.jpg',
            small:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_s/8613927782671817631.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview/8613927782671817631.jpg',
            large:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_b/8613927782671817631.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/1943257987863120445.jpg',
            small:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_s/1943257987863120445.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview/1943257987863120445.jpg',
            large:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_b/1943257987863120445.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview/5017590011777120205.jpg',
            large:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_b/5017590011777120205.jpg',
            original:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/5017590011777120205.jpg',
            small:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_s/5017590011777120205.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/4376635020023460260.jpg',
            small:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_s/4376635020023460260.jpg',
            large:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_b/4376635020023460260.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview/4376635020023460260.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview/2418742231845348426.jpg',
            large:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_b/2418742231845348426.jpg',
            original:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/2418742231845348426.jpg',
            small:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_s/2418742231845348426.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/6176916004901673950.jpg',
            small:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_s/6176916004901673950.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview/6176916004901673950.jpg',
            large:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_b/6176916004901673950.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/3200056945987424208.jpg',
            small:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_s/3200056945987424208.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview/3200056945987424208.jpg',
            large:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_b/3200056945987424208.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_b/8276846326358309346.jpg',
            original:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/8276846326358309346.jpg',
            small:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_s/8276846326358309346.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview/8276846326358309346.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/6497068181127167576.jpg',
            small:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_s/6497068181127167576.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview/6497068181127167576.jpg',
            large:
              'https://cdn21vek.by/img/galleries/461/713/sale/6955921/preview_b/6497068181127167576.jpg',
          },
        ],
        promoDiscount: 21,
      },
    ],
  },
  {
    code: 7235325,
    article: '7.235.325',
    status: 'in',
    promoDiscount: 16,
    discountRange: 10,
    discountTypes: ['discount'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ITR 5200 W',
    modelSecondary: '',
    price: '1111,00 р.',
    oldPrice: '1111,00 р.',
    popular: 339.32,
    multiple: 1,
    producerId: 13,
    producerName: 'Indesit',
    producerNameSort: 'Indesit_13',
    picture:
      'https://cdn21vek.by/img/galleries/7235/325/preview/itr5200w_indesit_d074bc0d3ba726a610627e69d84cba7d.jpg',
    url: '/refrigerators/itr5200w_indesit.html',
    sales: [],
  },
  {
    code: 7409773,
    article: '7.409.773',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['superprice'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'RCNK335E20VW',
    modelSecondary: '',
    price: '1111,00 р.',
    oldPrice: null,
    popular: 308.58,
    multiple: 1,
    producerId: 6,
    producerName: 'Beko',
    producerNameSort: 'Beko_6',
    picture:
      'https://cdn21vek.by/img/galleries/7409/773/preview/rcnk335e20vw_beko_633d3f0f9ffd7.jpeg',
    url: '/refrigerators/rcnk335e20vw_beko.html',
    sales: [],
  },
  {
    code: 6368411,
    article: '6.368.411',
    status: 'in',
    promoDiscount: 20,
    discountRange: 20,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4626-149 ND',
    modelSecondary: '',
    price: '1561,00 р.',
    oldPrice: '1952,00 р.',
    popular: 308.42,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/6368/411/preview/4626149nd_atlant_9a098611835b47c4cc3753023b3ac4ad.JPG',
    url: '/refrigerators/4626149nd_atlant.html',
    sales: [
      {
        id: 7004577,
        price: 1561.63,
        description:
          'Новый,  вмятины на правой боковой стенке, двери ХК и МК, нет заводской  упаковки, гарантия полная.',
        code: 7004577,
        image:
          'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview/7895945664717340479.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/7895945664717340479.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_s/7895945664717340479.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview/7895945664717340479.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_b/7895945664717340479.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/6063555485091878283.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_s/6063555485091878283.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview/6063555485091878283.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_b/6063555485091878283.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/7182195065745944503.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_s/7182195065745944503.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview/7182195065745944503.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_b/7182195065745944503.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview/4532868640067740788.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_b/4532868640067740788.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/4532868640067740788.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_s/4532868640067740788.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/1965047972577852700.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_s/1965047972577852700.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview/1965047972577852700.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_b/1965047972577852700.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/4645882497794072231.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_s/4645882497794072231.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview/4645882497794072231.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_b/4645882497794072231.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/4975465194550295411.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_s/4975465194550295411.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview/4975465194550295411.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_b/4975465194550295411.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/910906798104749859.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_s/910906798104749859.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview/910906798104749859.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_b/910906798104749859.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/553075788733169860.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_s/553075788733169860.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview/553075788733169860.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_b/553075788733169860.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/7646216952771077590.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_s/7646216952771077590.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview/7646216952771077590.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/411/sale/7004577/preview_b/7646216952771077590.jpg',
          },
        ],
        promoDiscount: 20,
      },
    ],
  },
  {
    code: 7268976,
    article: '7.268.976',
    status: 'in',
    promoDiscount: 17,
    discountRange: 10,
    discountTypes: ['discount'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'B5RCNK363ZXBR',
    modelSecondary: '',
    price: '1111,00 р.',
    oldPrice: '1111,00 р.',
    popular: 306.62,
    multiple: 1,
    producerId: 6,
    producerName: 'Beko',
    producerNameSort: 'Beko_6',
    picture:
      'https://cdn21vek.by/img/galleries/7268/976/preview/b5rcnk363zxbr_beko_e2309e354b3feabe0a4edc3f97138513.jpg',
    url: '/refrigerators/b5rcnk363zxbr_beko.html',
    sales: [],
  },
  {
    code: 7177,
    article: '7.177',
    status: 'in',
    promoDiscount: 26,
    discountRange: 20,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4010-022',
    modelSecondary: '',
    price: '767,00 р.',
    oldPrice: '1111,00 р.',
    popular: 301.5,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/7/177/preview/atlant_4010022_65bc8acbaba93.jpeg',
    url: '/refrigerators/atlant_4010022.html',
    sales: [
      {
        id: 6982445,
        price: 767.38,
        description:
          'Был в эксплуатации, после сервисного обслуживания (замена компрессора, фильтр-осушитель, пз реле), царапины, загрязнения, вмятины на левой боковой стенке, нет заводской упаковки, гарантия по 30.07.2027г.',
        code: 6982445,
        image:
          'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview/8843833686813778272.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/8843833686813778272.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_s/8843833686813778272.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview/8843833686813778272.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_b/8843833686813778272.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/3972675514959412199.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_s/3972675514959412199.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview/3972675514959412199.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_b/3972675514959412199.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/741555795743166655.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_s/741555795743166655.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview/741555795743166655.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_b/741555795743166655.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/8700264316186395717.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_s/8700264316186395717.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview/8700264316186395717.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_b/8700264316186395717.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/885188515370291083.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_s/885188515370291083.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview/885188515370291083.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_b/885188515370291083.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/3107521202218878277.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_s/3107521202218878277.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview/3107521202218878277.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_b/3107521202218878277.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/3591851246978814891.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_s/3591851246978814891.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview/3591851246978814891.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/6982445/preview_b/3591851246978814891.jpg',
          },
        ],
        promoDiscount: 26,
      },
      {
        id: 7015134,
        price: 933.3,
        description:
          'Новый, вмятины на левой боковой стенке, повреждена заводская упаковка, гарантия полная.',
        code: 7015134,
        image:
          'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview/913761515045952567.jpg',
        images: [
          {
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview/913761515045952567.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_b/913761515045952567.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/913761515045952567.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_s/913761515045952567.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/6877322290539898145.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_s/6877322290539898145.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_b/6877322290539898145.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview/6877322290539898145.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/6202274076060745560.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_s/6202274076060745560.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview/6202274076060745560.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_b/6202274076060745560.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/302398566289916757.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_s/302398566289916757.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview/302398566289916757.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_b/302398566289916757.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/419974089127118236.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_s/419974089127118236.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview/419974089127118236.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_b/419974089127118236.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_s/5899738625591322362.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_b/5899738625591322362.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview/5899738625591322362.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/5899738625591322362.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/3172277451567335441.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_s/3172277451567335441.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview/3172277451567335441.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7/177/sale/7015134/preview_b/3172277451567335441.jpg',
          },
        ],
        promoDiscount: 10,
      },
    ],
  },
  {
    code: 4873,
    article: '4.873',
    status: 'in',
    promoDiscount: 10,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 6024-031',
    modelSecondary: '',
    price: '110,00 р.',
    oldPrice: '1111,00 р.',
    popular: 298.96,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/4/873/preview/atlant_6024031_65c5d173a34c8.jpeg',
    url: '/refrigerators/atlant_6024031.html',
    sales: [
      {
        id: 7015107,
        price: 1108.8,
        description:
          'Был в эксплуатации, вмятина и царапина на левой боковой стенке, загрязнения, повреждена заводская упаковка, гарантия полная.',
        code: 7015107,
        image:
          'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview/4851059638554902350.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/4851059638554902350.jpg',
            small:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview_s/4851059638554902350.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview/4851059638554902350.jpg',
            large:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview_b/4851059638554902350.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/7423364588015797781.jpg',
            small:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview_s/7423364588015797781.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview/7423364588015797781.jpg',
            large:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview_b/7423364588015797781.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/2393425685307645434.jpg',
            small:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview_s/2393425685307645434.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview/2393425685307645434.jpg',
            large:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview_b/2393425685307645434.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/253203057117064020.jpg',
            small:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview_s/253203057117064020.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview/253203057117064020.jpg',
            large:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview_b/253203057117064020.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/4096523784682169786.jpg',
            small:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview_s/4096523784682169786.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview/4096523784682169786.jpg',
            large:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview_b/4096523784682169786.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/6908827914639337884.jpg',
            small:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview_s/6908827914639337884.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview/6908827914639337884.jpg',
            large:
              'https://cdn21vek.by/img/galleries/4/873/sale/7015107/preview_b/6908827914639337884.jpg',
          },
        ],
        promoDiscount: 10,
      },
    ],
  },
  {
    code: 6732054,
    article: '6.732.054',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4625-149-ND',
    modelSecondary: '',
    price: '1182,00 р.',
    oldPrice: null,
    popular: 291.22,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/6732/54/preview/4625149nd_atlant_65e983d897088.jpeg',
    url: '/refrigerators/4625149nd_atlant.html',
    sales: [
      {
        id: 6847465,
        price: 1181.72,
        description:
          'Был в эксплуатации, после сервисного обслуживания (замена компрессора, фильтра, пз реле), царапины и вмятины по корпусу, сколы ЛКП на дверце м/к, загрязнения, сломана боковая полка, нет заводской упаковки, гарантия по 08.12.2025г.',
        code: 6847465,
        image:
          'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/4868276029435905509.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/4868276029435905509.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/4868276029435905509.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/4868276029435905509.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/4868276029435905509.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/6513212230149162505.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/6513212230149162505.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/6513212230149162505.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/6513212230149162505.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/1628518039080812994.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/1628518039080812994.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/1628518039080812994.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/1628518039080812994.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/324461575461303557.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/324461575461303557.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/324461575461303557.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/324461575461303557.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/1920803986064675447.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/1920803986064675447.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/1920803986064675447.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/1920803986064675447.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/4185153076389835782.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/4185153076389835782.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/4185153076389835782.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/4185153076389835782.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/3210829098542960035.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/3210829098542960035.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/3210829098542960035.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/3210829098542960035.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/1033054775631054083.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/1033054775631054083.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/1033054775631054083.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/1033054775631054083.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/1795506207271116653.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/1795506207271116653.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/1795506207271116653.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/1795506207271116653.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/8254937343206999370.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/8254937343206999370.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/8254937343206999370.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/8254937343206999370.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/5858848523280446142.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/5858848523280446142.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/5858848523280446142.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/5858848523280446142.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/253183335496981418.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/253183335496981418.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/253183335496981418.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/253183335496981418.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/7974023247562286562.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/7974023247562286562.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/7974023247562286562.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/7974023247562286562.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/5772915337954028415.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/5772915337954028415.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/5772915337954028415.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/5772915337954028415.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/1663006113472633048.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/1663006113472633048.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/1663006113472633048.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/1663006113472633048.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/8877586104803141671.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/8877586104803141671.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/8877586104803141671.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/8877586104803141671.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/9082898118512144781.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview/9082898118512144781.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_b/9082898118512144781.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6847465/preview_s/9082898118512144781.jpg',
          },
        ],
        promoDiscount: 0,
      },
      {
        id: 6885641,
        price: 1486.68,
        description:
          'Новый, вмятины на дверцах х/к и м/к, царапины на дверце х/к и правой боковой стенки с повреждением ЛКП, скол с трещинами на сенсорном дисплее, нет заводской упаковки, гарантия полная.',
        code: 6885641,
        image:
          'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview/6165598540459643352.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/6165598540459643352.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview/6165598540459643352.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_b/6165598540459643352.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_s/6165598540459643352.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/3815148168955954196.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_s/3815148168955954196.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview/3815148168955954196.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_b/3815148168955954196.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/5468172269856024460.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_s/5468172269856024460.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview/5468172269856024460.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_b/5468172269856024460.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview/8777780867566002244.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_b/8777780867566002244.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_s/8777780867566002244.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/8777780867566002244.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/6693773398679966800.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_s/6693773398679966800.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview/6693773398679966800.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_b/6693773398679966800.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_b/5811025735372483306.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/5811025735372483306.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_s/5811025735372483306.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview/5811025735372483306.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview/7331812470182667290.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/7331812470182667290.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_b/7331812470182667290.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_s/7331812470182667290.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_s/1144043694006735540.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview_b/1144043694006735540.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/1144043694006735540.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6732/54/sale/6885641/preview/1144043694006735540.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 6488573,
    article: '6.488.573',
    status: 'in',
    promoDiscount: 21,
    discountRange: 20,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4625-101 NL',
    modelSecondary: '',
    price: '1281,00 р.',
    oldPrice: '1622,00 р.',
    popular: 286.56,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/6488/573/preview/4625101nl_atlant_65f187eeceb89.jpeg',
    url: '/refrigerators/4625101nl_atlant.html',
    sales: [
      {
        id: 6888179,
        price: 1362.57,
        description:
          'Новый, вмятины на левой боковой стенке, сколы на дверце х/к, нет заводской упаковки, гарантия полная.',
        code: 6888179,
        image:
          'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview/4881882305484484358.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/4881882305484484358.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_s/4881882305484484358.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview/4881882305484484358.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_b/4881882305484484358.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/5040093102948614599.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_s/5040093102948614599.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_b/5040093102948614599.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview/5040093102948614599.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/761711042484401864.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_s/761711042484401864.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview/761711042484401864.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_b/761711042484401864.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/8560602276586512859.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_s/8560602276586512859.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview/8560602276586512859.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_b/8560602276586512859.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/8339825168883137808.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_s/8339825168883137808.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview/8339825168883137808.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_b/8339825168883137808.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/469693327619586493.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_s/469693327619586493.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview/469693327619586493.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_b/469693327619586493.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview/4153547439777847481.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_b/4153547439777847481.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_s/4153547439777847481.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/4153547439777847481.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/734620955199349111.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_s/734620955199349111.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview/734620955199349111.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_b/734620955199349111.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/4943135313265208803.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_s/4943135313265208803.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview/4943135313265208803.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_b/4943135313265208803.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/7853487785757320525.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_s/7853487785757320525.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview/7853487785757320525.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_b/7853487785757320525.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/2832152212937273156.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_s/2832152212937273156.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview/2832152212937273156.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6888179/preview_b/2832152212937273156.jpg',
          },
        ],
        promoDiscount: 16,
      },
      {
        id: 6960476,
        price: 1281.47,
        description:
          'Был в эксплуатации, после сервисного обслуживания (замена компрессора, фильтра-осушителя, пз реле), царапины и вмятины по всему корпусу, загрязнения, нет заводской упаковки, гарантия по 13.11.2025г.',
        code: 6960476,
        image:
          'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview/5212543020239171396.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/5212543020239171396.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_s/5212543020239171396.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview/5212543020239171396.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_b/5212543020239171396.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/1025571030597718434.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_s/1025571030597718434.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview/1025571030597718434.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_b/1025571030597718434.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/8773000225874062135.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_s/8773000225874062135.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview/8773000225874062135.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_b/8773000225874062135.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_b/8465073509451022980.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/8465073509451022980.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_s/8465073509451022980.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview/8465073509451022980.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/9080657058680329428.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview/9080657058680329428.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_b/9080657058680329428.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_s/9080657058680329428.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/2278678798378263650.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_s/2278678798378263650.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview/2278678798378263650.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_b/2278678798378263650.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/7340445718320609786.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_s/7340445718320609786.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview/7340445718320609786.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_b/7340445718320609786.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview/5159131101226661789.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_b/5159131101226661789.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/5159131101226661789.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_s/5159131101226661789.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/6382873177299374419.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_s/6382873177299374419.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview/6382873177299374419.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_b/6382873177299374419.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_s/4732786921682824815.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview/4732786921682824815.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_b/4732786921682824815.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/4732786921682824815.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview/8409336104527152501.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_b/8409336104527152501.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/8409336104527152501.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/573/sale/6960476/preview_s/8409336104527152501.jpg',
          },
        ],
        promoDiscount: 21,
      },
    ],
  },
  {
    code: 7235047,
    article: '7.235.047',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'RCNK335E20VX',
    modelSecondary: '',
    price: '15361,00 р.',
    oldPrice: null,
    popular: 283.84,
    multiple: 1,
    producerId: 6,
    producerName: 'Beko',
    producerNameSort: 'Beko_6',
    picture:
      'https://cdn21vek.by/img/galleries/7235/47/preview/rcnk335e20vx_beko_632b3abb7c6af.jpeg',
    url: '/refrigerators/rcnk335e20vx_beko.html',
    sales: [
      {
        id: 6979166,
        price: 1536.36,
        description:
          'Новый, вмятины на левой боковой и задней стенках, погнута решетка, нет заводской упаковки, гарантия полная.',
        code: 6979166,
        image:
          'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview/8000832494291851186.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/8000832494291851186.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview_s/8000832494291851186.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview/8000832494291851186.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview_b/8000832494291851186.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview/7966287004819218505.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview_b/7966287004819218505.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/7966287004819218505.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview_s/7966287004819218505.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/52022535796774131.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview_s/52022535796774131.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview/52022535796774131.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview_b/52022535796774131.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/2876387073820217035.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview_s/2876387073820217035.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview/2876387073820217035.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview_b/2876387073820217035.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/4638281835127682410.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview_s/4638281835127682410.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview/4638281835127682410.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview_b/4638281835127682410.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/5888569962127414391.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview_s/5888569962127414391.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview/5888569962127414391.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7235/47/sale/6979166/preview_b/5888569962127414391.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 653550,
    article: '653.550',
    status: 'in',
    promoDiscount: 10,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4624-141',
    modelSecondary: '',
    price: '1211,00 р.',
    oldPrice: '1111,00 р.',
    popular: 280.78,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/653/550/preview/4624141_atlant_65f1993899fb5.jpeg',
    url: '/refrigerators/4624141_atlant.html',
    sales: [
      {
        id: 7015129,
        price: 1213.2,
        description:
          'Новый, вмятина на правой боковой стенке, повреждена заводская упаковка, гарантия полная.',
        code: 7015129,
        image:
          'https://cdn21vek.by/img/galleries/653/550/sale/7015129/preview/3896021559850706955.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/3896021559850706955.jpg',
            small:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/preview_s/3896021559850706955.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/preview/3896021559850706955.jpg',
            large:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/preview_b/3896021559850706955.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/7567581583681237799.jpg',
            small:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/preview_s/7567581583681237799.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/preview/7567581583681237799.jpg',
            large:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/preview_b/7567581583681237799.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/4306155031140300183.jpg',
            small:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/preview_s/4306155031140300183.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/preview/4306155031140300183.jpg',
            large:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/preview_b/4306155031140300183.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/6097622215962782258.jpg',
            small:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/preview_s/6097622215962782258.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/preview/6097622215962782258.jpg',
            large:
              'https://cdn21vek.by/img/galleries/653/550/sale/7015129/preview_b/6097622215962782258.jpg',
          },
        ],
        promoDiscount: 10,
      },
    ],
  },
  {
    code: 6378259,
    article: '6.378.259',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ITR 5180 S',
    modelSecondary: '',
    price: '1236,00 р.',
    oldPrice: null,
    popular: 277.5,
    multiple: 1,
    producerId: 13,
    producerName: 'Indesit',
    producerNameSort: 'Indesit_13',
    picture:
      'https://cdn21vek.by/img/galleries/6378/259/preview/itr5180s_indesit_66a1f70c185b8.jpeg',
    url: '/refrigerators/itr5180s_indesit.html',
    sales: [
      {
        id: 7006547,
        price: 1236.75,
        description:
          'Был в эксплуатации, после сервисного обслуживания (замена компрессора), царапины, загрязнения, нет заводской упаковки, гарантия полная.',
        code: 7006547,
        image:
          'https://cdn21vek.by/img/galleries/6378/259/sale/7006547/preview/7767477685427455046.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/6378/259/sale/7006547/7767477685427455046.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6378/259/sale/7006547/preview_s/7767477685427455046.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6378/259/sale/7006547/preview/7767477685427455046.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6378/259/sale/7006547/preview_b/7767477685427455046.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6378/259/sale/7006547/8953735876519326088.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6378/259/sale/7006547/preview_s/8953735876519326088.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6378/259/sale/7006547/preview/8953735876519326088.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6378/259/sale/7006547/preview_b/8953735876519326088.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 8952540,
    article: '8.952.540',
    status: 'in',
    promoDiscount: 10,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4621-141 NL',
    modelSecondary: '',
    price: '1441,00 р.',
    oldPrice: '1111,00 р.',
    popular: 274.42,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/8952/540/preview/4621141nl_atlant_8952540_661e158b4407d.jpeg',
    url: '/refrigerators/4621141nl_atlant_8952540.html',
    sales: [
      {
        id: 6991715,
        price: 1440.9,
        description:
          'Новый, вмятина на задней стенке, сломана пластиковая крышка на задней стенке, повреждена заводская упаковка, гарантия полная.',
        code: 6991715,
        image:
          'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview/2326544850723628845.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/2326544850723628845.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview/2326544850723628845.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_b/2326544850723628845.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_s/2326544850723628845.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/3848219355217792375.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_s/3848219355217792375.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_b/3848219355217792375.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview/3848219355217792375.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/343549645855556050.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_s/343549645855556050.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview/343549645855556050.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_b/343549645855556050.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/4856974642523483014.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_b/4856974642523483014.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_s/4856974642523483014.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview/4856974642523483014.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/7896743462380972844.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_s/7896743462380972844.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview/7896743462380972844.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_b/7896743462380972844.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/5050736090140855223.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_s/5050736090140855223.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview/5050736090140855223.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_b/5050736090140855223.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/5742177174806028603.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_s/5742177174806028603.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview/5742177174806028603.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8952/540/sale/6991715/preview_b/5742177174806028603.jpg',
          },
        ],
        promoDiscount: 10,
      },
    ],
  },
  {
    code: 653552,
    article: '653.552',
    status: 'in',
    promoDiscount: 10,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4621-141',
    modelSecondary: '',
    price: '1175,00 р.',
    oldPrice: '1111,00 р.',
    popular: 271.94,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/653/552/preview/4621141_atlant_65f986ca64c5c.jpeg',
    url: '/refrigerators/4621141_atlant.html',
    sales: [
      {
        id: 7019239,
        price: 1170.9,
        description:
          'Новый, дефект решетки в морозильном отделении, повреждена заводская упаковка, гарантия полная.',
        code: 7019239,
        image:
          'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview/8445880529388208890.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/8445880529388208890.jpg',
            small:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_s/8445880529388208890.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview/8445880529388208890.jpg',
            large:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_b/8445880529388208890.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/3805644023749199872.jpg',
            small:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_s/3805644023749199872.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview/3805644023749199872.jpg',
            large:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_b/3805644023749199872.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/2890164332670598142.jpg',
            small:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_s/2890164332670598142.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview/2890164332670598142.jpg',
            large:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_b/2890164332670598142.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/8548715763195743697.jpg',
            small:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_s/8548715763195743697.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview/8548715763195743697.jpg',
            large:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_b/8548715763195743697.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/2719992724444908056.jpg',
            small:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_s/2719992724444908056.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview/2719992724444908056.jpg',
            large:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_b/2719992724444908056.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/8023683906417871815.jpg',
            small:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_s/8023683906417871815.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview/8023683906417871815.jpg',
            large:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_b/8023683906417871815.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/4932042910901234981.jpg',
            small:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_s/4932042910901234981.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview/4932042910901234981.jpg',
            large:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_b/4932042910901234981.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/804823152484983154.jpg',
            small:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_s/804823152484983154.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview/804823152484983154.jpg',
            large:
              'https://cdn21vek.by/img/galleries/653/552/sale/7019239/preview_b/804823152484983154.jpg',
          },
        ],
        promoDiscount: 10,
      },
    ],
  },
  {
    code: 8507519,
    article: '8.507.519',
    status: 'in',
    promoDiscount: 21,
    discountRange: 20,
    discountTypes: ['discount'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'GC-B459SLCL',
    modelSecondary: '',
    price: '2111,00 р.',
    oldPrice: '2111,00 р.',
    popular: 268.88,
    multiple: 1,
    producerId: 3,
    producerName: 'LG',
    producerNameSort: 'LG_3',
    picture:
      'https://cdn21vek.by/img/galleries/8507/519/preview/gcb459slcl_lg_0c4ac884d01c80edd21a6b4a7ee58866.jpg',
    url: '/refrigerators/gcb459slcl_lg.html',
    sales: [],
  },
  {
    code: 7731434,
    article: '7.731.434',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'DoorCooling GW-B509SLKM',
    modelSecondary: '',
    price: '1111,00 р.',
    oldPrice: null,
    popular: 266.46,
    multiple: 1,
    producerId: 3,
    producerName: 'LG',
    producerNameSort: 'LG_3',
    picture:
      'https://cdn21vek.by/img/galleries/7731/434/preview/doorcoolinggwb509slkm_lg_631a37db6f9cb.jpeg',
    url: '/refrigerators/doorcoolinggwb509slkm_lg.html',
    sales: [
      {
        id: 5884158,
        price: 2351.67,
        description:
          'Новый, вмятина на верхней двери,  повреждена заводская упаковка, полная гарантия.',
        code: 5884158,
        image:
          'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview/4886423412061521506.jpg',
        images: [
          {
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview_b/4886423412061521506.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/4886423412061521506.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview_s/4886423412061521506.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview/4886423412061521506.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/4902497060403754705.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview_s/4902497060403754705.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview/4902497060403754705.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview_b/4902497060403754705.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/703253294565812690.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview_s/703253294565812690.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview_b/703253294565812690.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview/703253294565812690.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/5769369725377968796.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview_s/5769369725377968796.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview/5769369725377968796.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview_b/5769369725377968796.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/2240865681649566970.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview_s/2240865681649566970.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview/2240865681649566970.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview_b/2240865681649566970.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview/205806769978876854.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/205806769978876854.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview_s/205806769978876854.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5884158/preview_b/205806769978876854.jpg',
          },
        ],
        promoDiscount: 0,
      },
      {
        id: 5662657,
        price: 2109,
        description:
          'Новый, вмятины на верхней крышке и боковых стенках, следы ржавчины на компрессоре, нет заводской упаковки, гарантия полная.',
        code: 5662657,
        image:
          'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview/6090835049987985498.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/6090835049987985498.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_s/6090835049987985498.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview/6090835049987985498.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_b/6090835049987985498.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/4901112166469808137.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_s/4901112166469808137.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview/4901112166469808137.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_b/4901112166469808137.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/1540990207383189546.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_s/1540990207383189546.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview/1540990207383189546.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_b/1540990207383189546.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/6480961205777606333.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_s/6480961205777606333.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview/6480961205777606333.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_b/6480961205777606333.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/1898305805762707687.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_s/1898305805762707687.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_b/1898305805762707687.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview/1898305805762707687.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/7520459141314619196.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_s/7520459141314619196.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview/7520459141314619196.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_b/7520459141314619196.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/8135086745397540398.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_s/8135086745397540398.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview/8135086745397540398.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5662657/preview_b/8135086745397540398.jpg',
          },
        ],
        promoDiscount: 0,
      },
      {
        id: 5587827,
        price: 1710,
        description:
          'Был в эксплуатации, многочисленные вмятины на боковых стенках и на дверях, загрязнены ящики морозильника, нет заводской упаковки, нет заводской  упаковки, гарантия полная.   ',
        code: 5587827,
        image:
          'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/4768027750065650123.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/4768027750065650123.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/4768027750065650123.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/4768027750065650123.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/4768027750065650123.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/1705474464871700151.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/1705474464871700151.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/1705474464871700151.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/1705474464871700151.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/4894312891459786502.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/4894312891459786502.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/4894312891459786502.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/4894312891459786502.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/5030267926965538136.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/5030267926965538136.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/5030267926965538136.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/5030267926965538136.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/8417812245794451661.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/8417812245794451661.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/8417812245794451661.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/8417812245794451661.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/8675177853340469528.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/8675177853340469528.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/8675177853340469528.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/8675177853340469528.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/8181841179470168746.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/8181841179470168746.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/8181841179470168746.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/8181841179470168746.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/8478107642702710841.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/8478107642702710841.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/8478107642702710841.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/8478107642702710841.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/6216732606684670284.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/6216732606684670284.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/6216732606684670284.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/6216732606684670284.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/5954581941601007702.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/5954581941601007702.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/5954581941601007702.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/5954581941601007702.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/2137240720476486934.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/2137240720476486934.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/2137240720476486934.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/2137240720476486934.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/8066250511256162801.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/8066250511256162801.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/8066250511256162801.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/8066250511256162801.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/6155523267170584646.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/6155523267170584646.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/6155523267170584646.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/6155523267170584646.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/5970670626650684549.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/5970670626650684549.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/5970670626650684549.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/5970670626650684549.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/2996672938299766377.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_s/2996672938299766377.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview/2996672938299766377.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5587827/preview_b/2996672938299766377.jpg',
          },
        ],
        promoDiscount: 0,
      },
      {
        id: 5652110,
        price: 2109,
        description:
          'Новый, вмятины на боковых стенках и дверце х/к, нет заводской упаковки, гарантия полная.',
        code: 5652110,
        image:
          'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview/3614010150155620703.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/3614010150155620703.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_s/3614010150155620703.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview/3614010150155620703.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_b/3614010150155620703.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/3746603669011227050.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_s/3746603669011227050.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview/3746603669011227050.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_b/3746603669011227050.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/4174972755459862447.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_s/4174972755459862447.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview/4174972755459862447.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_b/4174972755459862447.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_s/3615441299851212173.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/3615441299851212173.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview/3615441299851212173.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_b/3615441299851212173.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_b/7009782748237039274.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/7009782748237039274.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_s/7009782748237039274.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview/7009782748237039274.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_s/392962684987711582.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview/392962684987711582.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_b/392962684987711582.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/392962684987711582.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/5425474319660800259.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_s/5425474319660800259.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview/5425474319660800259.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_b/5425474319660800259.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/3086519959560417043.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_s/3086519959560417043.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview/3086519959560417043.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_b/3086519959560417043.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/1482927471339224184.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_s/1482927471339224184.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview/1482927471339224184.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_b/1482927471339224184.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/152744228770054641.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_s/152744228770054641.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_b/152744228770054641.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview/152744228770054641.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview/2554038154851718394.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/2554038154851718394.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_s/2554038154851718394.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_b/2554038154851718394.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview/6415154679612152388.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_b/6415154679612152388.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/6415154679612152388.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5652110/preview_s/6415154679612152388.jpg',
          },
        ],
        promoDiscount: 0,
      },
      {
        id: 6987350,
        price: 2291.47,
        description:
          'Новый, после сервисного обслуживания (перезаправка), вмятины на дверях м/к, х/к и боковых стенках, царапина на левой боковой стенке, нет заводской упаковки, гарантия полная.',
        code: 6987350,
        image:
          'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/7539360960751732907.jpg',
        images: [
          {
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_b/7539360960751732907.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/7539360960751732907.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_s/7539360960751732907.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/7539360960751732907.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_s/4816696559064662566.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/4816696559064662566.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/4816696559064662566.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_b/4816696559064662566.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_b/67579542564996562.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/67579542564996562.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/67579542564996562.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_s/67579542564996562.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/5564304251358612184.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/5564304251358612184.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_b/5564304251358612184.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_s/5564304251358612184.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/2208195501452695347.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_s/2208195501452695347.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/2208195501452695347.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_b/2208195501452695347.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/3657408357214452096.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_s/3657408357214452096.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/3657408357214452096.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_b/3657408357214452096.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/7993860050991741770.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_s/7993860050991741770.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/7993860050991741770.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_b/7993860050991741770.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/6054908865680632669.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_s/6054908865680632669.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/6054908865680632669.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_b/6054908865680632669.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/8361002820931391234.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_s/8361002820931391234.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/8361002820931391234.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_b/8361002820931391234.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_b/4352968928330947855.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/4352968928330947855.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_s/4352968928330947855.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/4352968928330947855.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_s/3648921000238564425.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/3648921000238564425.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/3648921000238564425.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_b/3648921000238564425.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/1040076375870719627.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_s/1040076375870719627.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/1040076375870719627.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_b/1040076375870719627.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/2652786446290665168.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_s/2652786446290665168.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview/2652786446290665168.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/6987350/preview_b/2652786446290665168.jpg',
          },
        ],
        promoDiscount: 0,
      },
      {
        id: 5870300,
        price: 2109,
        description:
          'Новый, вмятины на верхней двери, повреждена заводская упаковка, полная гарантия.',
        code: 5870300,
        image:
          'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview/8024515767690140250.jpg',
        images: [
          {
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_b/8024515767690140250.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/8024515767690140250.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_s/8024515767690140250.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview/8024515767690140250.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_b/2837362381604216918.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_s/2837362381604216918.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/2837362381604216918.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview/2837362381604216918.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview/7724220576166115518.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_b/7724220576166115518.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/7724220576166115518.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_s/7724220576166115518.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/7711150711113833811.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_s/7711150711113833811.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview/7711150711113833811.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_b/7711150711113833811.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/5396007069569073687.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_s/5396007069569073687.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview/5396007069569073687.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_b/5396007069569073687.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/5900502817339511209.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_s/5900502817339511209.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview/5900502817339511209.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_b/5900502817339511209.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview/3747383390122786050.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_b/3747383390122786050.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_s/3747383390122786050.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/3747383390122786050.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview/6951499930832645775.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_b/6951499930832645775.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/6951499930832645775.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_s/6951499930832645775.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/2373930104660234856.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_s/2373930104660234856.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview/2373930104660234856.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_b/2373930104660234856.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/4611657538154716653.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_s/4611657538154716653.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview/4611657538154716653.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_b/4611657538154716653.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview/1829823034855882708.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_b/1829823034855882708.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/1829823034855882708.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_s/1829823034855882708.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/6578511236395406991.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview/6578511236395406991.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_b/6578511236395406991.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7731/434/sale/5870300/preview_s/6578511236395406991.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 6068799,
    article: '6.068.799',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'GA-B509CMTL',
    modelSecondary: '',
    price: '2111,00 р.',
    oldPrice: null,
    popular: 264.44,
    multiple: 1,
    producerId: 3,
    producerName: 'LG',
    producerNameSort: 'LG_3',
    picture:
      'https://cdn21vek.by/img/galleries/6068/799/preview/gab509cmtl_lg_65f2ce89699d4.jpeg',
    url: '/refrigerators/gab509cmtl_lg.html',
    sales: [
      {
        id: 6949731,
        price: 2635,
        description:
          'Новый, вмятины на боковых стенках, нет заводской упаковки, гарантия полная.',
        code: 6949731,
        image:
          'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview/1461136980070684682.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/1461136980070684682.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_s/1461136980070684682.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview/1461136980070684682.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_b/1461136980070684682.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/507741168461583028.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_b/507741168461583028.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_s/507741168461583028.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview/507741168461583028.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/4577180654305282421.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_s/4577180654305282421.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview/4577180654305282421.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_b/4577180654305282421.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/3137884446743325082.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_s/3137884446743325082.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview/3137884446743325082.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_b/3137884446743325082.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/8711793003652075149.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_s/8711793003652075149.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview/8711793003652075149.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_b/8711793003652075149.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/3821585729357856532.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_s/3821585729357856532.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview/3821585729357856532.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_b/3821585729357856532.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/6090306624192514046.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_s/6090306624192514046.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview/6090306624192514046.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_b/6090306624192514046.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/4041143494101038124.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_s/4041143494101038124.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview/4041143494101038124.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6068/799/sale/6949731/preview_b/4041143494101038124.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 7236143,
    article: '7.236.143',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'GA-B419SDJL',
    modelSecondary: '',
    price: '2021,00 р.',
    oldPrice: null,
    popular: 261.04,
    multiple: 1,
    producerId: 3,
    producerName: 'LG',
    producerNameSort: 'LG_3',
    picture:
      'https://cdn21vek.by/img/galleries/7236/143/preview/gab419sdjl_lg_6467188f2c799.jpeg',
    url: '/refrigerators/gab419sdjl_lg.html',
    sales: [
      {
        id: 6121821,
        price: 2025.1,
        description:
          'Новый, вмятина на нижней двери, нет завсодской упаковки, гарантия полная.',
        code: 6121821,
        image:
          'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview/6224239780593817717.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/6224239780593817717.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_s/6224239780593817717.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview/6224239780593817717.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_b/6224239780593817717.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/4764633720295087782.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_s/4764633720295087782.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview/4764633720295087782.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_b/4764633720295087782.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/5638043299611883486.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_s/5638043299611883486.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview/5638043299611883486.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_b/5638043299611883486.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/4785625085819464198.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_s/4785625085819464198.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview/4785625085819464198.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_b/4785625085819464198.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview/1343847154738151261.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_b/1343847154738151261.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/1343847154738151261.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_s/1343847154738151261.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/4915488288951484009.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_s/4915488288951484009.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview/4915488288951484009.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_b/4915488288951484009.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview/5556639411489264495.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_b/5556639411489264495.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/5556639411489264495.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_s/5556639411489264495.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/6840238712904307844.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_s/6840238712904307844.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview/6840238712904307844.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_b/6840238712904307844.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_b/8975635574462957761.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/8975635574462957761.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview_s/8975635574462957761.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7236/143/sale/6121821/preview/8975635574462957761.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 8590024,
    article: '8.590.024',
    status: 'in',
    promoDiscount: 15,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'CT-1749 NF Inox Inverter',
    modelSecondary: '',
    price: '2549,00 р.',
    oldPrice: '2111,00 р.',
    popular: 257.16,
    multiple: 1,
    producerId: 21413,
    producerName: 'Centek',
    producerNameSort: 'Centek_21413',
    picture:
      'https://cdn21vek.by/img/galleries/8590/24/preview/ct1749nfinoxinverter_centek_653626ba7610d.jpeg',
    url: '/refrigerators/ct1749nfinoxinverter_centek.html',
    sales: [
      {
        id: 7019280,
        price: 2549.15,
        description:
          'Новый, потертости, царапины, повреждение левой дверцы, вмятины внутри полки.',
        code: 7019280,
        image:
          'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview/1212647669500350918.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/1212647669500350918.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_s/1212647669500350918.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview/1212647669500350918.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_b/1212647669500350918.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/7004727601252855232.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_s/7004727601252855232.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview/7004727601252855232.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_b/7004727601252855232.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/8755505963726055045.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_s/8755505963726055045.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview/8755505963726055045.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_b/8755505963726055045.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/581815006438905532.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_s/581815006438905532.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_b/581815006438905532.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview/581815006438905532.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/8983322291654504208.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_s/8983322291654504208.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview/8983322291654504208.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_b/8983322291654504208.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/7863274524484587865.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_s/7863274524484587865.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview/7863274524484587865.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_b/7863274524484587865.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/4291752129680579107.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_b/4291752129680579107.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview_s/4291752129680579107.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8590/24/sale/7019280/preview/4291752129680579107.jpg',
          },
        ],
        promoDiscount: 15,
      },
    ],
  },
  {
    code: 6281107,
    article: '6.281.107',
    status: 'in',
    promoDiscount: 38,
    discountRange: 30,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'DoorCooling+ GA-B509CQSL',
    modelSecondary: '',
    price: '1726,00 р.',
    oldPrice: '2111,00 р.',
    popular: 253.72,
    multiple: 1,
    producerId: 3,
    producerName: 'LG',
    producerNameSort: 'LG_3',
    picture:
      'https://cdn21vek.by/img/galleries/6281/107/preview/doorcolinggab509cqsl_lg_5fc4b4a603b48.jpeg',
    url: '/refrigerators/doorcolinggab509cqsl_lg.html',
    sales: [
      {
        id: 5956222,
        price: 1726.31,
        description:
          'Новый, вмятина на двери м/к, царапины и трещина на двери х/к, вмятина на задней стенке, нет заводской упаковки, гарантия полная.',
        code: 5956222,
        image:
          'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/1883761829643481764.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/1883761829643481764.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/1883761829643481764.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/1883761829643481764.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/1883761829643481764.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/7491287628551751864.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/7491287628551751864.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/7491287628551751864.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/7491287628551751864.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/1953605326909260629.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/1953605326909260629.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/1953605326909260629.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/1953605326909260629.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/3949734138432883797.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/3949734138432883797.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/3949734138432883797.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/3949734138432883797.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/1796997174537296746.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/1796997174537296746.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/1796997174537296746.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/1796997174537296746.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/3764251930114853721.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/3764251930114853721.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/3764251930114853721.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/3764251930114853721.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/4695464314036631400.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/4695464314036631400.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/4695464314036631400.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/4695464314036631400.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/8064591193510781678.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/8064591193510781678.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/8064591193510781678.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/8064591193510781678.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/2090629956609973424.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/2090629956609973424.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/2090629956609973424.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/2090629956609973424.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/1892188144705410153.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/1892188144705410153.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/1892188144705410153.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/1892188144705410153.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/1347150944550711835.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/1347150944550711835.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/1347150944550711835.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/1347150944550711835.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/1119852720928162920.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/1119852720928162920.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/1119852720928162920.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/1119852720928162920.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/6539799770455508831.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/6539799770455508831.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/6539799770455508831.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/6539799770455508831.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/2559445280417895542.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_s/2559445280417895542.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview/2559445280417895542.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6281/107/sale/5956222/preview_b/2559445280417895542.jpg',
          },
        ],
        promoDiscount: 38,
      },
    ],
  },
  {
    code: 7350133,
    article: '7.350.133',
    status: 'in',
    promoDiscount: 19,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4626-159 ND',
    modelSecondary: '',
    price: '1549,00 р.',
    oldPrice: '2111,00 р.',
    popular: 251.74,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/7350/133/preview/4626159nd_atlant_63da0c7c87ec9.jpeg',
    url: '/refrigerators/4626159nd_atlant.html',
    sales: [
      {
        id: 6903076,
        price: 1549.53,
        description:
          'Новый, вмятины на левой боковой стенке и дверце х/к, нет одной полки х/к, повреждена заводская упаковка, гарантия полная.',
        code: 6903076,
        image:
          'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/1750693401248423912.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/1750693401248423912.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/1750693401248423912.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/1750693401248423912.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/1750693401248423912.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/1557892514565036776.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/1557892514565036776.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/1557892514565036776.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/1557892514565036776.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/7158793786265551898.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/7158793786265551898.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/7158793786265551898.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/7158793786265551898.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/5154302311826370167.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/5154302311826370167.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/5154302311826370167.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/5154302311826370167.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/6486780394228619457.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/6486780394228619457.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/6486780394228619457.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/6486780394228619457.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/1246591192256087369.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/1246591192256087369.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/1246591192256087369.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/1246591192256087369.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/1085564506158226476.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/1085564506158226476.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/1085564506158226476.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/1085564506158226476.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/2663913505254488403.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/2663913505254488403.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/2663913505254488403.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/2663913505254488403.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/8996193695185145162.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/8996193695185145162.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/8996193695185145162.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/8996193695185145162.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/432867985641525360.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/432867985641525360.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/432867985641525360.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/432867985641525360.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/3108230403775233403.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/3108230403775233403.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/3108230403775233403.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/3108230403775233403.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/2037013469494714944.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/2037013469494714944.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/2037013469494714944.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/2037013469494714944.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/4968827084540902877.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/4968827084540902877.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/4968827084540902877.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/4968827084540902877.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/7705617285563672626.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/7705617285563672626.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/7705617285563672626.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/7705617285563672626.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/398291125706549078.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/398291125706549078.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/398291125706549078.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/398291125706549078.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/8058798723512800187.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/8058798723512800187.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/8058798723512800187.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/8058798723512800187.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/7412094724603975072.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_s/7412094724603975072.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview/7412094724603975072.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6903076/preview_b/7412094724603975072.jpg',
          },
        ],
        promoDiscount: 19,
      },
      {
        id: 6951219,
        price: 1606.92,
        description:
          'Новый, царапина на двери м/к, повреждена заводская упаковка, гарантия полная.',
        code: 6951219,
        image:
          'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview/2216644877818104232.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/2216644877818104232.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_s/2216644877818104232.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview/2216644877818104232.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_b/2216644877818104232.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/7043915663136942886.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_s/7043915663136942886.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview/7043915663136942886.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_b/7043915663136942886.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/1195770659042910519.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_s/1195770659042910519.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview/1195770659042910519.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_b/1195770659042910519.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/9109532812471859017.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_s/9109532812471859017.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview/9109532812471859017.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_b/9109532812471859017.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/914720040358608327.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_s/914720040358608327.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview/914720040358608327.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_b/914720040358608327.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/2432919715600743512.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_s/2432919715600743512.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview/2432919715600743512.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_b/2432919715600743512.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/2245444473355061905.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_s/2245444473355061905.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview/2245444473355061905.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_b/2245444473355061905.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/938406890865998862.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_s/938406890865998862.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview/938406890865998862.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_b/938406890865998862.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/5960265406154957634.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_s/5960265406154957634.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview/5960265406154957634.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/6951219/preview_b/5960265406154957634.jpg',
          },
        ],
        promoDiscount: 16,
      },
      {
        id: 7015104,
        price: 1721.7,
        description:
          'Новый, вмятина на дверце ХК, повреждена заводская упаковка, гарантия по 23.09.2027г.',
        code: 7015104,
        image:
          'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview/4164511935147941165.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/4164511935147941165.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview/4164511935147941165.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview_b/4164511935147941165.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview_s/4164511935147941165.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/1081732443394201443.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview_s/1081732443394201443.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview/1081732443394201443.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview_b/1081732443394201443.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/4947438958966875508.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview_s/4947438958966875508.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview/4947438958966875508.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview_b/4947438958966875508.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/8583716430445056757.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview_s/8583716430445056757.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview/8583716430445056757.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview_b/8583716430445056757.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/6281289896860886062.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview_s/6281289896860886062.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview/6281289896860886062.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview_b/6281289896860886062.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/1053960075982135475.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview_s/1053960075982135475.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview/1053960075982135475.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7350/133/sale/7015104/preview_b/1053960075982135475.jpg',
          },
        ],
        promoDiscount: 10,
      },
    ],
  },
  {
    code: 5996911,
    article: '5.996.911',
    status: 'in',
    promoDiscount: 15,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4626-181',
    modelSecondary: '',
    price: '1290,00 р.',
    oldPrice: '1517,00 р.',
    popular: 251.52,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/5996/911/preview/4626181_atlant_65f43bfdb588b.jpeg',
    url: '/refrigerators/4626181_atlant.html',
    sales: [
      {
        id: 7005989,
        price: 1290.12,
        description:
          'Новый, вмятины и царапины на двери ХК, повреждена заводская упаковка, гарантия полная.',
        code: 7005989,
        image:
          'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview/180863828614052403.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/180863828614052403.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_s/180863828614052403.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview/180863828614052403.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_b/180863828614052403.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/7245453804583801239.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_s/7245453804583801239.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview/7245453804583801239.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_b/7245453804583801239.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/5437675636929826285.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_s/5437675636929826285.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview/5437675636929826285.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_b/5437675636929826285.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview/9096372447923058740.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_b/9096372447923058740.jpg',
            original:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/9096372447923058740.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_s/9096372447923058740.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/1611296789414917545.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_s/1611296789414917545.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview/1611296789414917545.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_b/1611296789414917545.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/5693913970476980645.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_s/5693913970476980645.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview/5693913970476980645.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_b/5693913970476980645.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/4401208921738497730.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_s/4401208921738497730.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview/4401208921738497730.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_b/4401208921738497730.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/6443354886167068126.jpg',
            small:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_s/6443354886167068126.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview/6443354886167068126.jpg',
            large:
              'https://cdn21vek.by/img/galleries/5996/911/sale/7005989/preview_b/6443354886167068126.jpg',
          },
        ],
        promoDiscount: 15,
      },
    ],
  },
  {
    code: 5996911,
    article: '5.996.911',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['superprice'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4626-181',
    modelSecondary: '',
    price: '1517,00 р.',
    oldPrice: null,
    popular: 251.52,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/5996/911/preview/4626181_atlant_65f43bfdb588b.jpeg',
    url: '/refrigerators/4626181_atlant.html',
    sales: [],
  },
  {
    code: 8570450,
    article: '8.570.450',
    status: 'in',
    promoDiscount: 27,
    discountRange: 20,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'GC-B459SQCL',
    modelSecondary: '',
    price: '1881,00 р.',
    oldPrice: '2111,00 р.',
    popular: 250.8,
    multiple: 1,
    producerId: 3,
    producerName: 'LG',
    producerNameSort: 'LG_3',
    picture:
      'https://cdn21vek.by/img/galleries/8570/450/preview/gcb459sqcl_lg_043771b0d4fb209057c0760fd1740bab.jpg',
    url: '/refrigerators/gcb459sqcl_lg.html',
    sales: [
      {
        id: 6999265,
        price: 1889.1,
        description:
          'Новый, вмятины на дверях МК, ХК, нет заводской упаковки, гарантия полная.',
        code: 6999265,
        image:
          'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/preview/1491198190980526695.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/1491198190980526695.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/preview_s/1491198190980526695.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/preview/1491198190980526695.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/preview_b/1491198190980526695.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/2258389348300740359.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/preview_s/2258389348300740359.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/preview/2258389348300740359.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/preview_b/2258389348300740359.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/5072688771918175882.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/preview_s/5072688771918175882.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/preview/5072688771918175882.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/preview_b/5072688771918175882.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/603776286360631936.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/preview_s/603776286360631936.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/preview/603776286360631936.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8570/450/sale/6999265/preview_b/603776286360631936.jpg',
          },
        ],
        promoDiscount: 27,
      },
    ],
  },
  {
    code: 8570450,
    article: '8.570.450',
    status: 'in',
    promoDiscount: 19,
    discountRange: 10,
    discountTypes: ['discount'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'GC-B459SQCL',
    modelSecondary: '',
    price: '2111,00 р.',
    oldPrice: '2111,00 р.',
    popular: 250.8,
    multiple: 1,
    producerId: 3,
    producerName: 'LG',
    producerNameSort: 'LG_3',
    picture:
      'https://cdn21vek.by/img/galleries/8570/450/preview/gcb459sqcl_lg_043771b0d4fb209057c0760fd1740bab.jpg',
    url: '/refrigerators/gcb459sqcl_lg.html',
    sales: [],
  },
  {
    code: 8821265,
    article: '8.821.265',
    status: 'in',
    promoDiscount: 16,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'STN 167',
    modelSecondary: '',
    price: '931,00 р.',
    oldPrice: '1108,00 р.',
    popular: 248.16,
    multiple: 1,
    producerId: 112389,
    producerName: 'Stinol',
    producerNameSort: 'Stinol_112389',
    picture:
      'https://cdn21vek.by/img/galleries/8821/265/preview/stn167_stinol__8821265_661f6770ce4af.jpeg',
    url: '/refrigerators/stn167_stinol__8821265.html',
    sales: [
      {
        id: 6984555,
        price: 931.3,
        description:
          'Новый, повреждена фольга на задней стенке, заводская упаковка, гарантия полная.',
        code: 6984555,
        image:
          'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview/3444255713077893796.jpg',
        images: [
          {
            large:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview_b/3444255713077893796.jpg',
            original:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/3444255713077893796.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview_s/3444255713077893796.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview/3444255713077893796.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/76650905433779417.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview_b/76650905433779417.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview_s/76650905433779417.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview/76650905433779417.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview/648768854855159878.jpg',
            original:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/648768854855159878.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview_s/648768854855159878.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview_b/648768854855159878.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview/5079114542581237618.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview_b/5079114542581237618.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview_s/5079114542581237618.jpg',
            original:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/5079114542581237618.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/3389138247914526571.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview_s/3389138247914526571.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview/3389138247914526571.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview_b/3389138247914526571.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/6722048975742218272.jpg',
            small:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview_s/6722048975742218272.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview/6722048975742218272.jpg',
            large:
              'https://cdn21vek.by/img/galleries/8821/265/sale/6984555/preview_b/6722048975742218272.jpg',
          },
        ],
        promoDiscount: 16,
      },
    ],
  },
  {
    code: 6241023,
    article: '6.241.023',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'DoorCooling+ GA-B509CLSL',
    modelSecondary: '',
    price: '2441,00 р.',
    oldPrice: null,
    popular: 246.14,
    multiple: 1,
    producerId: 3,
    producerName: 'LG',
    producerNameSort: 'LG_3',
    picture:
      'https://cdn21vek.by/img/galleries/6241/23/preview/doorcolinggab509clsl_lg_5f9fae7975ca5.jpeg',
    url: '/refrigerators/doorcolinggab509clsl_lg.html',
    sales: [
      {
        id: 6943096,
        price: 2441.1,
        description:
          'Был в эксплуатации, после сервисного обслуживания (замена двери х/к), вмятины и царапины на боковых стенках и дверцах, загрязнения, нет заводской упаковки, гарантия по 12.10.2026г.',
        code: 6943096,
        image:
          'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/5318099887348585905.jpg',
        images: [
          {
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/5318099887348585905.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_b/5318099887348585905.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/5318099887348585905.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_s/5318099887348585905.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/2124849999961207263.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_s/2124849999961207263.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/2124849999961207263.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_b/2124849999961207263.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_s/4798659694969176183.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/4798659694969176183.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_b/4798659694969176183.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/4798659694969176183.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/912188096231579472.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_s/912188096231579472.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/912188096231579472.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_b/912188096231579472.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/7141848790663416102.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_s/7141848790663416102.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/7141848790663416102.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_b/7141848790663416102.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/2968312095196595307.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_s/2968312095196595307.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/2968312095196595307.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_b/2968312095196595307.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/7312288390204910207.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_b/7312288390204910207.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_s/7312288390204910207.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/7312288390204910207.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_s/7297252757700311813.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/7297252757700311813.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/7297252757700311813.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_b/7297252757700311813.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_s/563978730740012995.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/563978730740012995.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_b/563978730740012995.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/563978730740012995.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_b/1341503090573384804.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/1341503090573384804.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_s/1341503090573384804.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/1341503090573384804.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/2529921784542658044.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_b/2529921784542658044.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/2529921784542658044.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_s/2529921784542658044.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/2275335914304813314.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_s/2275335914304813314.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/2275335914304813314.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_b/2275335914304813314.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/6225198701179494288.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_s/6225198701179494288.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview/6225198701179494288.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6943096/preview_b/6225198701179494288.jpg',
          },
        ],
        promoDiscount: 0,
      },
      {
        id: 6770147,
        price: 2441.1,
        description:
          'Новый, вмятины на дверцах х/к и м/к, на правой боковой стенке, нет заводской упаковки, гарантия полная.',
        code: 6770147,
        image:
          'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview/8792568375753574872.jpg',
        images: [
          {
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_s/8792568375753574872.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview/8792568375753574872.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_b/8792568375753574872.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/8792568375753574872.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/6068062728699831671.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_s/6068062728699831671.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview/6068062728699831671.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_b/6068062728699831671.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/6732527062168824545.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_s/6732527062168824545.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview/6732527062168824545.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_b/6732527062168824545.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/876957632489217139.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_s/876957632489217139.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview/876957632489217139.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_b/876957632489217139.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview/5662061831823565512.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/5662061831823565512.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_s/5662061831823565512.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_b/5662061831823565512.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_s/5453175080627469222.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/5453175080627469222.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview/5453175080627469222.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_b/5453175080627469222.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/6065864434313822806.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_s/6065864434313822806.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview/6065864434313822806.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_b/6065864434313822806.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/1094997035407988024.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_s/1094997035407988024.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview/1094997035407988024.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_b/1094997035407988024.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_b/2578129381992294923.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/2578129381992294923.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_s/2578129381992294923.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview/2578129381992294923.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview/1290115184513603594.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_b/1290115184513603594.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/1290115184513603594.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_s/1290115184513603594.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview/6934381956722528390.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/6934381956722528390.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_s/6934381956722528390.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6241/23/sale/6770147/preview_b/6934381956722528390.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 6243759,
    article: '6.243.759',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'GA-B419SMHL',
    modelSecondary: '',
    price: '1928,00 р.',
    oldPrice: null,
    popular: 245.64,
    multiple: 1,
    producerId: 3,
    producerName: 'LG',
    producerNameSort: 'LG_3',
    picture:
      'https://cdn21vek.by/img/galleries/6243/759/preview/gab419smhl_lg_610409f983f96.jpeg',
    url: '/refrigerators/gab419smhl_lg.html',
    sales: [
      {
        id: 5691922,
        price: 1928.06,
        description:
          'Новый, вмятины на дверце м/к, повреждена заводская упаковка, гарантия полная.',
        code: 5691922,
        image:
          'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview/6093439384825208596.jpg',
        images: [
          {
            medium:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview/6093439384825208596.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_b/6093439384825208596.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/6093439384825208596.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_s/6093439384825208596.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview/8228043417752672698.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/8228043417752672698.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_s/8228043417752672698.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_b/8228043417752672698.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/7763499078166940174.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_s/7763499078166940174.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview/7763499078166940174.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_b/7763499078166940174.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview/4246483989009395036.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_b/4246483989009395036.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/4246483989009395036.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_s/4246483989009395036.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_b/7930564134991869006.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/7930564134991869006.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_s/7930564134991869006.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview/7930564134991869006.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_s/7177033233346862301.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/7177033233346862301.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview/7177033233346862301.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_b/7177033233346862301.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview/1431647309084387928.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_b/1431647309084387928.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/1431647309084387928.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_s/1431647309084387928.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/5939083054818667432.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_s/5939083054818667432.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview/5939083054818667432.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_b/5939083054818667432.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview/4731237871695201341.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_b/4731237871695201341.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/4731237871695201341.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6243/759/sale/5691922/preview_s/4731237871695201341.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 638089,
    article: '638.089',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4625-181',
    modelSecondary: '',
    price: '1234,00 р.',
    oldPrice: null,
    popular: 244.62,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/638/89/preview/4625181_atlant_5b488d94cd05b.jpeg',
    url: '/refrigerators/4625181_atlant.html',
    sales: [
      {
        id: 7015146,
        price: 1131,
        description:
          'Был в эксплуатации, после сервисного обслуживания (замена фильтра-осушителя), повреждена боковая полка, вмятины на дверях и правой боковой стенке, царапина на правой боковой, загрязнения, нет заводской упаковки, гарантия по 20.07.2027г.',
        code: 7015146,
        image:
          'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview/1304967281721087145.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/1304967281721087145.jpg',
            small:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_s/1304967281721087145.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview/1304967281721087145.jpg',
            large:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_b/1304967281721087145.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/49551146674466874.jpg',
            small:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_s/49551146674466874.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview/49551146674466874.jpg',
            large:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_b/49551146674466874.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_s/6772292044495800239.jpg',
            original:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/6772292044495800239.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview/6772292044495800239.jpg',
            large:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_b/6772292044495800239.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/7721151948815768527.jpg',
            small:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_s/7721151948815768527.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview/7721151948815768527.jpg',
            large:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_b/7721151948815768527.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/3748706327172572775.jpg',
            small:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_s/3748706327172572775.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview/3748706327172572775.jpg',
            large:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_b/3748706327172572775.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/5478929903882746951.jpg',
            small:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_s/5478929903882746951.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview/5478929903882746951.jpg',
            large:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_b/5478929903882746951.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/3245941994733873694.jpg',
            small:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_s/3245941994733873694.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview/3245941994733873694.jpg',
            large:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_b/3245941994733873694.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/161183346342139385.jpg',
            small:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_s/161183346342139385.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview/161183346342139385.jpg',
            large:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_b/161183346342139385.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/6771911008312811615.jpg',
            small:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_s/6771911008312811615.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview/6771911008312811615.jpg',
            large:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_b/6771911008312811615.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_b/5310841313483731512.jpg',
            original:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/5310841313483731512.jpg',
            small:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_s/5310841313483731512.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview/5310841313483731512.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/8671421389850918228.jpg',
            small:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_s/8671421389850918228.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview/8671421389850918228.jpg',
            large:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_b/8671421389850918228.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/115337321040016734.jpg',
            small:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_s/115337321040016734.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview/115337321040016734.jpg',
            large:
              'https://cdn21vek.by/img/galleries/638/89/sale/7015146/preview_b/115337321040016734.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 6368402,
    article: '6.368.402',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4524-040 ND',
    modelSecondary: '',
    price: '1536,00 р.',
    oldPrice: null,
    popular: 242.22,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/6368/402/preview/4524040nd_atlant_65f9a53cda304.jpeg',
    url: '/refrigerators/4524040nd_atlant.html',
    sales: [
      {
        id: 6960475,
        price: 1536.55,
        description:
          'Был в эксплуатации, после сервисного обслуживания (замена компрессора, фильтра-осушителя, пз реле), вмятины и царапины по всему корпусу, загрязнения, нет заводской упаковки, гарантия по 25.09.2026г.',
        code: 6960475,
        image:
          'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/5587769762613399442.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/5587769762613399442.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/5587769762613399442.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/5587769762613399442.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/5587769762613399442.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/4514860870462559146.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/4514860870462559146.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/4514860870462559146.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/4514860870462559146.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/3718906908223832838.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/3718906908223832838.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/3718906908223832838.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/3718906908223832838.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/2583504777681228769.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/2583504777681228769.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/2583504777681228769.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/2583504777681228769.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/6888396852196259545.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/6888396852196259545.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/6888396852196259545.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/6888396852196259545.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/7285580186995209885.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/7285580186995209885.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/7285580186995209885.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/7285580186995209885.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/1488996401961438090.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/1488996401961438090.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/1488996401961438090.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/1488996401961438090.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/7349502830060941372.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/7349502830060941372.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/7349502830060941372.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/7349502830060941372.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/7717117228415254392.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/7717117228415254392.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/7717117228415254392.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/7717117228415254392.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/3543443559415301106.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/3543443559415301106.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/3543443559415301106.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/3543443559415301106.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/1355045646306469468.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/1355045646306469468.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/1355045646306469468.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/1355045646306469468.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/7558684787965980849.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/7558684787965980849.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/7558684787965980849.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/7558684787965980849.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/6663384795671964683.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/6663384795671964683.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/6663384795671964683.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/6663384795671964683.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/2753077038698911783.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/2753077038698911783.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/2753077038698911783.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/2753077038698911783.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/2225870486120334348.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_s/2225870486120334348.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview/2225870486120334348.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6368/402/sale/6960475/preview_b/2225870486120334348.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 6102689,
    article: '6.102.689',
    status: 'in',
    promoDiscount: 10,
    discountRange: 10,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'DoorCooling+ GA-B509CQTL',
    modelSecondary: '',
    price: '2680,00 р.',
    oldPrice: '2111,00 р.',
    popular: 238.26,
    multiple: 1,
    producerId: 3,
    producerName: 'LG',
    producerNameSort: 'LG_3',
    picture:
      'https://cdn21vek.by/img/galleries/6102/689/preview/gab509cqtl_lg_5f3a429cc337f.png',
    url: '/refrigerators/gab509cqtl_lg.html',
    sales: [
      {
        id: 7015153,
        price: 2680.35,
        description:
          'Новый, царапины и вмятины на дверях, повреждена заводская упаковка, гарантия полная.',
        code: 7015153,
        image:
          'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview/5644037138651489904.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/5644037138651489904.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_s/5644037138651489904.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview/5644037138651489904.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_b/5644037138651489904.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/2661283870145258380.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_s/2661283870145258380.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview/2661283870145258380.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_b/2661283870145258380.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/3531998621082252852.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_s/3531998621082252852.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview/3531998621082252852.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_b/3531998621082252852.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/8123932466177391351.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_s/8123932466177391351.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview/8123932466177391351.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_b/8123932466177391351.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/602880013571124336.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_s/602880013571124336.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview/602880013571124336.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_b/602880013571124336.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/1433416740773618125.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_s/1433416740773618125.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview/1433416740773618125.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_b/1433416740773618125.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview/4131996764995454605.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_b/4131996764995454605.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/4131996764995454605.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_s/4131996764995454605.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/6924201486218886670.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview/6924201486218886670.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_b/6924201486218886670.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_s/6924201486218886670.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/7954370094928524182.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_s/7954370094928524182.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview/7954370094928524182.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_b/7954370094928524182.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/6823463156550502396.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_s/6823463156550502396.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview/6823463156550502396.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_b/6823463156550502396.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/5519014604756124977.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_s/5519014604756124977.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview/5519014604756124977.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6102/689/sale/7015153/preview_b/5519014604756124977.jpg',
          },
        ],
        promoDiscount: 10,
      },
    ],
  },
  {
    code: 7353370,
    article: '7.353.370',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'B3RCNK402HX',
    modelSecondary: '',
    price: '1516,00 р.',
    oldPrice: null,
    popular: 236.6,
    multiple: 1,
    producerId: 6,
    producerName: 'Beko',
    producerNameSort: 'Beko_6',
    picture:
      'https://cdn21vek.by/img/galleries/7353/370/preview/b3rcnk402hx_beko_6256914de2d13.jpeg',
    url: '/refrigerators/b3rcnk402hx_beko.html',
    sales: [
      {
        id: 6915772,
        price: 1516.26,
        description:
          'Был в эксплуатации, после сервисного обслуживания (диагностика), вмятины и царапины на двери м/к и левой боковой стенке, нет заводской упаковки, гарантия по 04.06.2026г.',
        code: 6915772,
        image:
          'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview/2686832488497460593.jpg',
        images: [
          {
            small:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_s/2686832488497460593.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview/2686832488497460593.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_b/2686832488497460593.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/2686832488497460593.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/6969439666256397156.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_s/6969439666256397156.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview/6969439666256397156.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_b/6969439666256397156.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/5851111123260163907.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_s/5851111123260163907.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview/5851111123260163907.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_b/5851111123260163907.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_s/8705722081428480578.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview/8705722081428480578.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_b/8705722081428480578.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/8705722081428480578.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/88977222313952966.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_s/88977222313952966.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview/88977222313952966.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_b/88977222313952966.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/680416493734231757.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_s/680416493734231757.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview/680416493734231757.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_b/680416493734231757.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/850083897983058588.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_s/850083897983058588.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview/850083897983058588.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_b/850083897983058588.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/5810306971786277722.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_s/5810306971786277722.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview/5810306971786277722.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_b/5810306971786277722.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/8414558824393591924.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_s/8414558824393591924.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview/8414558824393591924.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_b/8414558824393591924.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/7417049868781289815.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_s/7417049868781289815.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview/7417049868781289815.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7353/370/sale/6915772/preview_b/7417049868781289815.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 7814113,
    article: '7.814.113',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'GW-B509SMUM',
    modelSecondary: '',
    price: '2164,00 р.',
    oldPrice: null,
    popular: 236.3,
    multiple: 1,
    producerId: 3,
    producerName: 'LG',
    producerNameSort: 'LG_3',
    picture:
      'https://cdn21vek.by/img/galleries/7814/113/preview/gwb509smum_lg_638857e56a0d3.jpeg',
    url: '/refrigerators/gwb509smum_lg.html',
    sales: [
      {
        id: 5729494,
        price: 2164.5,
        description:
          'Новый, вмятины и сколы на дверках, нет заводской упаковки, гарантия полная.',
        code: 5729494,
        image:
          'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview/2984195147119848154.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/2984195147119848154.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_s/2984195147119848154.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview/2984195147119848154.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_b/2984195147119848154.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_s/2277364804796353251.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview/2277364804796353251.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_b/2277364804796353251.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/2277364804796353251.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview/7010190771783372025.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/7010190771783372025.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_s/7010190771783372025.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_b/7010190771783372025.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/1016953838338320112.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_s/1016953838338320112.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview/1016953838338320112.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_b/1016953838338320112.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/5045267925075392195.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_s/5045267925075392195.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview/5045267925075392195.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_b/5045267925075392195.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/4899185576896328240.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_s/4899185576896328240.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview/4899185576896328240.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_b/4899185576896328240.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview/467286998513190298.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_b/467286998513190298.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/467286998513190298.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_s/467286998513190298.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/1222153159608464204.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_s/1222153159608464204.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview/1222153159608464204.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_b/1222153159608464204.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_b/2736013261025896483.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/2736013261025896483.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_s/2736013261025896483.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview/2736013261025896483.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_s/4186735513331853621.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview/4186735513331853621.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_b/4186735513331853621.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/4186735513331853621.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_b/7936590738734165972.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview_s/7936590738734165972.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/7936590738734165972.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7814/113/sale/5729494/preview/7936590738734165972.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 7659084,
    article: '7.659.084',
    status: 'in',
    promoDiscount: 0,
    discountRange: null,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'RB33A32N0WW/WT',
    modelSecondary: '',
    price: '1111,00 р.',
    oldPrice: null,
    popular: 235.56,
    multiple: 1,
    producerId: 17,
    producerName: 'Samsung',
    producerNameSort: 'Samsung_17',
    picture:
      'https://cdn21vek.by/img/galleries/7659/84/preview/rb33a32n0wwwt_samsung_62f626bf517f9.png',
    url: '/refrigerators/rb33a32n0wwwt_samsung.html',
    sales: [
      {
        id: 6979160,
        price: 1628,
        description:
          'Был в эксплуатации, после сервисного обслуживания (диагностика), царапины и вмятины на боковых стенках, нет заводской упаковки, гарантия по 20.07.2027г.',
        code: 6979160,
        image:
          'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview/6531434679970396604.jpg',
        images: [
          {
            original:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/6531434679970396604.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_s/6531434679970396604.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview/6531434679970396604.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_b/6531434679970396604.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/7888561135841996432.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_s/7888561135841996432.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview/7888561135841996432.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_b/7888561135841996432.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/5616067257047403918.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_s/5616067257047403918.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview/5616067257047403918.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_b/5616067257047403918.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_s/1923928223550747284.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview/1923928223550747284.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_b/1923928223550747284.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/1923928223550747284.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/4102961727352981600.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_s/4102961727352981600.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview/4102961727352981600.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_b/4102961727352981600.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/9045131108741609528.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_s/9045131108741609528.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview/9045131108741609528.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_b/9045131108741609528.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview/1323590222818096477.jpg',
            original:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/1323590222818096477.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_s/1323590222818096477.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_b/1323590222818096477.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/6055886549938108447.jpg',
            small:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_s/6055886549938108447.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview/6055886549938108447.jpg',
            large:
              'https://cdn21vek.by/img/galleries/7659/84/sale/6979160/preview_b/6055886549938108447.jpg',
          },
        ],
        promoDiscount: 0,
      },
    ],
  },
  {
    code: 6488538,
    article: '6.488.538',
    status: 'in',
    promoDiscount: 21,
    discountRange: 20,
    discountTypes: ['sale'],
    categories: [24, 18, 1],
    name: 'Холодильник с морозильником',
    model: 'ХМ 4624-101 NL',
    modelSecondary: '',
    price: '1228,00 р.',
    oldPrice: '1111,00 р.',
    popular: 235.5,
    multiple: 1,
    producerId: 73,
    producerName: 'ATLANT',
    producerNameSort: 'ATLANT_73',
    picture:
      'https://cdn21vek.by/img/galleries/6488/538/preview/4624101nl_atlant_65f3ff7db1f97.jpeg',
    url: '/refrigerators/4624101nl_atlant.html',
    sales: [
      {
        id: 6960441,
        price: 1228.45,
        description:
          'Был в эксплуатации, после сервисного обслуживания (замена компрессора, фильтра, пз реле), сколы ЛКП на правой боковой стенке, вмятина на левой боковой и задней стенке, царапины, загрязнения, нет заводской упаковки, гарантия по 31.03.2026г.',
        code: 6960441,
        image:
          'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview/7516563997895943555.jpg',
        images: [
          {
            medium:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview/7516563997895943555.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/7516563997895943555.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_s/7516563997895943555.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_b/7516563997895943555.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/8513250043022536215.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_s/8513250043022536215.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview/8513250043022536215.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_b/8513250043022536215.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/6275247092349564808.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_s/6275247092349564808.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview/6275247092349564808.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_b/6275247092349564808.jpg',
          },
          {
            large:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_b/4995581526168922171.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/4995581526168922171.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_s/4995581526168922171.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview/4995581526168922171.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/1069743839666011839.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_s/1069743839666011839.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview/1069743839666011839.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_b/1069743839666011839.jpg',
          },
          {
            small:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_s/5853495610816569769.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/5853495610816569769.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview/5853495610816569769.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_b/5853495610816569769.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/836609452861566854.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_s/836609452861566854.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview/836609452861566854.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_b/836609452861566854.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/4078479353026082881.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_s/4078479353026082881.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview/4078479353026082881.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_b/4078479353026082881.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/3509319803279523925.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_s/3509319803279523925.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview/3509319803279523925.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_b/3509319803279523925.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/7256426434600208177.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_s/7256426434600208177.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview/7256426434600208177.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_b/7256426434600208177.jpg',
          },
          {
            original:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/3864147200253117530.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_s/3864147200253117530.jpg',
            medium:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview/3864147200253117530.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_b/3864147200253117530.jpg',
          },
          {
            medium:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview/6946075366872012247.jpg',
            large:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_b/6946075366872012247.jpg',
            original:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/6946075366872012247.jpg',
            small:
              'https://cdn21vek.by/img/galleries/6488/538/sale/6960441/preview_s/6946075366872012247.jpg',
          },
        ],
        promoDiscount: 21,
      },
    ],
  },
];
