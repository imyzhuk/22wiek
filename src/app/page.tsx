import { Footer } from '@/components';
import styles from './HomePage.module.css';
import {
  AdvantagesSection,
  BannersSection,
  PopularSection,
  PromoSection,
  ReviewSection,
} from './_components';

function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <BannersSection />
        <PromoSection />
        <AdvantagesSection />
        <PopularSection />
        <ReviewSection />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
