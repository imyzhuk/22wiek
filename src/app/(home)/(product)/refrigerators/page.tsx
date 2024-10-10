import {
  Breadcrumps,
  Chips,
  FilterCheckboxGroup,
  FilterItem,
  FilterRadioGroup,
  FilterResetButton,
  FixedRangeFilter,
  Footer,
  Pagination,
  Popover,
  ProducersFilter,
  ProductCard,
  RangeFilter,
  SortFilter,
} from '@/components';
import React from 'react';
import styles from './RefrigeratorsPage.module.css';
import { addSpacesToPrice } from '@/utils/addSpacesToPrice';
import { Option } from '@/types/optionsModel';
import { refrigerators } from '@/data/products';
import Link from 'next/link';

const chipOptions: Option[] = [
  { name: 'Все', value: '/refrigerators/' },
  { name: 'Однокамерные', value: '/refrigerators/unilocular/' },
  { name: 'Однокамерные ATLANT', value: '/refrigerators/unilocular_atlant/' },
  {
    name: 'Однокамерные с морозильником',
    value: '/refrigerators/unilocular_fridges_with_freezers/',
  },
  { name: 'Двухкамерные', value: '/refrigerators/bicameral/' },
  { name: 'Двухкамерные ATLANT', value: '/refrigerators/bicameral_atlant/' },
  { name: 'Двухкамерные Bosch', value: '/refrigerators/bicameral_bosch/' },
  { name: 'Двухкамерные Indesit', value: '/refrigerators/bicameral_indesit/' },
  { name: 'Двухкамерные Samsung', value: '/refrigerators/bicameral_samsung/' },
  { name: 'Трехкамерные', value: '/refrigerators/3_compartments/' },
  { name: 'Инверторные', value: '/refrigerators/inverter/' },
  { name: 'No Frost', value: '/refrigerators/no_frost/' },
  { name: 'No Frost ATLANT', value: '/refrigerators/no_frost_atlant/' },
  { name: 'No Frost Bosch', value: '/refrigerators/no_frost_bosch/' },
  { name: 'No Frost Indesit', value: '/refrigerators/no_frost_indesit/' },
  { name: 'No Frost LG', value: '/refrigerators/no_frost_lg/' },
  { name: 'No Frost Samsung', value: '/refrigerators/no_frost_samsung/' },
  { name: 'Side-by-Side', value: '/refrigerators/12244/' },
  { name: 'Side-by-Side LG', value: '/refrigerators/side_by_side_lg/' },
  {
    name: 'Side-by-Side Samsung',
    value: '/refrigerators/side_by_side_samsung/',
  },
  { name: 'Узкие', value: '/refrigerators/narrow_fridges/' },
  { name: 'Шириной 70-75 см', value: '/refrigerators/70_cm_width/' },
  { name: 'Маленькие', value: '/refrigerators/small/' },
  {
    name: 'Маленькие с морозильником',
    value: '/refrigerators/mini_fridges_with_freezers/',
  },
  { name: 'Большие', value: '/refrigerators/big/' },
  { name: 'Для дачи', value: '/refrigerators/village_fridge/' },
  { name: 'Hitachi двухдверные', value: '/refrigerators/hitachi_2doors/' },
  {
    name: 'Двухдверные с морозильником',
    value: '/refrigerators/two_door_fridges_with_freezers/',
  },
  { name: 'Двухдверные Samsung', value: '/refrigerators/two_door_samsung/' },
  { name: 'LG InstaView Door-in-Door', value: '/refrigerators/lg_instaview/' },
  { name: 'Двухкомпрессорные', value: '/refrigerators/3027/' },
  {
    name: 'Двухкомпрессорные ATLANT',
    value: '/refrigerators/two_compressors/',
  },
  { name: 'С льдогенератором', value: '/refrigerators/with_icemaker/' },
  { name: 'Ретро', value: '/refrigerators/retro/' },
  { name: 'Стеклянные', value: '/refrigerators/glass_door_fridges/' },
  { name: 'Белые', value: '/refrigerators/136/' },
  { name: 'Бежевые', value: '/refrigerators/141/' },
  { name: 'Бежевые LG', value: '/refrigerators/beige_lg/' },
  { name: 'Черные', value: '/refrigerators/140/' },
  { name: 'Черные ATLANT', value: '/refrigerators/black_atlant/' },
  { name: 'Коричневые', value: '/refrigerators/brown_fridges/' },
  { name: 'Красные', value: '/refrigerators/red_fridges/' },
  { name: 'Немецкие', value: '/refrigerators/german_fridges/' },
  { name: 'Дешевые', value: '/refrigerators/cheap_refrigerators/' },
  {
    name: 'С морозильником ATLANT',
    value: '/refrigerators/with_freezer_atlant/',
  },
  { name: 'Дешевые ATLANT', value: '/refrigerators/cheap_atlant/' },
  {
    name: 'No Frost двухкамерные',
    value: '/refrigerators/bicameral_no_frost/',
  },
  {
    name: 'Двухкамерные с морозильником',
    value: '/refrigerators/bicameral_with_freezers/',
  },
  {
    name: 'Двухкамерные двухкомпрессорные',
    value: '/refrigerators/bicameral_two_compressors/',
  },
  { name: 'No Frost инверторные', value: '/refrigerators/inverter_no_frost/' },
  {
    name: 'No Frost с морозильником',
    value: '/refrigerators/no_frost_with_freezers/',
  },
  {
    name: 'No Frost двухкомпрессорные',
    value: '/refrigerators/no_frost_two_compressors/',
  },
  { name: 'Серые', value: '/refrigerators/grey_fridges/' },
  { name: 'Золотые', value: '/refrigerators/golden_fridges/' },
  { name: 'Зеленые', value: '/refrigerators/green_fridges/' },
  { name: 'Желтые', value: '/refrigerators/yellow_fridges/' },
  { name: 'Синие', value: '/refrigerators/blue_fridges/' },
  {
    name: 'Двухкамерные No Frost ATLANT',
    value: '/refrigerators/bicameral_no_frost_atlant/',
  },
  {
    name: 'Двухкамерные однокомпрессорные ATLANT',
    value: '/refrigerators/bicameral_compressor_atlant/',
  },
  {
    name: 'Двухкамерные двухкомпрессорные ATLANT',
    value: '/refrigerators/bicameral_two_compressors_atlant/',
  },
  {
    name: 'Двухкамерные с морозильником ATLANT',
    value: '/refrigerators/bicameral_freezer_atlant/',
  },
  { name: 'Серые ATLANT', value: '/refrigerators/gray_atlant/' },
  { name: 'No Frost Beko', value: '/refrigerators/no_frost_beko/' },
  {
    name: 'Двухкамерный No Frost Beko',
    value: '/refrigerators/bicameral_no_frost_beko/',
  },
  { name: 'Торговые ATLANT', value: '/refrigerators/commercial_atlant/' },
  {
    name: 'C морозильником Samsung',
    value: '/refrigerators/with_freezer_samsung/',
  },
  { name: 'Бежевые Samsung', value: '/refrigerators/beige_samsung/' },
  { name: 'Белые Samsung', value: '/refrigerators/white_samsung/' },
  { name: 'Черные Samsung', value: '/refrigerators/black_samsung/' },
  {
    name: 'C морозильником Liebherr',
    value: '/refrigerators/with_freezer_liebherr/',
  },
  { name: 'C морозильником LG', value: '/refrigerators/with_freezer_lg/' },
  { name: 'Бежевые Indesit', value: '/refrigerators/beige_indesit/' },
  { name: 'Белые Indesit', value: '/refrigerators/white_indesit/' },
  {
    name: 'С морозильником Indesit',
    value: '/refrigerators/with_freezer_indesit/',
  },
  {
    name: 'Однокомпрессорные Indesit',
    value: '/refrigerators/one_compressor_indesit/',
  },
  { name: 'Белые Hyundai', value: '/refrigerators/white_hyundai/' },
  {
    name: 'С морозильником Haier',
    value: '/refrigerators/with_freezer_haier/',
  },
  {
    name: 'С морозильником Bosch',
    value: '/refrigerators/with_freezer_bosch/',
  },
  { name: 'С морозильником Beko', value: '/refrigerators/with_freezer_beko/' },
  {
    name: 'Без морозильника ATLANT',
    value: '/refrigerators/no_freezer_atlant/',
  },
  { name: 'Side-by-Side ATLANT', value: '/refrigerators/side_by_side_atlant/' },
  {
    name: 'Однокомпрессорные ATLANT',
    value: '/refrigerators/one_compressor_atlant/',
  },
  { name: 'Бежевые ATLANT', value: '/refrigerators/beige_atlant/' },
  { name: 'Белые ATLANT', value: '/refrigerators/white_atlant/' },
  { name: 'Двухкамерные Stinol', value: '/refrigerators/bicameral_stinol/' },
  { name: 'Серые Samsung', value: '/refrigerators/gray_samsung/' },
  {
    name: 'Двухкамерные No Frost Samsung',
    value: '/refrigerators/bicameral_no_frost_samsung/',
  },
  { name: 'No Frost Liebherr', value: '/refrigerators/no_frost_liebherr/' },
  {
    name: 'Двухкамерные Liebherr',
    value: '/refrigerators/bicameral_liebherr/',
  },
  { name: 'Серые LG', value: '/refrigerators/gray_lg/' },
  { name: 'Doorcooling LG', value: '/refrigerators/doorcooling_lg/' },
  { name: 'Инверторные LG', value: '/refrigerators/inverter_lg/' },
  { name: 'Двухкамерные LG', value: '/refrigerators/bicameral_lg/' },
  {
    name: 'Высотой от 200 Indesit',
    value: '/refrigerators/height_200_cm_indesit/',
  },
  { name: 'Серые Indesit', value: '/refrigerators/gray_indesit/' },
  { name: 'Маленькие Indesit', value: '/refrigerators/small_indesit/' },
  { name: 'Двухкамерные Hyundai', value: '/refrigerators/bicameral_hyundai/' },
  { name: 'Инверторные Haier', value: '/refrigerators/inverter_haier/' },
  { name: 'No Frost Haier', value: '/refrigerators/no_frost_haier/' },
  { name: 'Двухкамерные Haier', value: '/refrigerators/bicameral_haier/' },
  { name: 'Двухкамерные Beko', value: '/refrigerators/bicameral_beko/' },
  { name: 'Высотой 50-55 см', value: '/refrigerators/50_55_cm_height/' },
  { name: 'Высотой 60-75 см', value: '/refrigerators/60_75_cm_height/' },
  { name: 'Высотой 80 см', value: '/refrigerators/80_cm_height/' },
  { name: 'Высотой 85 см', value: '/refrigerators/85_cm_height/' },
  { name: 'Высотой 90 см', value: '/refrigerators/90_cm_height/' },
  { name: 'Высотой 100 см', value: '/refrigerators/100_cm_height/' },
  { name: 'Высотой 110 см', value: '/refrigerators/110_cm_height/' },
  { name: 'Высотой 120-130 см', value: '/refrigerators/120_130_cm_height/' },
  { name: 'Высотой 140 см', value: '/refrigerators/140_cm_height/' },
  { name: 'Высотой 150 см', value: '/refrigerators/150_cm_height/' },
  { name: 'Высотой 160 см', value: '/refrigerators/160_cm_height/' },
  { name: 'Высотой 170 см', value: '/refrigerators/170_cm_height/' },
  { name: 'Высотой 180 см', value: '/refrigerators/180_cm_height/' },
  { name: 'Высотой 185-190 см', value: '/refrigerators/185_190_cm_height/' },
  { name: 'Высотой от 200 см', value: '/refrigerators/200_cm_height/' },
  { name: 'Глубиной 40-45 см', value: '/refrigerators/40_45_cm_depth/' },
  { name: 'Глубиной 50-55 см', value: '/refrigerators/50_55_cm_depth/' },
  { name: 'Глубиной 60 см', value: '/refrigerators/60_cm_depth/' },
  { name: 'Шириной 40-45 см', value: '/refrigerators/40_45_cm_width/' },
  { name: 'Шириной 50-55 см', value: '/refrigerators/50_55_cm_width/' },
  { name: 'Шириной 60-65 см', value: '/refrigerators/60_65_cm_width/' },
  { name: 'Шириной 80-85 см', value: '/refrigerators/80_85_cm_width/' },
  { name: 'Шириной 90 см', value: '/refrigerators/90_cm_width/' },
  { name: 'Маленькие ATLANT', value: '/refrigerators/small_atlant/' },
  {
    name: 'Шириной 50-55 ATLANT',
    value: '/refrigerators/width_50_55_cm_atlant/',
  },
  { name: 'Шириной 60 ATLANT', value: '/refrigerators/width_60_cm_atlant/' },
  { name: 'Шириной 70 ATLANT', value: '/refrigerators/width_70_cm_atlant/' },
  {
    name: 'Высотой 150-160 ATLANT',
    value: '/refrigerators/height_150_160_cm_atlant/',
  },
  {
    name: 'Высотой 170-176 ATLANT',
    value: '/refrigerators/height_170_176_cm_atlant/',
  },
  {
    name: 'Высотой 180-195 ATLANT',
    value: '/refrigerators/height_180_195_cm_atlant/',
  },
  {
    name: 'Высотой от 200 ATLANT',
    value: '/refrigerators/height_200_cm_atlant/',
  },
  { name: 'Холодильники однодверные', value: '/refrigerators/12242/' },
  { name: 'Холодильники двухдверные', value: '/refrigerators/12243/' },
  { name: 'Холодильники четырехдверные', value: '/refrigerators/34845/' },
  { name: 'French Door', value: '/refrigerators/12245/' },
  { name: 'Сигарные шкафы', value: '/refrigerators/205717/' },
  { name: 'Однокомпрессорные', value: '/refrigerators/3026/' },
];

const sortOptions: Option[] = [
  { name: 'Популярные', value: 'popular' },
  { name: 'Дешевые', value: 'cheap' },
  { name: 'Дорогие', value: 'expensive' },
  { name: 'Выгодные', value: 'profitable' },
];

const deliveryOptions: Option[] = [
  { name: 'Не важно', value: 'none' },
  { name: 'Сегодня или завтра', value: 'todayOrTomorrow' },
  { name: 'До 5 дней', value: '5Days' },
];
const discountTypes: Option[] = [
  {
    name: 'Товары со скидкой',
    value: 'discounts',
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

const typeOptions: Option[] = [
  { name: 'холодильник с морозильником', value: 'with_freezer' },
  { name: 'холодильник без морозильника', value: 'without_freezer' },
  { name: 'торговый холодильник', value: 'trade' },
];

const constructionOptions: Option[] = [
  { name: 'side-by-side', value: 'sideBySide' },
  { name: 'однодверный', value: 'oneDoor:' },
  { name: 'двухдверный', value: 'twoDoor' },
  { name: 'четырехдверный', value: 'fourDoor' },
  { name: 'french door', value: 'frenchDoor' },
];

const discountValues: Record<string, string> = {
  superprice: 'Суперцена',
  sale: 'Уцененный товар',
};

function RefrigeratorsPage() {
  const elementsInRow = 4;
  const IndexOfElementWithputBottomBorder =
    Math.floor((refrigerators.length - 1) / elementsInRow) * elementsInRow;
  const mockAllProductsCount = 140;
  const productsOnPage = 24;
  const currentPageNumber = 1;
  const pagesCount = Math.ceil(mockAllProductsCount / productsOnPage);
  const isPaginationShown = pagesCount > 1;
  return (
    <div className={styles.wrapper}>
      <Breadcrumps
        items={[
          { id: 0, name: 'Главная', link: '/' },
          { id: 1, name: 'Бытовая техника', link: '/kitchen' },
          { id: 2, name: 'Крупная техника для кухни', link: '/large_tech' },
        ]}
      />
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Холодильники</h1>
        <Link href="/info/howto/42" className={styles.titleLink}>
          Как выбрать холодильник
        </Link>
      </div>
      <div className={styles.chips}>
        <Chips options={chipOptions} />
      </div>
      <div className={styles.contentContainer}>
        <main className={styles.main}>
          <ul className={styles.products}>
            {refrigerators.map((refrigerator, idx) => (
              <div
                key={refrigerator.code}
                className={`${styles.product} ${idx === IndexOfElementWithputBottomBorder ? styles.noBottomBorder : ''}`}
              >
                <ProductCard
                  id={refrigerator.code}
                  currentPrice={refrigerator.price}
                  oldPrice={refrigerator.oldPrice ?? undefined}
                  productImg={refrigerator.picture}
                  productLink={refrigerator.url}
                  title={refrigerator.name}
                  type={refrigerator.name}
                  discount={refrigerator.promoDiscount}
                  discountType={discountValues[refrigerator.discountTypes[0]]}
                  hasLikeButton
                />
              </div>
            ))}
          </ul>
          <button className={styles.moreButton}>Следующая страница</button>
          {isPaginationShown && (
            <Pagination
              className={styles.pagination}
              pagesCount={pagesCount}
              currentPage={currentPageNumber}
            />
          )}
        </main>
        <aside>
          <FilterItem title="Сортировка" hasBottomBorder>
            <SortFilter options={sortOptions} />
          </FilterItem>
          <FilterItem title="Цена" hasBottomBorder>
            <RangeFilter
              unit="р."
              fromValuePlaceholder={addSpacesToPrice('420.00')}
              untilValuePlaceholder={addSpacesToPrice('10760.00')}
            />
          </FilterItem>
          <FilterItem title="Срок доставки" hasBottomBorder>
            <FilterRadioGroup name="delivery" options={deliveryOptions} />
          </FilterItem>
          <FilterItem title="Производитель" hasBottomBorder>
            <ProducersFilter />
          </FilterItem>
          <FilterItem title="Спецпредложения" hasBottomBorder>
            <FilterCheckboxGroup name="discount" options={discountTypes} />
          </FilterItem>
          <FilterItem
            title="Тип"
            hasBottomBorder
            popover={
              <Popover
                popoverClassName={styles.popover}
                title="Тип"
                body={
                  <>
                    <p>
                      <strong>Холодильник без морозильника</strong> представляет
                      собой одну холодильную камеру, где поддерживается
                      температура для хранения продуктов в диапазоне примерно от
                      +2 до +14°С. Такие модели чаще всего используется для дачи
                      или в комбинации с отдельными морозильниками.
                    </p>
                    <p>
                      <strong>Холодильник с морозильником</strong> —
                      универсальный, наиболее привычный и распространенный тип,
                      который включает в себя камеру для хранения продуктов при
                      низкой плюсовой температуре, так и камеру для заморозки
                      продуктов и хранения их в замороженном виде (при
                      температуре до -24°С).
                    </p>
                    <p>
                      <strong>Винный кулер</strong> — это устройство, которое
                      охлаждает бутылку до нужной температуры для подачи её к
                      столу, а также поддерживает необходимую температуру
                      напитка после открытия бутылки.
                    </p>
                  </>
                }
              />
            }
          >
            <FilterCheckboxGroup name="type" options={typeOptions} />
          </FilterItem>
          <FilterItem
            title="Конструкция"
            hasBottomBorder
            popover={
              <Popover
                popoverClassName={styles.popover}
                title="Конструкция"
                body={
                  <>
                    <p>
                      <strong>Однодверный холодильник</strong> – самая простая
                      конструкция холодильника с одной дверью. Но не очень
                      практичная в случае с комбинированными моделями, так как
                      морозильная камера отделена от холодильника обычно лишь
                      пластиковой дверцей. И при открывании двери в морозильнике
                      может повышаться температура, что приводит к необходимости
                      чаще его размораживать.
                    </p>
                    <p>
                      В <strong>двухдверном варианте</strong> конструкции
                      холодильная и морозильная камеры располагаются независимо
                      друг от друга.
                    </p>
                    <p>
                      <strong>Side-by-side</strong> – конструкция холодильника с
                      распашными дверьми, при этом может быть двух- или
                      четырехдверной. Варианты расположения камер с такой
                      конструкцией: холодильное и морозильные отделения сбоку
                      друг от друга или морозильная камера внизу. Такие
                      холодильники отличаются большой вместимостью,
                      практичностью, стильным внешним видом, но они достаточно
                      габаритны и занимают много пространства на кухне.
                    </p>
                    <p>
                      Конструкция типа <strong>French door</strong> или
                      «французская дверь» представляет собой верхнюю холодильную
                      камеру с распашными дверьми, а морозильное отделение – в
                      виде выдвижных ящиков, число которых варьируется от одного
                      до 4.
                    </p>
                  </>
                }
              />
            }
          >
            <FilterCheckboxGroup
              name="construction"
              options={constructionOptions}
            />
          </FilterItem>
          <FilterItem title="Высота" hasBottomBorder>
            <RangeFilter unit="см" />
          </FilterItem>
          <FilterItem
            title="Количество отделений морозильной камеры"
            hasBottomBorder
          >
            <FixedRangeFilter options={[1, 2, 3, 4, 5, 6, 7, 8]} />
          </FilterItem>
          <FilterResetButton />
        </aside>
      </div>
    </div>
  );
}

export default RefrigeratorsPage;