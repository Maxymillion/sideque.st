import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Sidequest</h1>
        <p>Oops, it seems you{"\'"}re too early!</p>
      </div>
    </main>
  )
}
