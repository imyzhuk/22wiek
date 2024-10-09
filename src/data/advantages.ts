import { AdvantageType } from '@/types/advantagesModel';
import pickupPointsPic from '@Images/pickupPoints.png';
import deliveryPic from '@Images/delivery.png';
import installmentPaymentPic from '@Images/installmentPayment.png';
import bonusProgramPic from '@Images/bonusProgram.png';
import giftCertificatesPic from '@Images/giftCertificates.png';

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
