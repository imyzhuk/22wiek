import styles from './HomePage.module.css';
import {
  AdvantagesSection,
  BannersSection,
  PopularSection,
  PromoSection,
  ReviewSection,
} from './_components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
