import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
          <Image
              src="/sidequest_square.svg"
              alt="Sidequest Logo"
              className={styles.logo}
              width={110}
              height={33}
              priority
          />
        <p>It seems you{"\'"}re a little too early. There is nothing here yet, but coming quite soon.</p>
      </div>
    </main>
  )
}
