'use client';

import React, { useState } from 'react';
import styles from './Review.module.css';
import CommentArrow from '@icons/commentArrow.svg';
import { Comment } from '..';

type ReviewProps = {
  advantages: string | null;
  disadvantages: string | null;
  summary: string;
  rating: number;
  createdAt: Date;
  comment: string | null;
  user: {
    name: string | null;
    image: string;
  };
};

export const Review: React.FC<ReviewProps> = ({
  comment,
  createdAt,
  ...props
}) => {
  const [isModeratorCommentShown, setIsModeratorCommentShown] =
    useState<boolean>(false);
  const toggleModeratorComment = () => {
    setIsModeratorCommentShown((prev) => !prev);
  };
  const date = new Intl.DateTimeFormat('ru', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
    .format(createdAt)
    .split(' 20')
    .join(', 20')
    .slice(0, -3);
  return (
    <div>
      <Comment
        {...props}
        createdAt={date}
        isCommentShown={isModeratorCommentShown}
        onShownComment={comment ? toggleModeratorComment : undefined}
      />
      {isModeratorCommentShown && (
        <div className={styles.moderatorWrapper}>
          <CommentArrow className={styles.arrow} />
          <Comment
            comment={comment}
            user={{ name: 'Сотрудник 21vek.by', image: '/images/21vekAvatar.svg' }}
          />
        </div>
      )}
    </div>
  );
};
