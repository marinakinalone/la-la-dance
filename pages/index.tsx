/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
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
        <figure>
          <Image className={styles.main__img} src="/illus_lalaland.jpg" width={650} height={447} alt="extract from the movie La La Land where a woman with a yellow dress dances with a man with a black and white costume in front of a night-time landscape with blue and purple colors"></Image>
          <figcaption className={styles.main__figcaption}>source: wallpaperflare.com</figcaption>
        </figure> 
        <section className={styles.main__cta}>
            <p>Find the social dance style that suits you best!</p>
            <Link href={'/question'}><a className={styles.main__link}>I want to dance</a></Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className="copyright">Made while dancing by <a href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">MKS</a> | <a href="../license.txt" target="_blank" rel="noopener noreferrer">license</a></p>
      </footer>
    </div>
  )
}

export default Home
