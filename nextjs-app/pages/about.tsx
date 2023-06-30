import { NextPage } from 'next';
import { Menu } from '../components/Menu';
import styles from '../styles/About.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>
          About Page
        </h1>
        <p className={styles.description}>
          This is the about page of our Next.js application.
        </p>
      </main>
    </div>
  );
};

export default About;