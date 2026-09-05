import Bg from '../../assets/icons/bg.svg?react'
import styles from './Background.module.css'

export function Background() {
  return (
    <div className={styles.background}>
      <div className={`${styles.row} ${styles.desktopRow}`}>
        {[...Array(10)].map((_, i) => (
          <Bg key={i} className={styles.col} />
        ))}
      </div>
      <div className={`${styles.row} ${styles.desktopRow}`}>
        {[...Array(10)].map((_, i) => (
          <Bg key={`b${i}`} className={styles.col} />
        ))}
      </div>
      <div className={`${styles.row} ${styles.rowMobile}`}>
        {[...Array(7)].map((_, i) => (
          <Bg key={`mobile-${i}`} className={styles.col} />
        ))}
      </div>
      <div className={`${styles.row} ${styles.rowMobile}`}>
        {[...Array(7)].map((_, i) => (
          <Bg key={`mobile-b${i}`} className={styles.col} />
        ))}
      </div>
    </div>
  )
}