import Head from 'next/head'
import styles from '../styles/Home.module.css'

const CARDS = [{ title: 'Titulo', description: 'Descrição' }]

const Home = () => {
  const renderCards = () =>
    CARDS.map((card) => (
      <div className={styles.card} key={card.title}>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </div>
    ))

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Redux Toolkit</h1>

        <div className={styles.cardsWrapper}>
          {renderCards()}
        </div>
      </main>
    </div>
  )
}

export default Home
