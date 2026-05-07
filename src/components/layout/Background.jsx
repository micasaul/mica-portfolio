import Bg from '../../assets/icons/bg.svg?react'
import styles from './Background.module.css'

export function Background() {
  return (
    <div className={styles.background}>
      {[...Array(8)].map((_, i) => (
        <Bg
          key={i}
          className={styles.col}
        />
      ))}
    </div>
  )
}