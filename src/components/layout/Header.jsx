import Sol from '../../assets/icons/sol.svg?react'
import Luna from '../../assets/icons/luna.svg?react'
import styles from './Header.module.css'

export function Header({ theme, toggleTheme, lang, toggleLang }) {
  return (
    <header className={styles.header}>
      <span className={styles.folderName}>~/mica/</span>

      <div className={styles.right}>
        <button className={styles.langToggle} onClick={toggleLang}>
          <span className={lang === 'es' ? styles.langActive : styles.langInactive}>ES</span>
          {' / '}
          <span className={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
        </button>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${styles.tabSol} ${theme === 'light' ? styles.tabActive : ''}`}
            onClick={() => theme !== 'light' && toggleTheme()}
            aria-label="Modo claro"
          >
            <Sol style={{ width: 20, height: 20 }} />
          </button>

          <button
            className={`${styles.tab} ${styles.tabLuna} ${theme === 'dark' ? styles.tabActive : ''}`}
            onClick={() => theme !== 'dark' && toggleTheme()}
            aria-label="Modo oscuro"
          >
            <Luna style={{ width: 20, height: 20 }} />
          </button>
        </div>
      </div>
    </header>
  )
}