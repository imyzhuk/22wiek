import Image from 'next/image';
import styles from './page.module.css';
import {
  AdvantagesSection,
  BannersSection,
  PopularSection,
  PromoSection,
  ReviewSection,
} from '@/components';

export default function Home() {
  return (
    <main className={styles.main}>
      <BannersSection />
      <PromoSection />
      <AdvantagesSection />
      <PopularSection />
      <ReviewSection />
    </main>
  );
}
