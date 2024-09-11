import { Categories } from '@/types/category';

export const categories: Categories = [
  {
    name: 'Бытовая техника',
    id: '100',
    subCategories: [
      {
        name: 'Крупная техника для кухни',
        id: '1601',
        subCategories: [
          {
            name: 'Холодильники',
            id: '160101',
            subCategories: [],
          },
          {
            name: 'Вытяжки',
            id: '160102',
            subCategories: [],
          },
          {
            name: 'Кухонные плиты',
            id: '160103',
            subCategories: [],
          },
          {
            name: 'Морозильники',
            id: '160104',
            subCategories: [],
          },
          {
            name: 'Посудомоечные машины',
            id: '160105',
            subCategories: [],
          },
          {
            name: 'Настольные плиты',
            id: '160106',
            subCategories: [],
          },
          {
            name: 'Винные шкафы',
            id: '160107',
            subCategories: [],
          },
        ],
      },
      {
        name: 'Встраиваемая техника, оборудование',
        id: '160108',
        subCategories: [
          {
            name: 'Варочные  панели',
            id: '16010801',
            subCategories: [],
          },
          {
            name: 'Духовые шкафы',
            id: '16010802',
            subCategories: [],
          },
          {
            name: 'Холодильники встраиваемые',
            id: '16010803',
            subCategories: [],
          },
          {
            name: 'Посудомоечные машины встраиваемые',
            id: '16010804',
            subCategories: [],
          },
          {
            name: 'Микроволновые печи встраиваемые',
            id: '16010805',
            subCategories: [],
          },
          {
            name: 'Кофемашины встраиваемые',
            id: '16010806',
            subCategories: [],
          },
          {
            name: 'Комплекты встраиваемой техники',
            id: '16010807',
            subCategories: [],
          },
          {
            name: 'Морозильники встраиваемые',
            id: '16010808',
            subCategories: [],
          },
          {
            name: 'Измельчители пищевых отходов',
            id: '16010809',
            subCategories: [],
          },
          {
            name: 'Шкафы для подогрева посуды',
            id: '16010810',
            subCategories: [],
          },
          {
            name: 'Винные шкафы встраиваемые',
            id: '16010811',
            subCategories: [],
          },
          {
            name: 'Вакуумные упаковщики встраиваемые',
            id: '16010812',
            subCategories: [],
          },
        ],
      },
      {
        name: 'Техника для приготовления еды',
        id: '1602',
        subCategories: [
          {
            name: 'Микроволновые печи',
            id: '160201',
            subCategories: [],
          },
          {
            name: 'Мультиварки',
            id: '160202',
            subCategories: [],
          },
          {
            name: 'Сэндвичницы, хот-дог мейкеры',
            id: '160203',
            subCategories: [],
          },
          {
            name: 'Тостеры',
            id: '160204',
            subCategories: [],
          },
          {
            name: 'Электрогрили, электрошашлычницы',
            id: '160205',
            subCategories: [],
          },
          {
            name: 'Вафельницы, орешницы, кексницы',
            id: '160206',
            subCategories: [],
          },
          {
            name: 'Хлебопечки',
            id: '160207',
            subCategories: [],
          },
          {
            name: 'Ростеры, мини-печи',
            id: '160208',
            subCategories: [],
          },
          {
            name: 'Йогуртницы, мороженицы',
            id: '160209',
            subCategories: [],
          },
        ],
      },
      {
        name: 'Техника для ухода за одеждой',
        id: '1603',
        subCategories: [
          { name: 'Стиральные машины', id: '160301', subCategories: [] },
          {
            name: 'Стиральные машины встраиваемые',
            id: '160302',
            subCategories: [],
          },
          { name: 'Утюги', id: '160303', subCategories: [] },
          { name: 'Отпариватели', id: '160304', subCategories: [] },
          {
            name: 'Швейные, вышивальные машины',
            id: '160305',
            subCategories: [],
          },
          {
            name: 'Промышленные швейные машины',
            id: '160306',
            subCategories: [],
          },
          { name: 'Оверлоки', id: '160307', subCategories: [] },
          { name: 'Сушильные машины, шкафы', id: '160308', subCategories: [] },
          {
            name: 'Гладильные системы, прессы',
            id: '160309',
            subCategories: [],
          },
          {
            name: 'Машинки для удаления катышков',
            id: '160310',
            subCategories: [],
          },
          { name: 'Сушилки для обуви', id: '160311', subCategories: [] },
        ],
      },
      {
        name: 'Климатическая техника',
        id: '1604',
        subCategories: [
          { name: 'Вентиляторы бытовые', id: '160401', subCategories: [] },
          {
            name: 'Кондиционеры, сплит-системы',
            id: '160402',
            subCategories: [],
          },
          { name: 'Охладители воздуха', id: '160403', subCategories: [] },
          { name: 'Водонагреватели', id: '160404', subCategories: [] },
          {
            name: 'Увлажнители, очистители воздуха',
            id: '160405',
            subCategories: [],
          },
          { name: 'Камины, печи', id: '160406', subCategories: [] },
          { name: 'Обогреватели', id: '160407', subCategories: [] },
          { name: 'Тепловые завесы', id: '160408', subCategories: [] },
          { name: 'Биокамины', id: '160409', subCategories: [] },
          { name: 'Проветриватели', id: '160410', subCategories: [] },
          { name: 'Порталы для каминов', id: '160411', subCategories: [] },
          { name: 'Вентиляторы вытяжные', id: '160412', subCategories: [] },
          { name: 'Метеостанции', id: '160413', subCategories: [] },
          { name: 'Газовые баллоны бытовые', id: '160414', subCategories: [] },
        ],
      },
      {
        name: 'Техника для дома',
        id: '1605',
        subCategories: [
          { name: 'Пылесосы', id: '160501', subCategories: [] },
          {
            name: 'Пылесосы профессиональные',
            id: '160502',
            subCategories: [],
          },
          {
            name: 'Роботы-пылесосы, мойщики окон',
            id: '160503',
            subCategories: [],
          },
          { name: 'Пароочистители', id: '160504', subCategories: [] },
          {
            name: 'Электровеники, электрошвабры',
            id: '160505',
            subCategories: [],
          },
          {
            name: 'Стерилизационное оборудование',
            id: '160506',
            subCategories: [],
          },
        ],
      },
      {
        name: 'Комплектующие для климатической техники',
        id: '1606',
        subCategories: [
          {
            name: 'Управление климатической техникой',
            id: '160601',
            subCategories: [],
          },
          {
            name: 'Фильтры для климатической техники',
            id: '160602',
            subCategories: [],
          },
          {
            name: 'Аксессуары для климатической техники',
            id: '160603',
            subCategories: [],
          },
        ],
      },
      {
        name: 'Аксессуары для кухонной техники',
        id: '1607',
        subCategories: [
          {
            name: 'Аксессуары для микроволновых печей',
            id: '160701',
            subCategories: [],
          },
          {
            name: 'Вакуумные пакеты, контейнеры',
            id: '160702',
            subCategories: [],
          },
          { name: 'Аксессуары для кофемашин', id: '160703', subCategories: [] },
          {
            name: 'Аксессуары для мультиварок, хлебопечек',
            id: '160704',
            subCategories: [],
          },
          {
            name: 'Аксессуары для тостеров, сэндвичниц',
            id: '160705',
            subCategories: [],
          },
          {
            name: 'Аксессуары для кухонных комбайнов',
            id: '160706',
            subCategories: [],
          },
          { name: 'Аксессуары для мясорубок', id: '160707', subCategories: [] },
          {
            name: 'Аксессуары для блендеров, миксеров',
            id: '160708',
            subCategories: [],
          },
          {
            name: 'Аксессуары для сушилок овощей и фруктов',
            id: '160709',
            subCategories: [],
          },
          { name: 'Аксессуары для йогуртниц', id: '160710', subCategories: [] },
          {
            name: 'Аксессуары для аэрогрилей, электрогрилей',
            id: '160711',
            subCategories: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Товары для дома',
    id: '200',
    subCategories: [],
  },
  {
    name: 'Товары для детей',
    id: '300',
    subCategories: [],
  },
  {
    name: 'Здоровье',
    id: '400',
    subCategories: [],
  },
  {
    name: 'Авто и мото',
    id: '500',
    subCategories: [],
  },
  {
    name: 'Строительство и ремонт',
    id: '600',
    subCategories: [],
  },
  {
    name: 'Товары для бизнеса',
    id: '700',
    subCategories: [],
  },
  {
    name: 'Зоотовары',
    id: '800',
    subCategories: [],
  },
  {
    name: 'Компьютеры и периферия',
    id: '900',
    subCategories: [],
  },
  {
    name: 'Сертификаты',
    id: '1000',
    subCategories: [],
  },
  {
    name: 'Сантехника и водоснабжение',
    id: '1100',
    subCategories: [],
  },
  {
    name: 'Ювелирные украшения',
    id: '1200',
    subCategories: [],
  },
  {
    name: 'Смартфоны, ТВ и электроника',
    id: '1300',
    subCategories: [],
  },
  {
    name: 'Дом и сад',
    id: '1400',
    subCategories: [],
  },
  {
    name: 'Спорт',
    id: '1500',
    subCategories: [],
  },
  {
    name: 'Мебель',
    id: '1600',
    subCategories: [],
  },
  {
    name: 'Книги и канцелярия',
    id: '1700',
    subCategories: [],
  },
  {
    name: 'Товары для взрослых',
    id: '1800',
    subCategories: [],
  },
  {
    name: 'Красота и стиль',
    id: '1900',
    subCategories: [],
  },
  {
    name: 'Туризм, активный отдых',
    id: '2000',
    subCategories: [],
  },
  {
    name: 'Досуг и хобби',
    id: '2100',
    subCategories: [],
  },
  {
    name: 'Строительный инструмент',
    id: '2200',
    subCategories: [],
  },
];

const categories2: Categories = [
  {
    name: 'Крупная техника для кухни',
    id: '1601',
    subCategories: [
      {
        name: 'Холодильники',
        id: '160101',
        subCategories: [],
      },
      {
        name: 'Вытяжки',
        id: '160102',
        subCategories: [],
      },
      {
        name: 'Кухонные плиты',
        id: '160103',
        subCategories: [],
      },
      {
        name: 'Морозильники',
        id: '160104',
        subCategories: [],
      },
      {
        name: 'Посудомоечные машины',
        id: '160105',
        subCategories: [],
      },
      {
        name: 'Настольные плиты',
        id: '160106',
        subCategories: [],
      },
      {
        name: 'Винные шкафы',
        id: '160107',
        subCategories: [],
      },
    ],
  },
  {
    name: 'Встраиваемая техника, оборудование',
    id: '160108',
    subCategories: [
      {
        name: 'Варочные  панели',
        id: '16010801',
        subCategories: [],
      },
      {
        name: 'Духовые шкафы',
        id: '16010802',
        subCategories: [],
      },
      {
        name: 'Холодильники встраиваемые',
        id: '16010803',
        subCategories: [],
      },
      {
        name: 'Посудомоечные машины встраиваемые',
        id: '16010804',
        subCategories: [],
      },
      {
        name: 'Микроволновые печи встраиваемые',
        id: '16010805',
        subCategories: [],
      },
      {
        name: 'Кофемашины встраиваемые',
        id: '16010806',
        subCategories: [],
      },
      {
        name: 'Комплекты встраиваемой техники',
        id: '16010807',
        subCategories: [],
      },
      {
        name: 'Морозильники встраиваемые',
        id: '16010808',
        subCategories: [],
      },
      {
        name: 'Измельчители пищевых отходов',
        id: '16010809',
        subCategories: [],
      },
      {
        name: 'Шкафы для подогрева посуды',
        id: '16010810',
        subCategories: [],
      },
      {
        name: 'Винные шкафы встраиваемые',
        id: '16010811',
        subCategories: [],
      },
      {
        name: 'Вакуумные упаковщики встраиваемые',
        id: '16010812',
        subCategories: [],
      },
    ],
  },
  {
    name: 'Техника для приготовления еды',
    id: '1602',
    subCategories: [
      {
        name: 'Микроволновые печи',
        id: '160201',
        subCategories: [],
      },
      {
        name: 'Мультиварки',
        id: '160202',
        subCategories: [],
      },
      {
        name: 'Сэндвичницы, хот-дог мейкеры',
        id: '160203',
        subCategories: [],
      },
      {
        name: 'Тостеры',
        id: '160204',
        subCategories: [],
      },
      {
        name: 'Электрогрили, электрошашлычницы',
        id: '160205',
        subCategories: [],
      },
      {
        name: 'Вафельницы, орешницы, кексницы',
        id: '160206',
        subCategories: [],
      },
      {
        name: 'Хлебопечки',
        id: '160207',
        subCategories: [],
      },
      {
        name: 'Ростеры, мини-печи',
        id: '160208',
        subCategories: [],
      },
      {
        name: 'Йогуртницы, мороженицы',
        id: '160209',
        subCategories: [],
      },
    ],
  },
  {
    name: 'Техника для ухода за одеждой',
    id: '1603',
    subCategories: [
      { name: 'Стиральные машины', id: '160301', subCategories: [] },
      {
        name: 'Стиральные машины встраиваемые',
        id: '160302',
        subCategories: [],
      },
      { name: 'Утюги', id: '160303', subCategories: [] },
      { name: 'Отпариватели', id: '160304', subCategories: [] },
      { name: 'Швейные, вышивальные машины', id: '160305', subCategories: [] },
      { name: 'Промышленные швейные машины', id: '160306', subCategories: [] },
      { name: 'Оверлоки', id: '160307', subCategories: [] },
      { name: 'Сушильные машины, шкафы', id: '160308', subCategories: [] },
      { name: 'Гладильные системы, прессы', id: '160309', subCategories: [] },
      {
        name: 'Машинки для удаления катышков',
        id: '160310',
        subCategories: [],
      },
      { name: 'Сушилки для обуви', id: '160311', subCategories: [] },
    ],
  },
  {
    name: 'Климатическая техника',
    id: '1604',
    subCategories: [
      { name: 'Вентиляторы бытовые', id: '160401', subCategories: [] },
      { name: 'Кондиционеры, сплит-системы', id: '160402', subCategories: [] },
      { name: 'Охладители воздуха', id: '160403', subCategories: [] },
      { name: 'Водонагреватели', id: '160404', subCategories: [] },
      {
        name: 'Увлажнители, очистители воздуха',
        id: '160405',
        subCategories: [],
      },
      { name: 'Камины, печи', id: '160406', subCategories: [] },
      { name: 'Обогреватели', id: '160407', subCategories: [] },
      { name: 'Тепловые завесы', id: '160408', subCategories: [] },
      { name: 'Биокамины', id: '160409', subCategories: [] },
      { name: 'Проветриватели', id: '160410', subCategories: [] },
      { name: 'Порталы для каминов', id: '160411', subCategories: [] },
      { name: 'Вентиляторы вытяжные', id: '160412', subCategories: [] },
      { name: 'Метеостанции', id: '160413', subCategories: [] },
      { name: 'Газовые баллоны бытовые', id: '160414', subCategories: [] },
    ],
  },
  {
    name: 'Техника для дома',
    id: '1605',
    subCategories: [
      { name: 'Пылесосы', id: '160501', subCategories: [] },
      { name: 'Пылесосы профессиональные', id: '160502', subCategories: [] },
      {
        name: 'Роботы-пылесосы, мойщики окон',
        id: '160503',
        subCategories: [],
      },
      { name: 'Пароочистители', id: '160504', subCategories: [] },
      { name: 'Электровеники, электрошвабры', id: '160505', subCategories: [] },
      {
        name: 'Стерилизационное оборудование',
        id: '160506',
        subCategories: [],
      },
    ],
  },
  {
    name: 'Комплектующие для климатической техники',
    id: '1606',
    subCategories: [
      {
        name: 'Управление климатической техникой',
        id: '160601',
        subCategories: [],
      },
      {
        name: 'Фильтры для климатической техники',
        id: '160602',
        subCategories: [],
      },
      {
        name: 'Аксессуары для климатической техники',
        id: '160603',
        subCategories: [],
      },
    ],
  },
  {
    name: 'Аксессуары для кухонной техники',
    id: '1607',
    subCategories: [
      {
        name: 'Аксессуары для микроволновых печей',
        id: '160701',
        subCategories: [],
      },
      { name: 'Вакуумные пакеты, контейнеры', id: '160702', subCategories: [] },
      { name: 'Аксессуары для кофемашин', id: '160703', subCategories: [] },
      {
        name: 'Аксессуары для мультиварок, хлебопечек',
        id: '160704',
        subCategories: [],
      },
      {
        name: 'Аксессуары для тостеров, сэндвичниц',
        id: '160705',
        subCategories: [],
      },
      {
        name: 'Аксессуары для кухонных комбайнов',
        id: '160706',
        subCategories: [],
      },
      { name: 'Аксессуары для мясорубок', id: '160707', subCategories: [] },
      {
        name: 'Аксессуары для блендеров, миксеров',
        id: '160708',
        subCategories: [],
      },
      {
        name: 'Аксессуары для сушилок овощей и фруктов',
        id: '160709',
        subCategories: [],
      },
      { name: 'Аксессуары для йогуртниц', id: '160710', subCategories: [] },
      {
        name: 'Аксессуары для аэрогрилей, электрогрилей',
        id: '160711',
        subCategories: [],
      },
    ],
  },
  {
    name: 'Средства для ухода за техникой',
    id: 'category_6',
    subCategories: [],
  },
];
