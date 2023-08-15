import Image from "next/image";
import styles from "./hero.module.css";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/ahmed.png"
          alt="Ahmed's pic"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ahmed</h1>
      <p>I blog about web development - frontend to be specefic.</p>
    </section>
  );
};
export default Hero;
