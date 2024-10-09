'use client';

import React from 'react';
import styles from './Attributes.module.css';
import { Popover } from '@/components';
import { Attribute } from '..';
import { Refrigerator } from '@prisma/client';
import ArrowDownIcon from '@Images/arrowDownIcon.svg';
import ArrowUpIcon from '@Images/arrowUpIcon.svg';

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
              value={type}
              link="/"
              popover={
                <Popover
                  title="Конструкция"
                  popoverClassName={styles.popover}
                  popoverButtonClassName={styles.popoverButton}
                  body={
                    <>
                      <p>
                        <strong>Однодверный холодильник</strong> – самая простая
                        конструкция холодильника с одной дверью. Но не очень
                        практичная в случае с комбинированными моделями, так как
                        морозильная камера отделена от холодильника обычно лишь
                        пластиковой дверцей. И при открывании двери в
                        морозильнике может повышаться температура, что приводит
                        к необходимости чаще его размораживать.
                      </p>
                      <p>
                        В <strong>двухдверном варианте</strong> конструкции
                        холодильная и морозильная камеры располагаются
                        независимо друг от друга.
                      </p>
                      <p>
                        <strong>Side-by-side</strong> – конструкция холодильника
                        с распашными дверьми, при этом может быть двух- или
                        четырехдверной. Варианты расположения камер с такой
                        конструкцией: холодильное и морозильные отделения сбоку
                        друг от друга или морозильная камера внизу. Такие
                        холодильники отличаются большой вместимостью,
                        практичностью, стильным внешним видом, но они достаточно
                        габаритны и занимают много пространства на кухне.
                      </p>
                      <p>
                        Конструкция типа <strong>French door</strong> или
                        «французская дверь» представляет собой верхнюю
                        холодильную камеру с распашными дверьми, а морозильное
                        отделение – в виде выдвижных ящиков, число которых
                        варьируется от одного до 4.
                      </p>
                    </>
                  }
                />
              }
            />
            <Attribute name="Конструкция" value={construction} link="/" />
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
