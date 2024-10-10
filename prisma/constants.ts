import { Prisma } from '@prisma/client';

export const locations = [
  {
    type: 'г',
    name: 'Минск',
    district: '',
    region: '',
    alias: 'minsk',
  },
  {
    type: 'г',
    name: 'Брест',
    district: '',
    region: 'Брестская',
    alias: 'brest',
  },
  {
    type: 'г',
    name: 'Витебск',
    district: '',
    region: 'Витебская',
    alias: 'vitebsk',
  },
  {
    type: 'г',
    name: 'Гомель',
    district: '',
    region: 'Гомельская',
    alias: 'gomel',
  },
  {
    type: 'г',
    name: 'Гродно',
    district: '',
    region: 'Гродненская',
    alias: 'grodno',
  },
  {
    type: 'г',
    name: 'Могилев',
    district: '',
    region: 'Могилевская',
    alias: 'mogilev',
  },
  {
    type: 'г',
    name: 'Барановичи',
    district: '',
    region: 'Брестская',
    alias: 'baranovichi',
  },
  {
    type: 'г',
    name: 'Бобруйск',
    district: '',
    region: 'Могилевская',
    alias: 'bobrujsk',
  },
  {
    type: 'г',
    name: 'Борисов',
    district: 'Борисовский',
    region: 'Минская',
    alias: 'borisov',
  },
  {
    type: 'г',
    name: 'Лида',
    district: 'Лидский',
    region: 'Гродненская',
    alias: 'lida',
  },
  {
    type: 'г',
    name: 'Мозырь',
    district: 'Мозырский',
    region: 'Гомельская',
    alias: 'mozyr',
  },
  {
    type: 'г',
    name: 'Молодечно',
    district: 'Молодечненский',
    region: 'Минская',
    alias: 'molodechno',
  },
  {
    type: 'г',
    name: 'Пинск',
    district: '',
    region: 'Брестская',
    alias: 'pinsk',
  },
  {
    type: 'г',
    name: 'Солигорск',
    district: 'Солигорский',
    region: 'Минская',
    alias: 'soligorsk',
  },
  {
    type: 'г',
    name: 'Новополоцк',
    district: '',
    region: 'Витебская',
    alias: 'novopolock',
  },
];

export const additionalServicesCategoriesNames = [
  'Перенавеска дверей',
  'Надежная защита',
  'Страхование',
];

export const initialReview = {
  advantages: 'Цена , вместимость',
  disadvantages: 'Шумность превышает 42дцб',
  summary: 'Шумность превышает 42дцб , у меня 46 , а ему только 2 месяца',
  rating: 4,
  comment:
    'Приносим извинения за доставленные неудобства. Благодаря Вашему отзыву, мы уточнили информацию о товаре у поставщика и исправили описание на сайте. Уровень шума 39 дБ. В результате вашего обращения, с Вами провели консультацию наши специалисты. Надеемся на понимание с Вашей стороны и на то, что у нас еще будет возможность произвести на Вас хорошее впечатление.',
};

export const refrigerator: Prisma.RefrigeratorCreateNestedOneWithoutProductInput =
  {
    create: {
      type: 'холодильник с морозильником',
      construction: 'двухдверный',
      cameras: ['морозильная', 'холодильная'],
      freezerLocation: 'снизу',
      freezerSectionsCount: 2,
      color: 'белый',
      noFrostSystem: false,
      energyClass: 'A',
      compressorsCount: 1,
      noiseLevel: 39,
      retrodesign: false,
      camerasCount: 2,
      totalVolume: 173,
      refrigeratorVolume: 131,
      freezerVolume: 42,
      multifunctionalArea: false,
      dispenser: false,
      minibar: false,
      hingesLocation: 'перенавешиваемые',
      lighting: true,
      annualElectricityConsumption: 261,
      inverterTechnology: false,
      climateClass: 'N',
      autonomousColdStorage: 14,
      energySavingMode: false,
      controlType: 'механическое',
      controlUnitLocation: 'внутри',
      independentTemperatureControl: false,
      vacationMode: false,
      childLock: false,
      freshnessZone: false,
      shelvesCount: 3,
      shelfMaterial: 'стекло',
      doorBalconiesCount: 3,
      doorBalconiesMaterial: 'пластик',
      superCooling: false,
      forcedAirCirculation: false,
      builtinOzonizer: false,
      antibacterialProtection: false,
      included: 'лоток для яиц',
      freezingPower: 2,
      height: 142.5,
      width: 54.5,
      depth: 60,
      weight: 50,
      originCountry: 'Беларусь',
      producerInfo: 'ЗАО «АТЛАНТ», пр. Победителей, д. 61, г. Минск, РБ',
      supplierInfo: 'ЗАО "АТЛАНТ", 220035, Минск, пр. Победителей 61',
      description:
        '<b>ХМ 4208-000</b> — это узкий холодильник шириной 545 мм (вместо обычных 600 мм) и с классом энергоэффективности А из серии COMPACT. Создан на высоком дизайнерском и конструкторском уровне и соответствует современным тенденциям развития бытовой техники. С новым наружным и внутренним дизайном, позволяет по-современному решить проблему небольших кухонь.\nВ холодильной системе используется наиболее экономичный и экологически безопасный хладагент R600а (изобутан). Являясь природным веществом, он не оказывает негативного воздействия на окружающую среду.\nЭта модель из серии СOMPACT сохраняет свою работоспособность в диапазоне от 175 до 255 В, то есть устойчива к перепадам напряжения, что очень важно для многих потребителей в Беларуси, России, Украине.\nУправлять холодильник очень просто. Для включения достаточно вставить вилку шнура питания в розетку, подключив холодильник к электрической сети. При необходимости можно произвести регулировку температуры в холодильнике, используя ручку терморегулятора, которую устанавливают меткой на выбранное деление. Деление «1» соответствует наиболее высокой температуре (наименьшее охлаждение) в холодильнике, деление «4» — наиболее низкой (наибольшее охлаждение).',
      guarantee: '3 года',
      additionalLinks: {
        create: [
          {
            name: 'Руководство по эксплуатации',
            link: '/files/atlant_4208000.pdf',
            type: 'File',
          },
          {
            name: 'Руководство по эксплуатации (особенности моделей)',
            link: '/files/atlant_4208000_models.pdf',
            type: 'File',
          },
          {
            name: 'Сервисные центры ATLANT',
            link: '/info/service_centres?producer=atlant',
            type: 'Link',
          },
          {
            name: 'Другая продукция бренда ATLANT',
            link: '/info/brands/atlant',
            type: 'Link',
          },
        ],
      },
    },
  };

export const refrigeratorImages: Prisma.ImageCreateManyProductInput[] = [
  {
    isMain: true,
    url: 'https://cdn21vek.by/img/galleries/58/129/atlant_4208000_65bc97b9ca11d.jpeg',
  },
  {
    isMain: false,
    url: 'https://cdn21vek.by/img/galleries/58/129/atlant_4208000_56c302b5e778c.jpeg',
  },
  {
    isMain: false,
    url: 'https://cdn21vek.by/img/galleries/58/129/atlant_4208000_65bc97c131902.jpeg',
  },
  {
    isMain: false,
    url: 'https://cdn21vek.by/img/galleries/58/129/atlant_4208000_65bc97f1c1251.jpeg',
  },
  {
    isMain: false,
    url: 'https://cdn21vek.by/img/galleries/58/129/atlant_4208000_65bc97df5f0c3.jpeg',
  },
  {
    isMain: false,
    url: 'https://cdn21vek.by/img/galleries/58/129/atlant_4208000_65bc97c9b6e99.jpeg',
  },
];

const largeBanners: Prisma.BannerCreateManyInput[] = [
  {
    image: '/images/superdiscounts.jpg',
    link: '/special_offers/superdiscounts',
    title: 'Распрода 10%',
    size: 'Large',
  },
  {
    image: '/images/couch.jpg',
    link: '/special_offers/couches',
    title: 'Мягкая мебель',
    size: 'Large',
  },
  {
    image: '/images/adgameBanner.jpg',
    link: '/company/news/8944',
    title: 'РИ 5',
    size: 'Large',
  },
  {
    image: '/images/KVI.jpg',
    link: '/special_offers/sale_goods',
    title: 'KVI 5 неделя ',
    size: 'Large',
  },
  {
    image: '/images/wow_sale.jpg',
    link: '/special_offers/wow_sale',
    title: 'Щедрые цены ',
    size: 'Large',
  },
  {
    image: '/images/tv_lg.jpg',
    link: '/tv/55ur78009ll_lg',
    title: 'Телевизор LG',
    size: 'Large',
  },
  {
    image: '/images/mothersday.jpg',
    link: '/special_offers/mothersday',
    title: 'День матери ',
    size: 'Large',
  },
  {
    image: '/images/installment21.jpg',
    link: '/special_offers/installment21',
    title: 'Дольки ',
    size: 'Large',
  },
  {
    image: '/images/construction_mixtures.jpg',
    link: '/special_offers/construction_mixtures',
    title: 'Строй. смеси',
    size: 'Large',
  },
  {
    image: '/images/mattresses.jpg',
    link: '/mattresses/?order%5Bpopularity%5D=desc&filter%5Bdiscount_type%5D%5B0%5D=present&filter%5Bsa%5D=&filter%5B122428%5D%5B0%5D=1134268',
    title: 'Матрасы ',
    size: 'Large',
  },
];

const bottomBanners: Prisma.BannerCreateManyInput[] = [
  {
    image: '/images/kitfort.png',
    link: '/special_offers/kitfort',
    title: 'Kitfort',
    description: 'фабрика новинок',
    size: 'Small',
  },
  {
    image: '/images/xiaomi.png',
    link: '/special_offers/xiaomi21',
    title: 'Xiaomi',
    description: 'топ продаж',
    size: 'Small',
  },
  {
    image: '/images/lg.png',
    link: '/special_offers/promo?discountTypes=superprice%2Cdiscount&producers=3',
    title: 'LG',
    description: 'лучшие предложения',
    size: 'Small',
  },
  {
    image: '/images/belgoods.png',
    link: '/special_offers/belgoods',
    title: 'Кредит «На родныя тавары» ',
    description: 'ставка 4%',
    size: 'Small',
  },
  {
    image: '/images/mio_tesoro.jpg',
    link: '/special_offers/promo?categories=7314&producers=12563',
    title: 'Mio Tesoro ',
    description: 'домашний текстиль',
    size: 'Small',
  },
  {
    image: '/images/calmer.jpg',
    link: '/special_offers/promo?producers=57245',
    title: 'Calmer ',
    description: 'массажеры',
    size: 'Small',
  },
];

export const banners: Prisma.BannerCreateManyInput[] = [
  ...largeBanners,
  ...bottomBanners,
];
