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
    <div className={styles.main}>
      <BannersSection />
      <PromoSection />
      <AdvantagesSection />
      <PopularSection />
      <ReviewSection />
    </div>
  );
}

export default HomePage;
