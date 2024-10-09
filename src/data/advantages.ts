import { AdvantageType } from '@/types/advantagesModel';
import pickupPointsPic from '@images/pickupPoints.png';
import deliveryPic from '@images/delivery.png';
import installmentPaymentPic from '@images/installmentPayment.png';
import bonusProgramPic from '@images/bonusProgram.png';
import giftCertificatesPic from '@images/giftCertificates.png';

export const advantages: AdvantageType[] = [
  {
    id: 0,
    title: 'Более 100 пунктов самовывоза',
    link: '/self_delivery/',
    desc: 'Получите заказ в кратчайшие сроки',
    color: 'blue',
    bgImg: 'pickupPointsBg.png',
    img: pickupPointsPic,
  },
  {
    id: 1,
    title: 'Доставка в любую точку Беларуси',
    link: '/services/delivery.html',
    desc: 'Заказывайте товары прямо к себе домой',
    color: 'pink',
    bgImg: 'deliveryBg.png',
    img: deliveryPic,
  },
  {
    id: 2,
    title: 'Оплата частями',
    link: '/special_offers/partly_pay.html',
    desc: 'Покупайте больше сейчас – платите частями',
    color: 'yellow',
    bgImg: 'installmentPaymentBg.png',
    img: installmentPaymentPic,
  },
  {
    id: 3,
    title: 'Бонусная программа',
    link: '/special_offers/bonus.html',
    desc: 'Накапливайте бонусные баллы и оплачивайте ими покупки',
    color: 'green',
    bgImg: 'bonusProgramBg.png',
    img: bonusProgramPic,
  },
  {
    id: 4,
    title: 'Подарочные сертификаты',
    link: '/special_offers/gift_certificate.html',
    desc: 'Подарите сертификаты вашим близким',
    color: 'purple',
    bgImg: 'giftCertificatesBg.png',
    img: giftCertificatesPic,
  },
];
