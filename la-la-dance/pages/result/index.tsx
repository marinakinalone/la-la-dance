/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Result.module.scss'
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>La La Dance</title>
        <meta name="description" content="Find the social dance style that suits you best!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.header__title}>La La Dance</h1>
        <p className={styles.header__quote}>"Dance, dance, otherwise we are lost" (Pina Bausch)</p>
      </header>

      <main className={styles.main}>
        <h1>result</h1>
      </main>

      <footer className={styles.footer}>
        <p className="copyright">Made while dancing by <a href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">MKS</a> | <a href="../license.txt" target="_blank" rel="noopener noreferrer">license</a></p>
      </footer>
    </div>
  )
}

export default Home
