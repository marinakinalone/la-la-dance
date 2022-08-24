/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader';

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })
  console.log(router.query.dance)

  return (
    <div className={styles.container}>
      <Head>
        <title>La La Dance</title>
        <meta name="description" content="Find the social dance style that suits you best!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {loading? (
          <Loader />
        ):(
          <section className={styles.result}>
            <h1>Your social dance style is:</h1>
            <p>{router.query.dance}</p>
            <Link href={'/'}><a className={styles.main__link}>take the test again</a></Link>
          </section>
        )}
      </main>

      <footer className={styles.footer}>
        <p className="copyright">Made while dancing by <a href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">MKS</a> | <a href="../license.txt" target="_blank" rel="noopener noreferrer">license</a></p>
      </footer>
    </div>
  )
}

export default Home
