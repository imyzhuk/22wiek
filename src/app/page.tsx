import styles from './HomePage.module.css';
import {
  AdvantagesSection,
  BannersSection,
  PopularSection,
  PromoSection,
  ReviewSection,
} from '@/components';

function HomePage() {
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

export default HomePage;
