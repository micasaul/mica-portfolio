import Presentacion from '../../assets/icons/presentacion.svg?react'
import styles from './Hero.module.css'

const content = {
  es: {
    greeting: 'hola, soy',
    subtitle: 'Desarrolladora Web · Frontend & UX/UI · Entre Ríos, AR',
    bio: 'Analista de Sistemas orientada al desarrollo web, con especial interés en frontend y UX/UI. Me gusta construir proyectos completos, desde la idea y el diseño hasta la implementación. Creo que los detalles importan: una interfaz clara, una buena experiencia y decisiones de diseño con intención no solo hacen que un proyecto se vea mejor, también hacen que funcione mejor.',
    cvEs: 'CV — español',
    cvEn: 'CV — english',
  },
  en: {
    greeting: "hi, i'm",
    subtitle: 'Web Developer · Frontend & UX/UI · Entre Ríos, AR',
    bio: "Systems Analyst focused on web development, with a particular interest in frontend and UX/UI. I enjoy building complete projects — from the idea and design all the way through implementation. I believe details matter: a clear interface, a good experience, and intentional design decisions don't just make a project look better — they make it work better.",
    cvEs: 'CV — español',
    cvEn: 'CV — english',
  },
}

export function Hero({ lang }) {
  const t = content[lang]

  return (
    <section id="hero" className={styles.section}>
      <Presentacion className={styles.blob} />
      <div className={styles.content}>
        <span className={styles.greeting}>{t.greeting}</span>
        <h1 className={styles.name}>
          Micaela Saül
        </h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
        <p className={styles.bio}>{t.bio}</p>

        <div className={styles.links}>
          <a className={styles.btnPrimary} href="/cv-es.pdf" target="_blank">{t.cvEs}</a>
          <a className={styles.btnPrimary} href="/cv-en.pdf" target="_blank">{t.cvEn}</a>
          <a className={styles.btnPrimary} href="https://github.com/micasaul" target="_blank">GitHub</a>
          <a className={styles.btnPrimary} href="https://linkedin.com/in/micaela-saül-8b4b8622b" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}