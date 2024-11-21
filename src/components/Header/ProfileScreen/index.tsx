'use client';
import React from 'react';
import styles from './ProfileScreen.module.css';
import Image from 'next/image';
import { ProfileMenu } from './ProfileMenu';
import LocalityIcon from '@icons/localityIcon.svg';
import { useLocation } from '@/hooks';
import { useSession } from 'next-auth/react';

type ProfileScreenProps = {
  onLocationButtonClick: () => void;
  onLoginButtonClick: () => void;
};

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  onLocationButtonClick,
  onLoginButtonClick,
}) => {
  const { location } = useLocation();
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.imgContainer}>
          <Image src={'images/anonym.svg'} alt="Аноним" fill />
        </div>
        {session ? (
          <div>{session.user?.email}</div>
        ) : (
          <button className={styles.loginButton} onClick={onLoginButtonClick}>
            Войти
          </button>
        )}
      </div>
      <ProfileMenu isLoggedIn={!!session} />
      <div className={styles.locality}>
        <span className={styles.localityText}>Населенный пункт</span>
        <button
          className={styles.localityButton}
          onClick={onLocationButtonClick}
        >
          <LocalityIcon />
          {location && (
            <span>
              {location.type}. {location.name}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
