import { useEffect, useState } from 'react'
import styles from './Header.module.css'

const sectionIds = ['hero', 'projects', 'skills', 'education']
const sectionLabels = {
  es: ['inicio', 'proyectos', 'habilidades', 'educación'],
  en: ['home', 'projects', 'skills', 'education'],
}

export function Header({ lang, toggleLang }) {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    function updateCurrentSection() {
      const scrollPosition = window.scrollY + 48
      const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean)

      let nextSection = 0
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        if (sectionTop <= scrollPosition) nextSection = index
      })

      setCurrentSection(previousSection => (
        previousSection === nextSection ? previousSection : nextSection
      ))
    }

    updateCurrentSection()
    window.addEventListener('scroll', updateCurrentSection, { passive: true })
    window.addEventListener('resize', updateCurrentSection)

    return () => {
      window.removeEventListener('scroll', updateCurrentSection)
      window.removeEventListener('resize', updateCurrentSection)
    }
  }, [])

  function moveToSection(index) {
    document.getElementById(sectionIds[index])?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    setCurrentSection(index)
  }

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
          {sectionIds.map((sectionId, index) => (
            <div key={sectionId} className={styles.tabWrap}>
              <button
                className={`${styles.tab} ${currentSection === index ? styles.tabActive : ''}`}
                onClick={() => moveToSection(index)}
                aria-label={sectionLabels[lang][index]}
                aria-current={currentSection === index ? 'page' : undefined}
              >
                {sectionLabels[lang][index]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}