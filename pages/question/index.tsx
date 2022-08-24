import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Question.module.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import { testData } from '../../helpers/testData';
import { colors } from '../../helpers/colors';
import { TestDataContent } from '../../ts-utils/interfaces';
import Loader from '../../components/Loader';
import { updatePoints } from '../../helpers/updateScore';
import { getFinalScore } from '../../helpers/getFinalScore';
import Router from 'next/router'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<TestDataContent>>([])
  const [questionNb, setQuestionNb] = useState(0);
  const [points, setPoints] = useState({
    "West Coast Swing": 0,
    "Lindy Hop": 0,
    "Salsa": 0,
    "Brazilian Zouk": 0,
    "Fusion": 0,
    "Blues": 0,
    "Argentine Tango": 0
  })
  const [progress, setProgress] = useState(5)

  useEffect(() => {
    setData([testData[questionNb]])
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionNb])

  const handleClick = (event:any) => {
    event.preventDefault()
    const newQuestionNb = questionNb + 1
    if (newQuestionNb !== testData.length) setQuestionNb(newQuestionNb)
    const newScore = updatePoints(data[0], event.target.value, points)
    setPoints(newScore)
    if (newQuestionNb === testData.length) Router.push({
      pathname: '/result',
      query: {dance: getFinalScore(newScore)},
    })
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>La La Dance</title>
        <meta name="description" content="Find the social dance style that suits you best!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {loading ? (<Loader />) : (
          <>
            <h1 className={styles.question} style={{ color: colors[questionNb] }}>{data[0].question}</h1>
            <Container>
              {data[0].answers.map(answer => (
                <Row key={answer}>
                  <button className={styles.answer} onClick={(e) => handleClick(e)} style={{ color: colors[questionNb], borderColor: colors[questionNb] }} value={answer}>{answer}</button>
                </Row>
              ))
              }
            </Container>
          </>
        )}
      </main>
    </div>
  )
}

export default Home