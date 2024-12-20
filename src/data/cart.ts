import { CartProduct, CartService, Certificate } from '@/types/cartModel';

export const cartProducts: CartProduct[] = [
  {
    id: 'b2d2425a6d69a4b318314d50c235694f',
    count: 1,
    multiple: 1,
    type: 'product',
    code: 8350603,
    name: '\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Infinix Hot 30 Play NFC 8GB/128GB / X6835B (\u0447\u0435\u0440\u043d\u044b\u0439 \u043c\u0438\u0440\u0430\u0436)',
    brand: 'Infinix',
    image:
      'https://cdn21vek.by/img/galleries/8350/603/preview/hot30playnfc8gb128gbx6835b_infinix_02_6482f5ea3944e.jpeg',
    url: '/mobile/hot30playnfc8gb128gbx6835b_infinix_02.html',
    categories: [
      {
        id: 137,
        name: '\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u044b, \u0422\u0412 \u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0438\u043a\u0430',
      },
      {
        id: 6129,
        name: '\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u044b, \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b',
      },
      {
        id: 99,
        name: '\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u044b',
      },
    ],
    prices: {
      price: 369,
      salePrice: 299,
    },
    present: {
      code: 29833,
      offer: '\u041f\u043e\u043b\u043a\u0430',
      link: '/storage_systems/mini_gmc.html',
    },
    discountType: 'discount',
    discount: 70,
    services: [],
    servicesTotal: 0,
  },
  {
    id: '0838a1df662c55f8e4bddf48f863e0fd',
    count: 1,
    multiple: 1,
    type: 'product',
    code: 9050930,
    name: '\u041d\u0430\u043a\u043b\u0435\u0439\u043a\u0430 \u0444\u0438\u0440\u043c\u0435\u043d\u043d\u0430\u044f 21vek (\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0430\u044f 20)',
    brand: '21vek',
    image:
      'https://cdn21vek.by/img/galleries/9050/930/preview/\u041d\u0430\u043a\u043b\u0435\u0439\u043a\u0430 \u0420\u0418-01.jpg',
    url: '/stickers_labels/20_21vek__9050930.html',
    categories: [
      {
        id: 9733,
        name: '\u0422\u043e\u0432\u0430\u0440\u044b \u0434\u043b\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430',
      },
      {
        id: 10162,
        name: '\u0411\u0443\u043c\u0430\u0433\u0430 \u0438 \u0431\u0443\u043c\u0430\u0436\u043d\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044f',
      },
      {
        id: 13599,
        name: '\u041d\u0430\u043a\u043b\u0435\u0439\u043a\u0438',
      },
    ],
    prices: {
      price: 1,
      salePrice: 1,
    },
    present: null,
    discountType: 'superprice',
    discount: 0,
    services: [],
    servicesTotal: 0,
  },
];

export const deliveryDetails = {
  8350603: [
    {
      type: 'courier',
      available_from: '2024-09-05T19:00:00',
    },
    {
      type: 'pickup_point',
      available_from: '2024-09-07T14:30:00',
    },
  ],
  9050930: [
    {
      type: 'courier',
      available_from: '2024-09-06T12:00:00',
    },
    {
      type: 'pickup_point',
      available_from: '2024-09-06T14:00:00',
    },
  ],
};

export const services: Record<string, CartService[]> = {
  '5a4dafb78a070273a899eb89dde1e7fb': [
    {
      name: 'Надежная защита +1 год (100-199 руб.)',
      id: '7769',
      code: '9222630',
      description:
        'Дополнительная поддержка вашей техники. В программу входит: увеличение гарантийного периода, бесплатный ремонт в негарантийных случаях, замена товара в случае отсутствия возможности ремонта, бесплатные консультации по вопросам эффективного использования товара, техническое обслуживание.',
      link: '/info/extended_warranty.html',
      price: '35.40',
      outsource: false,
      category: {
        name: 'Надежная защита',
        id: '157',
        type: 'maintenance',
      },
    },
    {
      name: 'Надежная защита +2 года (100-199 руб.)',
      id: '7774',
      code: '9222640',
      description:
        'Дополнительная поддержка вашей техники. В программу входит: увеличение гарантийного периода, бесплатный ремонт в негарантийных случаях, замена товара в случае отсутствия возможности ремонта, бесплатные консультации по вопросам эффективного использования товара, техническое обслуживание.',
      link: '/info/extended_warranty.html',
      price: '38.94',
      outsource: false,
      category: {
        name: 'Надежная защита',
        id: '157',
        type: 'maintenance',
      },
    },
    {
      name: 'Страхование бытовой техники',
      id: '7609',
      code: '8539122',
      description:
        'Комплексное страхование новой бытовой техники от хищения, гибели, а также от повреждения вследствие воздействия жидкостей, короткого замыкания, пожара, взрыва, удара молнии.',
      link: '/services/insurance.html#addservices__274',
      price: '8.85',
      outsource: false,
      category: {
        name: 'Страхование',
        id: '274',
        type: 'insurance',
      },
    },
  ],
  b2d2425a6d69a4b318314d50c235694f: [
    {
      name: 'Сертификат «Негарантийный ремонт» на 1 год',
      id: '2478',
      code: '1060421',
      description:
        'Ремонт устройства – 1 раз, консультация по эксплуатации – неограниченное число раз в течение 12 месяцев в компании «Единый Сервисный Центр». Для смартфонов и планшетов.',
      link: '/services/nonwarranty_repair.html',
      price: '44.85',
      outsource: false,
      category: {
        name: 'Негарантийный ремонт',
        id: '21',
        type: 'maintenance',
      },
    },
    {
      name: 'Android Стандарт(доступно только при самовывозе и наличии SIM-карты)',
      id: '3008',
      code: '5907362',
      description:
        'Скидка 50% на услугу, если с этим заказом оформлен сертификат на негарантийный ремонт. Для смартфона или планшета. В услугу входит: включение устройства, настройка по шагам, синхронизация контактов, создание учетной записи в Play Market, установка 1 мессенджера, заведение учетной записи, выдача памятки с данными учетной записи.',
      link: '',
      price: '15.00',
      outsource: false,
      category: {
        name: 'Настройка устройства (только в пунктах выдачи заказов)',
        id: '123',
        type: 'maintenance',
      },
    },
    {
      name: 'Перенос контактов(доступно только при самовывозе)',
      id: '3157',
      code: '5909271',
      description:
        'Для смартфона или планшета. Перенос данных записной книжки на новое устройство.',
      link: '',
      price: '10.00',
      outsource: false,
      category: {
        name: 'Настройка устройства (только в пунктах выдачи заказов)',
        id: '123',
        type: 'maintenance',
      },
    },
    {
      name: 'Сертификат «Негарантийный ремонт» на 2 года',
      id: '4176',
      code: '5977695',
      description:
        'Ремонт устройства – 2 раза, консультация по эксплуатации – неограниченное число раз в течение 24 месяцев в компании «Единый Сервисный Центр». Для смартфонов и планшетов.',
      link: '/services/nonwarranty_repair.html',
      price: '74.75',
      outsource: false,
      category: {
        name: 'Негарантийный ремонт',
        id: '21',
        type: 'maintenance',
      },
    },
    {
      name: 'Сертификат «Исправный телефон» на 1 год (защита дисплея)',
      id: '4177',
      code: '5977694',
      description:
        'Ремонт дисплея – 1 раз, консультация по эксплуатации – неограниченное число раз в течение 12 месяцев в компании «Единый Сервисный Центр». Для смартфонов и планшетов.',
      link: '/services/nonwarranty_repair.html',
      price: '35.88',
      outsource: false,
      category: {
        name: 'Защита дисплея',
        id: '147',
        type: 'maintenance',
      },
    },
    {
      name: 'Android Премиум(доступно только при самовывозе и наличии SIM-карты)',
      id: '4624',
      code: '6124798',
      description:
        'Скидка 50% на услугу, если с этим заказом оформлен сертификат на негарантийный ремонт. Для смартфона или планшета. В услугу входит: включение устройства, настройка по шагам, синхронизация контактов, создание учетной записи в Play Market, установка из него приложений (до 3 мессенджеров, до 3 соцсетей на выбор), заведение учетных записей в приложениях, выдача памятки с данными учетных записей. Перенос данных со старого устройства (при его наличии) с помощью сопряжения или приложения.',
      link: '',
      price: '20.00',
      outsource: false,
      category: {
        name: 'Настройка устройства (только в пунктах выдачи заказов)',
        id: '123',
        type: 'maintenance',
      },
    },
    {
      name: 'Сертификат «Умная защита» на 1000 р.',
      id: '7359',
      code: '7903087',
      description:
        'Ремонт устройства – 1 раз, консультация по эксплуатации – неограниченное число раз в течение 12 месяцев в компании «Единый Сервисный Центр». Для смартфонов и планшетов.',
      link: '/info/nonwarranty_repair.html',
      price: '100.00',
      outsource: false,
      category: {
        name: 'Умная защита',
        id: '254',
        type: 'maintenance',
      },
    },
    {
      name: 'Сертификат «Умная защита» на 500 р.',
      id: '7364',
      code: '7903083',
      description:
        'Ремонт устройства – 1 раз, консультация по эксплуатации – неограниченное число раз в течение 12 месяцев в компании «Единый Сервисный Центр». Для смартфонов и планшетов.',
      link: '/info/nonwarranty_repair.html',
      price: '50.00',
      outsource: false,
      category: {
        name: 'Умная защита',
        id: '254',
        type: 'maintenance',
      },
    },
    {
      name: 'Сертификат «Умная защита» 300 р.',
      id: '7369',
      code: '7903079',
      description:
        'Ремонт устройства – 1 раз, консультация по эксплуатации – неограниченное число раз в течение 12 месяцев в компании «Единый Сервисный Центр». Для смартфонов и планшетов.',
      link: '/info/nonwarranty_repair.html',
      price: '30.00',
      outsource: false,
      category: {
        name: 'Умная защита',
        id: '254',
        type: 'maintenance',
      },
    },
    {
      name: 'Страхование портативных устройств',
      id: '2063',
      code: '576805',
      description:
        'Комплексное страхование новых портативных устройств от хищения, а также от повреждения вследствие падения, воздействия жидкостей, короткого замыкания, пожара, взрыва, удара молнии.',
      link: '/services/insurance.html#addservices__16',
      price: '35.88',
      outsource: false,
      category: {
        name: 'Cтрахование',
        id: '16',
        type: 'insurance',
      },
    },
  ],
};

export const eCertificates: Certificate[] = [
  {
    type: 'e-certificate',
    count: 1,
    code: 5990307,
    name: '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u044b\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 21vek+ \u043d\u0430 100 \u0440\u0443\u0431\u043b\u0435\u0439',
    producer: {
      id: '21vek',
      name: '21vek+',
    },
    brand: '21vek+',
    image:
      'https://cdn21vek.by/img/galleries/5990/307/preview/100_21vek_02_64a3cc703e437.jpeg',
    url: '/electronic_gift_certificates/100_21vek_02.html',
    categories: [
      {
        id: 12714,
        name: '\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b',
      },
      {
        id: 12719,
        name: '\u041f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b 21vek',
      },
      {
        id: 12769,
        name: '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0435 \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b 21vek',
      },
    ],
    prices: {
      price: 100,
    },
    display: 1,
    totals: {
      net: 100,
      gross: 100,
    },
  },
  {
    type: 'e-certificate',
    count: 1,
    code: 5990308,
    name: '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u044b\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 21vek+ \u043d\u0430 200 \u0440\u0443\u0431\u043b\u0435\u0439',
    producer: {
      id: '21vek',
      name: '21vek+',
    },
    brand: '21vek+',
    image:
      'https://cdn21vek.by/img/galleries/5990/308/preview/200_21vek_01_64a3cc7dde664.jpeg',
    url: '/electronic_gift_certificates/200_21vek_01.html',
    categories: [
      {
        id: 12714,
        name: '\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b',
      },
      {
        id: 12719,
        name: '\u041f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b 21vek',
      },
      {
        id: 12769,
        name: '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0435 \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b 21vek',
      },
    ],
    prices: {
      price: 200,
    },
    display: 1,
    totals: {
      net: 200,
      gross: 200,
    },
  },
];
