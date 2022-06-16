import Head from 'next/head'
import { useSelector } from 'react-redux'
import { useDispatch } from '../store'
import { CountActions } from '../store/countSlice'
import { getPosts, getUsers, reset } from '../store/postsSlice'
import { asyncIncrement } from '../store/slices/count/asyncAction'
import { findUser } from '../store/slices/users/asyncActions'
import { TRootState } from '../store/types'
import styles from '../styles/Home.module.css'

const Home = () => {
  const dispatch = useDispatch()

  const countStore = useSelector((state: TRootState) => state.count)
  const postsStore = useSelector((state: TRootState) => state.posts)
  const usersStore = useSelector((state: TRootState) => state.users)

  console.log(usersStore)

  const renderCards = () =>
    postsStore.posts.map((card) => (
      <div className={styles.card} key={card.id}>
        <h2>{card.title}</h2>
        <p>{card.body}</p>
      </div>
    ))

  const renderCount = () => (
    <div>
      {countStore.count}

    <button
      className={styles.button} onClick={() => dispatch(CountActions.increment(5))}>Increment
    </button>
    <button
      className={styles.button} onClick={() => dispatch(CountActions.decrement(1))}>Decrement
    </button>
    <button
      className={styles.button} onClick={() => dispatch(asyncIncrement(5))}>Async Increment
    </button>
  </div>
  )

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Redux Toolkit</h1>

      <main className={styles.main}>
            {renderCount()}
          <div>
          <button
            className={styles.button} onClick={() => dispatch(reset())}>Reset</button>
          <button
            className={styles.button} onClick={() => dispatch(getPosts())}>Get Posts</button>
          </div>
          <button
            className={styles.button} onClick={() => dispatch(getUsers())}>Get Users</button>

          <button
            className={styles.button} onClick={() => dispatch(findUser(5))}>Find User</button>

        <div className={styles.cardsWrapper}>
          {renderCards()}
        </div>
      </main>
    </div>
  )
}

export default Home
