import Sol from '../../assets/icons/sol.svg?react'
import Luna from '../../assets/icons/luna.svg?react'
import styles from './StarButton.module.css'

export function StarButton({ theme, toggleTheme }) {
  const Icon = theme === 'light' ? Luna : Sol

  return (
    <div className={styles.container}>
      <button
        className={styles.starBtn}
        onClick={toggleTheme}
        aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
      >
        <Icon
          style={{
            width: theme === 'dark' ? 35 : 30,
            height: theme === 'dark' ? 35 : 30,
          }}
        />
      </button>
    </div>
  )
}