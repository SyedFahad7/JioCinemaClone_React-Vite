import styles from "./featured.module.css";
import FeaturedShow from "../featured-show/FeaturedShow";
const Featured = () => {
  return (
    <>
      <div className={styles.featured}>
        <h1 className={styles.title}>Hot Right Now </h1>
        <div className={styles.shows}>
          <FeaturedShow />
          <FeaturedShow />
          <FeaturedShow />
        </div>
      </div>
    </>
  );
};
export default Featured;
