import { hashSync } from 'bcrypt';
import {
  additionalServicesCategoriesNames,
  locations,
  initialReview,
  refrigeratorImages,
  banners,
  products,
  refrigerators,
} from './constants';
import { prisma } from './prisma-client';

async function up() {
  await prisma.location.createMany({
    data: locations.slice(1),
  });

  const location = await prisma.location.create({
    data: locations[0],
  });

  const user = await prisma.user.create({
    data: {
      name: 'Test User',
      email: 'user@example.com',
      password: hashSync('23456789', 10),
      phone: '+375291234567',
      role: 'User',
      locationId: location.id,
      verified: true
    },
  });

  const category = await prisma.category.create({
    data: {
      name: 'Бытовая техника',
      link: '/kitchen',
    },
  });

  const subcategory = await prisma.category.create({
    data: {
      name: 'Крупная техника для кухни',
      link: '/large_tech',
      parentId: category.id,
    },
  });

  const subSubcategory = await prisma.category.create({
    data: {
      name: 'Холодильники',
      link: '/refrigerators',
      parentId: subcategory.id,
    },
  });

  const additionalServiceCategories = await Promise.all(
    additionalServicesCategoriesNames.map((name) =>
      prisma.additionalServiceCategory.create({
        data: {
          name,
        },
      }),
    ),
  );

  const additionalServices = await prisma.additionalService.createMany({
    data: [
      {
        name: 'Перенавеска 2 дверей холодильника без электронного управления на дверях',
        description:
          'При наличии электронных доводчиков стоимость перенавески дверей составит 45 руб., время работ – 1-1,5 часа. Производится в Барановичах, Бресте, Бобруйске, Борисове, Витебске, Гомеле, Гродно, Жлобине, Минске, Минском районе, Могилеве, Мозыре, Молодечно, Орше, Пинске, Полоцке.*Итоговая стоимость может измениться. Оплачивается только наличными по факту выполнения работ.',
        price: 70.0,
        priceCurrency: 'р',
        categoryId: additionalServiceCategories[0].id,
      },
      {
        name: 'Надежная защита +1 год (500-999 руб.)',
        description:
          'Дополнительная поддержка вашей техники. В программу входит: увеличение гарантийного периода, бесплатный ремонт в негарантийных случаях, замена товара в случае отсутствия возможности ремонта, бесплатные консультации по вопросам эффективного использования товара, техническое обслуживание.',
        link: '/info/extended_warranty',
        price: 118.17,
        priceCurrency: 'р',
        categoryId: additionalServiceCategories[1].id,
      },
      {
        name: 'Надежная защита +2 года (500-999 руб.)',
        description:
          'Дополнительная поддержка вашей техники. В программу входит: увеличение гарантийного периода, бесплатный ремонт в негарантийных случаях, замена товара в случае отсутствия возможности ремонта, бесплатные консультации по вопросам эффективного использования товара, техническое обслуживание.',
        link: '/info/extended_warranty',
        price: 136.35,
        priceCurrency: 'р',
        categoryId: additionalServiceCategories[1].id,
      },
      {
        name: 'Страхование бытовой техники',
        description:
          'Комплексное страхование новой бытовой техники от хищения, гибели, а также от повреждения вследствие воздействия жидкостей, короткого замыкания, пожара, взрыва, удара молнии.',
        link: '/services/insurance',
        price: 45.45,
        priceCurrency: 'р',
        categoryId: additionalServiceCategories[2].id,
      },
    ],
  });

  const producersPromises = [
    'ATLANT',
    'Indesit',
    'Nordfrost',
    'Centek',
    'Stinol',
    'LG',
    'TECHNO',
    'Beko',
    'Maunfeld',
  ].map((name) =>
    prisma.producer.create({
      data: {
        name,
      },
    }),
  );

  const producers = await Promise.all(producersPromises);

  const additionalLinks = await prisma.additionalLink.createMany({
    data: [
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
  });

  const productsPromise = products.map((el, index) =>
    prisma.product.create({
      data: {
        ...el,
        producerId:
          producers.find((producer) => el.name.includes(producer.name))?.id ||
          null,
        refrigerator: {
          create: {
            ...refrigerators[index],
            additionalLinks: {
              connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
            },
          },
        },
        categories: {
          connect: [
            { id: category.id },
            { id: subcategory.id },
            { id: subSubcategory.id },
          ],
        },
        additionalServices: {
          connect: [{ id: 1 }],
        },
        images: {
          createMany: {
            data: refrigeratorImages,
          },
        },
        reviews: {
          create: {
            userId: user.id,
            ...initialReview,
          },
        },
      },
    }),
  );
  await Promise.all(productsPromise);

  await prisma.banner.createMany({
    data: banners,
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Location" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Producer" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Review" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Image" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "AdditionalServiceCategory" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "AdditionalService" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Refrigerator" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "AdditionalLink" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "FavoriteItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ViewedItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "WaitedItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Banner" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
