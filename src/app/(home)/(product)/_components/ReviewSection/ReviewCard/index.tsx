import React from 'react';
import styles from './ReviewCard.module.css';
import Image from 'next/image';
import { ReviewType } from '@/types/reviewsModel';
import { useMediaQuery } from '@/hooks';

type ReviewCardProps = Omit<ReviewType, 'id'>;

export const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  poster,
  viewsCount,
  likesCount,
}) => {
  const isTablet = useMediaQuery({ maxWidth: 992 });

  const { format } = new Intl.NumberFormat('ru', {
    notation: 'compact',
    maximumFractionDigits: 1,
  });
  return (
    <li className={styles.card}>
      <div className={styles.imgContainer}>
        <Image
          width={214}
          height={161}
          alt={title}
          src={poster}
          className={styles.img}
        />
      </div>
      <div className={styles.playIcon}>
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5001 12.8143C13.5001 12.0268 14.3682 11.5483 15.0341 11.9688L21.6614 16.1545C22.2827 16.5469 22.2827 17.4531 21.6614 17.8455L15.0341 22.0312C14.3682 22.4517 13.5001 21.9732 13.5001 21.1857V12.8143Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        <ul className={styles.details}>
          <li className={styles.detail}>
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.53082 11.2901C6.23736 9.8136 8.0331 7.20005 12 7.20005C15.9669 7.20005 17.7626 9.8136 18.4692 11.2901C18.686 11.7433 18.686 12.2568 18.4692 12.71C17.7626 14.1865 15.9669 16.8 12 16.8C8.0331 16.8 6.23736 14.1865 5.53082 12.71C5.31395 12.2568 5.31395 11.7433 5.53082 11.2901ZM12 5.80005C7.25431 5.80005 5.08178 8.98512 4.26797 10.6857C3.86824 11.5211 3.86824 12.479 4.26797 13.3144C5.08178 15.015 7.2543 18.2 12 18.2C16.7457 18.2 18.9182 15.015 19.732 13.3144C20.1318 12.479 20.1318 11.5211 19.732 10.6857C18.9182 8.98512 16.7457 5.80005 12 5.80005ZM13.6 12C13.6 12.8837 12.8837 13.6 12 13.6C11.1163 13.6 10.4 12.8837 10.4 12C10.4 11.1164 11.1163 10.4 12 10.4C12.8837 10.4 13.6 11.1164 13.6 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3432 10.3431 9.00005 12 9.00005C13.6569 9.00005 15 10.3432 15 12Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className={styles.detailValue}>
              {format(viewsCount)} {isTablet ? '' : 'посмотрели'}
            </span>
          </li>
          <li className={styles.detail}>
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7582 9.01183C18.3767 8.65403 17.8946 8.56667 17.4042 8.56667H14.5244V6.23199C14.5244 5.16776 14.2351 4.39252 13.6608 3.92921C12.7554 3.20444 11.5272 3.6127 11.4727 3.63105C11.2631 3.70444 10.9177 3.8948 10.9177 4.13333V6.8375C10.9177 7.65402 10.7751 8.26495 10.0667 8.82C9.7162 9.09565 9.28345 9.43415 8.84856 9.55312C8.65992 9.31917 8.38326 9.17238 8.07306 9.17238H6.03539C5.4653 9.17238 5 9.68156 5 10.3054V17.1679C5 17.7917 5.4653 18.3009 6.03539 18.3009H8.08145C8.33296 18.3009 8.5677 18.2 8.74376 18.0349C9.12942 18.4477 9.6534 18.7 10.2193 18.7H12.1266H16.2263C16.8299 18.7 17.3623 18.5394 17.7689 18.2413C18.2887 17.856 18.6114 17.2459 18.7037 16.466L19.4792 11.1908C19.6007 10.3742 19.3241 9.53936 18.7582 9.01183ZM8.16667 16.706H6.26667V10.4667H8.16667C8.16993 11.046 8.16667 16.706 8.16667 16.706ZM18.2109 11.1908L17.4133 16.1667C17.0333 17.4333 16.4647 17.4333 15.7667 17.4333L12.1266 17.4333H10.6175C9.43333 17.4333 9.43333 16.1667 9.43333 16.1667V10.4667C10.0133 10.2853 10.213 10.2149 10.7 9.83333C11.6851 9.06727 12.1266 8.021 12.1266 6.8375V4.60812C12.4033 4.57601 12.7847 4.58977 13.0656 4.81454C13.2742 4.98151 13.2333 5.53932 13.2333 6.23199C13.2333 8.56667 13.2333 9.83333 13.8667 9.83333L17.4042 9.81918C18.2557 9.81918 18.3488 10.2152 18.2109 11.1908Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className={styles.detailValue}>
              {format(likesCount)} {isTablet ? '' : 'понравилось'}
            </span>
          </li>
        </ul>
      </div>
    </li>
  );
};
