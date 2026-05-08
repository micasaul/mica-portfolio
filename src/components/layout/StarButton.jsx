import { useState } from 'react'
import Estrella from '../../assets/icons/estrella.svg?react'
import styles from './StarButton.module.css'

const links = {
  es: [
    { label: 'CV — español', href: '/cv-es.pdf' },
    { label: 'CV — english', href: '/cv-en.pdf' },
    { label: 'GitHub', href: 'https://github.com/micasaul' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/micaela-saül-8b4b8622b' },
  ],
  en: [
    { label: 'CV — español', href: '/cv-es.pdf' },
    { label: 'CV — english', href: '/cv-en.pdf' },
    { label: 'GitHub', href: 'https://github.com/micasaul' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/micaela-saül-8b4b8622b' },
  ],
}

export function StarButton({ lang }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.container}>
      <div className={`${styles.pills} ${open ? styles.open : ''}`}>
        {links[lang].map(l => (
          <a
            key={l.label}
            className={styles.pill}
            href={l.href}
            target="_blank"
            rel="noreferrer"
          >
            {l.label}
          </a>
        ))}
      </div>

      <button
        className={`${styles.starBtn} ${open ? styles.active : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Links de contacto"
      >
        <Estrella style={{ width: 30, height: 30 }} />
      </button>
    </div>
  )
}