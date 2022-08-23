import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Question.module.scss'
import Link from 'next/link';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>La La Dance</title>
        <meta name="description" content="Find the social dance style that suits you best!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>question</h1>
        <Container></Container>
      
      </main>
    </div>
  )
}

export default Home