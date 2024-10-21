import {
  Prisma,
  RefrigeratorConstruction,
  RefrigeratorType,
} from '@prisma/client';

const takeRandomEl = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const generateRefrigerators = (
  count: number = 1,
): Prisma.RefrigeratorCreateWithoutProductInput[] => {
  return [...Array(count)].map(() => ({
    type: takeRandomEl<RefrigeratorType>([
      'WithFreezer',
      'WithoutFreezer',
      'Commercial',
    ]),
    construction: takeRandomEl<RefrigeratorConstruction>([
      'TwoDoors',
      'FourDoors',
      'SideBySide',
      'FrenchDoor',
      'SingleDoor',
    ]),
    cameras: takeRandomEl([
      ['морозильная', 'холодильная'],
      ['морозильная'],
      ['холодильная'],
    ]),
    freezerLocation: takeRandomEl(['снизу', 'сверху']),
    freezerSectionsCount: takeRandomEl([1, 2, 3, 4, 5]),
    color: takeRandomEl(['белый', 'черный', 'серебристый', 'красный', 'синий']),
    noFrostSystem: takeRandomEl([true, false]),
    energyClass: takeRandomEl(['A', 'A+', 'B', 'C', 'D', 'E', 'F', 'G']),
    compressorsCount: takeRandomEl([1, 2, 3]),
    noiseLevel: takeRandomEl([34, 49, 41, 52]),
    camerasCount: takeRandomEl([1, 2, 3]),
    totalVolume: takeRandomEl([163, 174, 185, 200]),
    refrigeratorVolume: takeRandomEl([121, 132, 130, 139]),
    freezerVolume: takeRandomEl([42, 43, 44, 45]),
    multifunctionalArea: takeRandomEl([true, false]),
    dispenser: takeRandomEl([true, false]),
    minibar: takeRandomEl([true, false]),
    hingesLocation: takeRandomEl(['снизу', 'сверху']),
    lighting: takeRandomEl([true, false]),
    annualElectricityConsumption: takeRandomEl([261, 305, 342, 384]),
    inverterTechnology: takeRandomEl([true, false]),
    climateClass: takeRandomEl(['N', 'SN', 'ST']),
    autonomousColdStorage: takeRandomEl([14, 15, 16, 17]),
    energySavingMode: takeRandomEl([true, false]),
    controlType: takeRandomEl(['электронное', 'механическое']),
    controlUnitLocation: takeRandomEl(['внутри', 'снаружи']),
    independentTemperatureControl: takeRandomEl([true, false]),
    vacationMode: takeRandomEl([true, false]),
    childLock: takeRandomEl([true, false]),
    freshnessZone: takeRandomEl([true, false]),
    shelvesCount: takeRandomEl([2, 4, 6]),
    shelfMaterial: takeRandomEl(['стекло', 'металл', 'пластик']),
    doorBalconiesCount: takeRandomEl([1, 2, 3, 4]),
    doorBalconiesMaterial: takeRandomEl(['стекло', 'металл', 'пластик']),
    superCooling: takeRandomEl([true, false]),
    forcedAirCirculation: takeRandomEl([true, false]),
    builtinOzonizer: takeRandomEl([true, false]),
    antibacterialProtection: takeRandomEl([true, false]),
    included: takeRandomEl([
      'лоток для яиц',
      'лоток для овощей',
      'лоток для фруктов',
    ]),
    freezingPower: takeRandomEl([1, 2, 3]),
    height: takeRandomEl([142.5, 150, 160, 170]),
    width: takeRandomEl([54.5, 60, 65, 70]),
    depth: takeRandomEl([60, 65, 70, 75]),
    weight: takeRandomEl([50, 60, 70, 80]),
    originCountry: 'Беларусь',
    producerInfo: 'ЗАО "Очередное"',
    description:
      'Система управления.\nСветодиодный дисплей с сенсорными кнопками электронного блока управления вынесен на дверь холодильного отделения на уровне глаз, что удобно не только для управления работой холодильника, но и контроля заданных параметров.\nДве емкости Slim Space.\nВ емкостях Slim Space хранят крабовые палочки, сосиски, мороженое. Если снять одну из емкостей, то в другой можно разместить упаковку побольше.',
    guarantee: 'Гарантия 3 года',
    retrodesign: false,
  }));
};
