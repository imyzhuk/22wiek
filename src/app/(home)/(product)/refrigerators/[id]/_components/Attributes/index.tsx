'use client';

import React from 'react';
import styles from './Attributes.module.css';
import { Popover } from '@/components';
import { Attribute } from '..';
import {
  Refrigerator,
  RefrigeratorConstruction,
  RefrigeratorType,
} from '@prisma/client';
import ArrowDownIcon from '@icons/arrowDownIcon.svg';
import ArrowUpIcon from '@icons/arrowUpIcon.svg';

type AttributesProps = Omit<
  Refrigerator,
  | 'id'
  | 'productId'
  | 'additionalLinks'
  | 'freezingPower'
  | 'height'
  | 'width'
  | 'depth'
  | 'weight'
> & {
  freezingPower: number;
  height: number;
  width: number;
  depth: number;
  weight: number;
};

type RefrigeratorTypeMap = {
  [K in RefrigeratorType]: string;
};

type RefrigeratorConstructionMap = {
  [K in RefrigeratorConstruction]: string;
};

const refrigeratorTypeMapper: RefrigeratorTypeMap = {
  WithFreezer: 'холодильник с морозильником',
  WithoutFreezer: 'холодильник без морозильника',
  Commercial: 'торговый холодильник',
};

const refrigeratorConstructionMapper: RefrigeratorConstructionMap = {
  SideBySide: 'side-by-side',
  SingleDoor: 'однодверный',
  TwoDoors: 'двухдверный',
  FourDoors: 'четырехдверный',
  FrenchDoor: 'french door',
};

export const Attributes: React.FC<AttributesProps> = ({
  type,
  construction,
  cameras,
  freezerLocation,
  freezerSectionsCount,
  color,
  noFrostSystem,
  energyClass,
  compressorsCount,
  noiseLevel,
  retrodesign,
  camerasCount,
  totalVolume,
  refrigeratorVolume,
  freezerVolume,
  multifunctionalArea,
  dispenser,
  minibar,
  hingesLocation,
  lighting,

  annualElectricityConsumption,
  inverterTechnology,
  climateClass,
  autonomousColdStorage,
  energySavingMode,

  controlType,
  controlUnitLocation,
  independentTemperatureControl,
  vacationMode,
  childLock,

  freshnessZone,
  shelvesCount,
  shelfMaterial,
  doorBalconiesCount,
  doorBalconiesMaterial,
  superCooling,
  forcedAirCirculation,
  builtinOzonizer,
  antibacterialProtection,
  included,

  freezingPower,

  height,
  width,
  depth,
  weight,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const toggleAttributes = () => setShowAll((showAll) => !showAll);
  return (
    <div>
      <div
        id="attributes"
        className={`${styles.container} ${!showAll ? styles.hidden : ''}`}
      >
        <div className={styles.column}>
          <div className={styles.group}>
            <h2 className={styles.name}>Основные характеристики</h2>
            <Attribute
              name="Тип"
              value={refrigeratorTypeMapper[type]}
              link="/"
              popover={
                <Popover
                  popoverClassName={styles.popover}
                  popoverButtonClassName={styles.popoverButton}
                  title="Тип"
                  body={
                    <>
                      <p>
                        <strong>Холодильник без морозильника</strong>{' '}
                        представляет собой одну холодильную камеру, где
                        поддерживается температура для хранения продуктов в
                        диапазоне примерно от +2 до +14°С. Такие модели чаще
                        всего используется для дачи или в комбинации с
                        отдельными морозильниками.
                      </p>
                      <p>
                        <strong>Холодильник с морозильником</strong> —
                        универсальный, наиболее привычный и распространенный
                        тип, который включает в себя камеру для хранения
                        продуктов при низкой плюсовой температуре, так и камеру
                        для заморозки продуктов и хранения их в замороженном
                        виде (при температуре до -24°С).
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
            />
            <Attribute
              name="Конструкция"
              value={refrigeratorConstructionMapper[construction]}
              link="/"
            />
            <Attribute name="Камеры" value={cameras.join(', ')} />
            <Attribute
              name="Расположение морозильной камеры"
              value={freezerLocation}
            />
            <Attribute
              name="Количество отделений морозильной камеры"
              value={freezerSectionsCount}
            />
            <Attribute name="Цвет" value={color} link="/" />
            <Attribute name="Система No Frost" value={noFrostSystem} />
            <Attribute name="Класс энергопотребления" value={energyClass} />
            <Attribute
              name="Количество компрессоров"
              value={compressorsCount}
              link="/"
            />
            <Attribute name="Уровень шума" value={`${noiseLevel} дБ`} />
          </div>
          <div className={styles.group}>
            <h2 className={styles.name}>Конструкция и вместимость</h2>
            <Attribute name="Ретродизайн" value={retrodesign} />
            <Attribute name="Количество камер" value={camerasCount} />
            <Attribute name="Общий полезный объем" value={totalVolume} />
            <Attribute
              name="Полезный объем холодильника"
              value={refrigeratorVolume}
            />
            <Attribute
              name="Полезный объем морозильника"
              value={freezerVolume}
            />
            <Attribute
              name="Мультифункциональная зона"
              value={multifunctionalArea}
            />
            <Attribute name="Диспенсер" value={dispenser} />
            <Attribute name="Мини-бар" value={minibar} />
            <Attribute name="Расположение петель" value={hingesLocation} />
            <Attribute name="Освещение" value={lighting} />
          </div>
          <div className={styles.group}>
            <h2 className={styles.name}>
              Производительность и энергоэффективность
            </h2>
            <Attribute
              name="Годовой расход электроэнергии"
              value={`${annualElectricityConsumption} кВт*ч`}
            />
            <Attribute
              name="Инверторная технология (компрессор)"
              value={inverterTechnology}
            />
            <Attribute name="Климатический класс" value={climateClass} />
            <Attribute
              name="Автономное сохранение холода"
              value={autonomousColdStorage}
            />
            <Attribute
              name="Энергосберегающий режим"
              value={energySavingMode}
            />
          </div>
          <div className={styles.group}>
            <h2 className={styles.name}>Управление и индикация</h2>
            <Attribute name="Тип управления" value={controlType} link="/" />
            <Attribute
              name="Расположение блока управления"
              value={controlUnitLocation}
            />
            <Attribute
              name="Независимая регулировка температуры"
              value={independentTemperatureControl}
            />
            <Attribute name="Режим «Отпуск»" value={vacationMode} />
            <Attribute name="Защита от детей" value={childLock} />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.group}>
            <h2 className={styles.name}>Холодильная камера</h2>
            <Attribute name="Зона свежести" value={freshnessZone} />
            <Attribute name="Количество полок" value={shelvesCount} />
            <Attribute name="Материал полок" value={shelfMaterial} />
            <Attribute
              name="Количество дверных балконов"
              value={doorBalconiesCount}
            />
            <Attribute
              name="Материал дверных балконов"
              value={doorBalconiesMaterial}
            />
            <Attribute name="Суперохлаждение" value={superCooling} />
            <Attribute
              name="Принудительная циркуляция воздуха"
              value={forcedAirCirculation}
            />
            <Attribute name="Встроенный озонатор" value={builtinOzonizer} />
            <Attribute
              name="Антибактериальная защита"
              value={antibacterialProtection}
            />
            <Attribute name="В комплекте" value={included} />
          </div>
          <div className={styles.group}>
            <h2 className={styles.name}>Морозильная камера</h2>
            <Attribute
              name="Мощность замораживания"
              value={`${freezingPower} кг/сутки`}
            />
          </div>
          <div className={styles.group}>
            <h2 className={styles.name}>Размеры и вес</h2>
            <Attribute name="Высота" value={`${height} см`} />
            <Attribute name="Ширина" value={`${width} см`} />
            <Attribute name="Глубина" value={`${depth} см`} />
            <Attribute name="Вес" value={`${weight} кг`} />
          </div>
        </div>
      </div>
      <button onClick={toggleAttributes} className={styles.showButton}>
        {showAll ? <ArrowUpIcon /> : <ArrowDownIcon />}
        {showAll ? 'Скрыть' : 'Показать'} все характеристики
      </button>
    </div>
  );
};
