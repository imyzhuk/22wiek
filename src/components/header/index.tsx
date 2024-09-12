'use client';

import React from 'react';
import { CircleButton } from '@/components';
import { promos } from '@/data/promo';
import './Header.css';
import { SearchBar } from './SearchBar';
import { LocalityButton } from './LocalityButton';
import BasketIcon from '@Images/basketIcon.svg';
import AccountIcon from '@Images/accountIcon.svg';
import LikeIcon from '@Images/heartIcon.svg';
import { CatalogPopup } from './CatalogPopup';
import { useOffsetLeft, useOutsideClick } from '@/hooks';
import PartlyPayIcon from '@Images/partlyPayIcon.svg';
import { MoreButton } from './MoreButton';
import LifeIcon from '@Images/life.svg';
import HomePhoneIcon from '@Images/home.svg';
import TelegramIcon from '@Images/telegram.svg';
import MessageIcon from '@Images/message.svg';
import EnvelopeIcon from '@Images/envelopeIcon.svg';
import PhoneIcon from '@Images/phoneIcon.svg';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  const {
    ref: catalogRef,
    isActive: isCatalogActive,
    setIsActive: setIsCatalogActive,
  } = useOutsideClick<HTMLDivElement>(false);
  const {
    ref: recommendationsListRef,
    isActive: isRecommendationsListActive,
    setIsActive: setIsRecommendationsListActive,
  } = useOutsideClick<HTMLUListElement>(false);
  const {
    ref: contactsListRef,
    isActive: isContactsListActive,
    setIsActive: setIsContactsListActive,
  } = useOutsideClick<HTMLUListElement>(false);
  const [moreRecommendationsButtonRef, moreRecommendationsButtonOffsetLeft] =
    useOffsetLeft<HTMLButtonElement>();
  const [moreContactsButtonRef, moreContactsButtonOffsetLeft] =
    useOffsetLeft<HTMLButtonElement>();
  return (
    <header className="header">
      <div className="firstLine">
        <div className="rowWrapper">
          <div className="firstRow">
            <LocalityButton />
            <ul className="firstRowMenu">
              <li className="firstRowMenuItem">
                <a
                  href="/special_offers/partly_pay.html"
                  className="firstRowMenuLink firstRowMenuPayLink"
                >
                  <PartlyPayIcon className="firstRowMenuIcon" />
                  <span>Оплата частями</span>
                </a>
              </li>
              <li className="firstRowMenuItem">
                <a
                  href="/special_offers/bonus.html"
                  className="firstRowMenuLink"
                >
                  Бонусная программа
                </a>
              </li>
              <li className="firstRowMenuItem">
                <MoreButton
                  ref={moreRecommendationsButtonRef}
                  isActive={isRecommendationsListActive}
                  onClick={() =>
                    setIsRecommendationsListActive((isActive) => !isActive)
                  }
                />
              </li>
            </ul>
            <ul className="communications">
              <li className="communicationItem">
                <a
                  href="https://www.viber.com/21vek.by"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="communicationItemBox"
                >
                  <div
                    className="communicationIcon communicationIconViber"
                    role="presentation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18.9682 4.85125C18.4965 4.41605 16.5906 3.03242 12.3451 3.01362C12.3451 3.01362 7.33862 2.71172 4.89804 4.95037C3.53947 6.30922 3.06155 8.29751 3.01114 10.7626C2.96073 13.2277 2.89551 17.8474 7.34859 19.1H7.35287L7.35002 21.0114C7.35002 21.0114 7.32154 21.7852 7.83107 21.943C8.44741 22.1344 8.80913 21.5463 9.39755 20.9123C9.72053 20.5642 10.1666 20.053 10.5026 19.6622C13.5482 19.9185 15.8905 19.3327 16.1565 19.2461C16.7714 19.0467 20.251 18.6007 20.8169 13.9816C21.4011 9.22032 20.5344 6.20868 18.9682 4.85125ZM19.4843 13.6401C19.0067 17.497 16.1844 17.7394 15.6641 17.9063C15.4428 17.9775 13.3855 18.4893 10.7986 18.3204C10.7986 18.3204 8.87093 20.646 8.26883 21.2506C8.17484 21.3452 8.06433 21.3833 7.99057 21.3645C7.88689 21.3392 7.85841 21.2164 7.85955 21.037C7.86126 20.7807 7.87607 17.8608 7.87607 17.8608C4.1091 16.8149 4.3287 12.883 4.37142 10.8241C4.41414 8.76518 4.80092 7.07851 5.94987 5.94409C8.01421 4.07427 12.2668 4.35368 12.2668 4.35368C15.858 4.36934 17.5789 5.45079 17.9779 5.81307C19.3029 6.94749 19.9779 9.66207 19.4843 13.6389V13.6401Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.4181 9.15881C12.425 9.02639 12.5379 8.92464 12.6703 8.93155C13.1658 8.95739 13.578 9.10736 13.8716 9.4109C14.164 9.71328 14.3074 10.1357 14.3325 10.643C14.3391 10.7755 14.2371 10.8882 14.1046 10.8947C13.9722 10.9013 13.8595 10.7993 13.8529 10.6668C13.8314 10.2325 13.7122 9.9369 13.5264 9.74474C13.3417 9.55375 13.0598 9.43271 12.6453 9.41109C12.5129 9.40418 12.4111 9.29123 12.4181 9.15881Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0541 7.86529C12.0638 7.73304 12.1789 7.63367 12.3111 7.64335C13.3194 7.71714 14.1309 8.06165 14.7221 8.70694L14.7222 8.70703C15.3069 9.34596 15.5848 10.1408 15.5646 11.0731C15.5618 11.2057 15.452 11.3108 15.3194 11.3079C15.1868 11.3051 15.0817 11.1953 15.0845 11.0627C15.1023 10.2405 14.8606 9.56952 14.3679 9.03122C13.8768 8.49515 13.1902 8.18917 12.2761 8.12227C12.1438 8.11259 12.0444 7.99753 12.0541 7.86529Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6303 6.63564C11.6312 6.50304 11.7394 6.3963 11.872 6.39722C13.2654 6.40693 14.4432 6.87079 15.3888 7.79263C16.3423 8.72217 16.8139 9.98766 16.8258 11.5594C16.8268 11.692 16.7202 11.8003 16.5876 11.8013C16.455 11.8023 16.3467 11.6956 16.3457 11.563C16.3345 10.0903 15.8963 8.95798 15.0536 8.13648C14.203 7.30727 13.1469 6.88631 11.8687 6.87741C11.7361 6.87649 11.6293 6.76824 11.6303 6.63564Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M12.7054 13.8708C12.7054 13.8708 13.0429 13.8993 13.2246 13.6754L13.5789 13.2297C13.7498 13.0086 14.1622 12.8677 14.5661 13.0927C14.8688 13.2653 15.1626 13.4529 15.4465 13.6549C15.7145 13.852 16.265 14.31 16.265 14.31C16.5265 14.5307 16.5869 14.8548 16.4089 15.1966L16.4074 15.2037C16.2114 15.5436 15.9625 15.8501 15.6701 16.1117C15.6666 16.1134 15.6666 16.1151 15.6635 16.1168C15.4095 16.3291 15.1599 16.4498 14.9147 16.4788C14.8786 16.4852 14.842 16.4874 14.8054 16.4857C14.6973 16.4867 14.5897 16.4702 14.4869 16.4367L14.479 16.425C14.1013 16.3185 13.4707 16.0519 12.4206 15.4726C11.8129 15.1413 11.2344 14.7591 10.6912 14.3302C10.4189 14.1153 10.1592 13.885 9.91337 13.6404L9.88717 13.6142L9.86097 13.588L9.83476 13.5618C9.82593 13.5532 9.81739 13.5444 9.80856 13.5356C9.56393 13.2897 9.33361 13.03 9.11874 12.7577C8.68986 12.2146 8.3077 11.6362 7.97634 11.0286C7.39703 9.97821 7.13044 9.3482 7.02392 8.96997L7.01224 8.96199C6.97885 8.85919 6.96241 8.75165 6.96354 8.64357C6.96155 8.60698 6.96375 8.57029 6.97009 8.5342C7.00066 8.28945 7.12152 8.03966 7.33266 7.78485C7.33437 7.78172 7.33608 7.78172 7.33779 7.7783C7.59933 7.48588 7.90585 7.23706 8.24578 7.0412L8.2529 7.03949C8.59468 6.86148 8.9188 6.92186 9.13925 7.1819C9.14095 7.1836 9.59808 7.73244 9.79432 8.00046C9.99632 8.28463 10.184 8.57873 10.3565 8.88167C10.5815 9.28526 10.4406 9.69852 10.2195 9.86884L9.77381 10.2232C9.54881 10.4049 9.57843 10.7424 9.57843 10.7424C9.57843 10.7424 10.2386 13.2411 12.7054 13.8708Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span>Viber</span>
                </a>
              </li>
              <li className="communicationItem">
                <div className="communicationItemBox textCursor__ecphd">
                  <div
                    className="communicationIcon communicationIconA1"
                    role="presentation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18.9675 3V13.3226L19.4837 12.8065V3.51613L18.9675 3Z"
                        fill="#0B0B0B"
                      ></path>
                      <path
                        d="M14.8386 7.64505H15.8709L16.9031 7.12892V6.61279L14.8386 7.64505Z"
                        fill="#0B0C0C"
                      ></path>
                      <path
                        d="M18.9677 3H17.4193C17.4193 3 17.1597 3.66169 16.9031 4.03226C16.3295 4.86087 14.8386 5.58065 14.8386 5.58065V7.64516L16.9031 6.6129V12.8065L18.9677 13.3226V3Z"
                        fill="#363636"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 18.5L9.67739 4.54834L12.1426 5.04139C12.2139 5.05563 12.2718 5.10737 12.2939 5.17655L16.3036 17.7067C16.3449 17.8358 16.2486 17.9677 16.1131 17.9677H13.8064L12.7742 15.387H9.16126L8.17434 18.3478C8.14724 18.4291 8.07134 18.4841 7.98563 18.4846L5 18.5ZM11.036 9.24658L9.76514 13.0593C9.72197 13.1888 9.81836 13.3225 9.95487 13.3225H12.4967C12.6332 13.3225 12.7296 13.1888 12.6864 13.0593L11.4155 9.24658C11.3547 9.06424 11.0968 9.06424 11.036 9.24658Z"
                        fill="#FF1917"
                      ></path>
                      <path
                        d="M8.64516 5.06447L4.09188 18.2184C4.04691 18.3483 4.14339 18.4838 4.28087 18.4838H5L9.67742 4.54834L8.64516 5.06447Z"
                        fill="#990707"
                      ></path>
                      <path
                        d="M11.7419 15.387L12.7239 17.8419C12.7543 17.9178 12.8278 17.9676 12.9096 17.9676H13.8065L12.7742 15.387H11.7419Z"
                        fill="#990707"
                      ></path>
                      <path
                        d="M10.7097 10.2259L11.742 13.3227H12.4967C12.6333 13.3227 12.7297 13.1889 12.6865 13.0594L11.4156 9.2467C11.3548 9.06436 11.0969 9.06436 11.0361 9.2467L10.7097 10.2259Z"
                        fill="#990707"
                      ></path>
                    </svg>
                  </div>
                  <span>+375 29 302 10 21</span>
                </div>
              </li>
              <li className="communicationItem">
                <MoreButton
                  ref={moreContactsButtonRef}
                  isActive={isContactsListActive}
                  onClick={() =>
                    setIsContactsListActive((isActive) => !isActive)
                  }
                />
              </li>
            </ul>
            <div className="workingTime">
              <div className="workingTimeIcon">
                <div className="" role="presentation">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 12.5C19 16.0899 16.0899 19 12.5 19C8.91015 19 6 16.0899 6 12.5C6 8.91015 8.91015 6 12.5 6C16.0899 6 19 8.91015 19 12.5ZM20 12.5C20 16.6421 16.6421 20 12.5 20C8.35786 20 5 16.6421 5 12.5C5 8.35786 8.35786 5 12.5 5C16.6421 5 20 8.35786 20 12.5ZM13 9H12C12 10.6667 12 12.3333 12 14H15V13H13V9Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="workingTimeText">
                контакт-центр
                <div>
                  с&nbsp;<time>8:00</time>&nbsp;до&nbsp;<time>22:00</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondLine">
        <div className="rowWrapper">
          <div className="secondRow">
            <a className="logoLink" href="/" title="На главную страницу">
              <svg
                width="125"
                height="42"
                viewBox="0 0 125 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M122.036 16.9164H106.625C105.545 16.9164 104.671 16.0422 104.671 14.9618V14.9127C104.671 13.8323 105.545 12.9582 106.625 12.9582H110.446C111.526 12.9582 112.4 12.084 112.4 11.0036V10.9545C112.4 9.87414 111.526 9 110.446 9H4.66535C2.09204 9 0 11.092 0 13.6653V27.9462C0 30.5588 2.1215 32.6803 4.7341 32.6803H114.316C115.396 32.6803 116.27 31.8062 116.27 30.7258V30.6865C116.27 29.6061 115.396 28.732 114.316 28.732H110.505C109.424 28.732 108.55 27.8578 108.55 26.7774C108.55 25.697 107.676 24.8229 106.596 24.8229H98.9152C97.8348 24.8229 96.9606 23.9488 96.9606 22.8684V22.8291C96.9606 21.7487 97.8348 20.8745 98.9152 20.8745H122.045C123.126 20.8745 124 20.0004 124 18.92V18.8807C124 17.7905 123.116 16.9164 122.036 16.9164Z"
                  fill="url(#Logo-0.13536597600567113)"
                ></path>
                <path
                  d="M18.1515 16.3958H19.7033C19.8408 16.3958 19.9489 16.5038 19.9489 16.6413V28.2605C19.9489 28.4275 20.0864 28.565 20.2533 28.565H23.2883C23.4552 28.565 23.5927 28.4275 23.5927 28.2605V14.6672C23.5927 13.852 22.9249 13.1841 22.1096 13.1841H18.1613C17.9943 13.1841 17.8568 13.3216 17.8568 13.4886V16.1012C17.8568 16.2583 17.9845 16.3958 18.1515 16.3958Z"
                  fill="white"
                ></path>
                <path
                  d="M33.7472 17.8101L31.2722 24.4006C31.2623 24.43 31.2427 24.4398 31.2132 24.4398C31.1838 24.4398 31.1641 24.4202 31.1543 24.4006L28.6104 17.7905C28.3944 17.2208 27.8444 16.8378 27.2256 16.8378H24.8978C24.6817 16.8378 24.5442 17.0539 24.613 17.2503L28.9444 28.3686C28.9935 28.4864 29.1015 28.5552 29.2292 28.5552H32.8829C33.0008 28.5552 33.1186 28.4766 33.1579 28.3686L37.6956 17.2503C37.7742 17.0539 37.6268 16.8378 37.4206 16.8378H35.1321C34.5232 16.8476 33.9633 17.2307 33.7472 17.8101Z"
                  fill="white"
                ></path>
                <path
                  d="M57.8291 17.4074L54.4995 21.5817C54.4799 21.6013 54.4504 21.621 54.4209 21.621C54.4013 21.621 54.3817 21.6013 54.3817 21.5817V13.4296C54.3817 13.2921 54.2736 13.1841 54.1361 13.1841H51.1306C50.9931 13.1841 50.8851 13.2921 50.8851 13.4296V28.3194C50.8851 28.457 50.9931 28.565 51.1306 28.565H54.1361C54.2736 28.565 54.3817 28.457 54.3817 28.3194V23.4577C54.3817 23.438 54.4013 23.4184 54.4209 23.4184C54.4406 23.4184 54.4602 23.4282 54.47 23.4478L57.7603 27.9659C58.0354 28.3489 58.4872 28.5748 58.9586 28.5748H62.023C62.19 28.5748 62.2784 28.3882 62.1802 28.2605L58.0452 22.6425C57.9764 22.5541 57.9862 22.4264 58.055 22.338L62.2685 17.1914C62.3766 17.0637 62.2784 16.8673 62.1114 16.8673H58.9782C58.5461 16.8476 58.1139 17.0539 57.8291 17.4074Z"
                  fill="white"
                ></path>
                <path
                  d="M90.2041 17.8101L87.7781 24.2631C87.7683 24.2925 87.7486 24.3023 87.7192 24.3023C87.6897 24.3023 87.6701 24.2827 87.6602 24.2631L85.0673 17.7807C84.8414 17.2208 84.3012 16.8476 83.6922 16.8476H81.3547C81.1386 16.8476 81.0011 17.0637 81.0796 17.2601L85.7254 28.9579C85.745 29.0168 85.745 29.0856 85.7254 29.1445L84.3994 32.2678C84.311 32.4642 84.4583 32.6901 84.6744 32.6901H87.7781C87.9058 32.6901 88.0138 32.6116 88.0531 32.5035L94.1623 17.2699C94.2408 17.0735 94.0935 16.8574 93.8873 16.8574H91.589C90.9702 16.8476 90.4202 17.2307 90.2041 17.8101Z"
                  fill="white"
                ></path>
                <path
                  d="M43.4219 16.4547C39.9057 16.4547 37.0574 19.1361 37.0574 22.7014C37.0574 26.2667 39.9057 28.948 43.4219 28.948C45.9854 28.948 48.1855 27.5239 49.1971 25.3631C49.2953 25.1667 49.148 24.9309 48.9221 24.9309H45.73C45.6416 24.9309 45.5532 24.9702 45.4943 25.039C45.0425 25.5988 44.2077 25.8738 43.4121 25.8738C42.037 25.8738 41.0156 25.0586 40.5834 23.9095H46.2113H48.5391H48.8239C49.3248 23.9095 49.7373 23.5166 49.7668 23.0157C49.7766 22.9077 49.7766 22.7996 49.7766 22.6818C49.7963 19.1557 46.9381 16.4547 43.4219 16.4547ZM40.7406 21.4737C40.6718 21.4737 40.6227 21.4049 40.6424 21.3362C41.0942 20.2558 42.0862 19.5093 43.4121 19.5093C44.797 19.5093 45.897 20.2165 46.2211 21.346C46.2408 21.4049 46.1917 21.4737 46.1229 21.4737H40.7406Z"
                  fill="white"
                ></path>
                <path
                  d="M65.0017 28.565H65.0508C66.0428 28.565 66.8482 27.7596 66.8482 26.7676C66.8482 25.7756 66.0428 24.9702 65.0508 24.9702H65.0017C64.0097 24.9702 63.2043 25.7756 63.2043 26.7676C63.2142 27.7596 64.0097 28.565 65.0017 28.565Z"
                  fill="white"
                ></path>
                <path
                  d="M75.333 16.386C74.0561 16.4646 72.8874 16.9556 72.0623 17.7021C72.023 17.7316 71.9739 17.7512 71.9248 17.7512V13.4886C71.9248 13.3216 71.7873 13.1841 71.6203 13.1841H68.7033C68.5363 13.1841 68.3988 13.3216 68.3988 13.4886V28.2605C68.3988 28.4275 68.5363 28.565 68.7033 28.565H71.5418C71.7087 28.565 71.8462 28.4275 71.8462 28.2605V27.6221C71.9052 27.6221 71.9739 27.6516 72.0132 27.6909C72.8088 28.4275 74.1151 28.8891 75.333 28.9382C78.7804 29.0757 81.3537 26.2372 81.3537 22.6621C81.3537 19.1066 78.8197 16.1601 75.333 16.386ZM74.8419 25.864C73.182 25.864 71.8266 24.43 71.8266 22.6621C71.8266 20.8942 73.1722 19.4602 74.8419 19.4602C76.5116 19.4602 77.8572 20.8942 77.8572 22.6621C77.8474 24.43 76.5018 25.864 74.8419 25.864Z"
                  fill="white"
                ></path>
                <path
                  d="M17.0213 17.4467C17.0213 15.0208 15.3025 12.693 11.472 12.7028C6.31557 12.7028 5.90305 16.769 5.89323 17.928C5.89323 18.095 6.03073 18.2325 6.19771 18.2325H9.24246C9.38978 18.2325 9.51747 18.1244 9.53711 17.9771C9.62551 17.3682 9.98891 15.9047 11.4425 15.9047C12.8765 15.9047 13.348 16.8673 13.348 17.5941C13.348 18.6057 12.9649 19.1361 10.7943 21.179L7.22899 24.3416C6.35485 25.1176 5.85394 26.2176 5.85394 27.3864V28.2212C5.85394 28.3882 5.99145 28.5257 6.15842 28.5257H15.607C16.3731 28.5257 17.0017 27.9069 17.0017 27.131V25.3533C17.0017 25.2158 16.8936 25.1077 16.7561 25.1077H11.5702C11.4818 25.1077 11.4327 24.9899 11.5113 24.9309L13.5444 23.222C15.4596 21.4737 17.0213 19.8334 17.0213 17.4467Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="Logo-0.13536597600567113"
                    x1="-5.70822"
                    y1="23.2924"
                    x2="127.227"
                    y2="18.2967"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#990099"></stop>
                    <stop offset="0.2873" stopColor="#BB0088"></stop>
                    <stop offset="0.5525" stopColor="#D9006D"></stop>
                    <stop offset="1" stopColor="#F20061"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <div className="catalogContainer">
              <CircleButton onClick={() => setIsCatalogActive((prev) => !prev)}>
                <div className="catalogIcon catalogIconAnimated">
                  <div className="square">
                    <div className="oneSquarePart"></div>
                  </div>
                  <div className="square">
                    <div className="twoSquarePart"></div>
                  </div>
                  <div className="square">
                    <div className="threeSquarePart"></div>
                  </div>
                  <div className="square">
                    <div className="fourSquarePart"></div>
                  </div>
                </div>
                <span className="catalogText">Каталог товаров</span>
              </CircleButton>
            </div>
            <SearchBar />
            <div className="circleButtonContainer">
              <a href="/aside">
                <CircleButton>
                  <LikeIcon />
                </CircleButton>
              </a>
            </div>
            <div className="circleButtonContainer">
              <CircleButton>
                <span className="accountWrapper">
                  <AccountIcon />
                  <span className="accountText">Аккаунт</span>
                </span>
              </CircleButton>
            </div>
            <div className="circleButtonContainer">
              <a href="/order">
                <CircleButton>
                  <span className="orderWrapper">
                    <BasketIcon className="orderIcon" />
                    <span>Корзина</span>
                  </span>
                </CircleButton>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="thirdLine">
        <div className="rowWrapper">
          <svg
            className="thirdLineGradient"
            width="400"
            height="42"
            viewBox="0 0 400 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.8"
              d="M400 0H0C3.55463 15.6607 17.4804 30.0498 38.85 42H361.15C382.52 30.0498 396.445 15.6433 400 0Z"
              fill="url(#paint0_radial_11412_1560)"
            ></path>
            <defs>
              <radialGradient
                id="paint0_radial_11412_1560"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(199.99 -7.97808) scale(200.897 83.6857)"
              >
                <stop stopColor="#FF9534"></stop>
                <stop
                  offset="0.182"
                  stopColor="#FF9135"
                  stopOpacity="0.818"
                ></stop>
                <stop
                  offset="0.3452"
                  stopColor="#FF8739"
                  stopOpacity="0.6548"
                ></stop>
                <stop
                  offset="0.421875"
                  stopColor="#FF7E3C"
                  stopOpacity="0.578125"
                ></stop>
                <stop
                  offset="0.5014"
                  stopColor="#FF743F"
                  stopOpacity="0.4986"
                ></stop>
                <stop
                  offset="0.6531"
                  stopColor="#FF5A48"
                  stopOpacity="0.3469"
                ></stop>
                <stop
                  offset="0.8016"
                  stopColor="#F2364F"
                  stopOpacity="0.1984"
                ></stop>
                <stop
                  offset="0.9458"
                  stopColor="#F2105B"
                  stopOpacity="0.0542"
                ></stop>
                <stop offset="1" stopColor="#F20061" stopOpacity="0"></stop>
              </radialGradient>
            </defs>
          </svg>
          <div className="thirdRow">
            <ul className="promoList">
              <li className="promoItem fixedPromoItem">
                <a href="/special_offers/promo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    className="promoIcon"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.04099 0L0 5.90576L5.13933 11L11.1803 5.13935L10.7746 0.405735L6.04099 0ZM7.0473 4.10399C7.48744 4.54412 8.20105 4.54412 8.64119 4.10399C9.08133 3.66385 9.08133 2.95024 8.64119 2.5101C8.20105 2.06996 7.48744 2.06996 7.0473 2.5101C6.60716 2.95024 6.60716 3.66385 7.0473 4.10399Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Все акции
                </a>
              </li>
              {promos.map((promo) => (
                <li className="promoItem" key={promo.url}>
                  <a href={promo.url}>{promo.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {isCatalogActive && <CatalogPopup ref={catalogRef} />}
      {isRecommendationsListActive && (
        <ul
          className="moreButtonList"
          ref={recommendationsListRef}
          style={{ left: `${moreRecommendationsButtonOffsetLeft + 15}px` }}
        >
          <li className="moreButtonItem">
            <a className="moreButtonLink" href="/not-found">
              Оплата
            </a>
          </li>
          <li className="moreButtonItem">
            <a className="moreButtonLink" href="/not-found">
              Доставка
            </a>
          </li>
          <li className="moreButtonItem">
            <a className="moreButtonLink" href="/not-found">
              Самовывоз
            </a>
          </li>
        </ul>
      )}
      {isContactsListActive && (
        <ul
          className="moreButtonList"
          ref={contactsListRef}
          style={{ left: `${moreContactsButtonOffsetLeft + 15}px` }}
        >
          <li className="moreButtonItem">
            <div className="moreButtonLine">
              <LifeIcon className="moreButtonIcon" />
              <span>+375 25 502 10 21</span>
            </div>
          </li>
          <li className="moreButtonItem">
            <div className="moreButtonLine">
              <HomePhoneIcon className="moreButtonIcon" />
              <span>+375 17 302 10 21</span>
            </div>
          </li>
          <li className="moreButtonItem">
            <a className="moreButtonLink" href="https://t.me/e21vekbot">
              <TelegramIcon className="moreButtonIcon telegramIcon" />
              <span>Telegram</span>
            </a>
          </li>
          <li className="moreButtonItem">
            <a className="moreButtonLink" href="mailto:21@21vek.by">
              <EnvelopeIcon className="moreButtonIcon" />
              <span>Почта</span>
            </a>
          </li>
          <li className="moreButtonItem">
            <button className="moreButtonLink">
              <PhoneIcon className="moreButtonIcon" />
              <span>Заказать звонок</span>
            </button>
          </li>
          <li className="moreButtonItem">
            <button className="moreButtonLink">
              <MessageIcon className="moreButtonIcon" />
              <span>Написать нам</span>
            </button>
          </li>
          <li className="moreButtonItem moreButtonItemLast">
            <a
              className="moreButtonLink moreButtonLinkLast"
              href="/services/contacts.html"
            >
              <span>Контакты</span>
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};
