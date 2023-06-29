import { NextPage } from 'next'
import Head from 'next/head'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Menu />
        <h1 className={styles.title}>
          Welcome to our Next.js App
        </h1>

        <p className={styles.description}>
          This is a modern web application built using the Next.js framework.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/nextjs.svg" alt="Next.js Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home