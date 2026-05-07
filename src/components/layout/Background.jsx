import Bg from '../../assets/icons/bg.svg?react'
import styles from './Background.module.css'

export function Background() {
  return (
    <div className={styles.background}>
      <Bg className={styles.col} />
      <Bg className={styles.col} />
      <Bg className={styles.col} />
      <Bg className={styles.col} />
      <Bg className={styles.col} />
      <Bg className={styles.col} />
      <Bg className={styles.col} />
      <Bg className={styles.col} />
    </div>
  )
}