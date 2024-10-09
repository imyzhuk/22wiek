import React from 'react';
import styles from './Comment.module.css';
import ArrowDownIcon from '@Images/arrowDownIcon.svg';
import ArrowUpIcon from '@Images/arrowUpIcon.svg';
import { Rating } from '../Rating';

type CommentProps = {
  advantages?: string | null;
  disadvantages?: string | null;
  summary?: string;
  rating?: number;
  createdAt?: string;
  user: {
    name: string | null;
    image: string;
  };
  comment?: string | null;
  onShownComment?: () => void;
  isCommentShown?: boolean;
};

export const Comment: React.FC<CommentProps> = ({
  advantages,
  createdAt,
  disadvantages,
  rating,
  summary,
  user,
  comment,
  onShownComment,
  isCommentShown,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={user.image} alt={user.name || ''} className={styles.image} />
        <div className={styles.nameWrapper}>
          <div className={styles.name}>{user.name}</div>
          {rating && (
            <div className={styles.info}>
              <Rating rating={rating} />
              <span className={styles.date}>{createdAt}</span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.body}>
        {advantages && (
          <>
            <div className={styles.title}>Достоинства</div>
            <div>{advantages}</div>
          </>
        )}
        {disadvantages && (
          <>
            <div className={styles.title}>Недостатки</div>
            <div>{disadvantages}</div>
          </>
        )}
        {summary && (
          <>
            <div className={styles.title}>Резюме</div>
            <div>{summary}</div>
          </>
        )}
        {comment && <div className={styles.moderatorComment}>{comment}</div>}
        {onShownComment && (
          <button onClick={onShownComment} className={styles.button}>
            {isCommentShown ? <ArrowUpIcon /> : <ArrowDownIcon />}
            <span>Комментарий</span>
          </button>
        )}
      </div>
    </div>
  );
};
