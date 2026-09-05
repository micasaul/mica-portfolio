import styles from './Education.module.css'

const content = {
  es: {
    title: 'educación y certificados',
    certificate: 'ver certificado',
  },
  en: {
    title: 'education & credentials',
    certificate: 'view certificate',
  },
}

const education = [
  {
    type: { es: 'Título intermedio', en: 'Intermediate title' },
    name: { es: 'Analista en Sistemas', en: 'Systems Analyst' },
    date: { es: 'UADER · Feb. 2023 – Feb. 2026', en: 'UADER · Feb. 2023 – Feb. 2026' },
    desc: {
      es: 'Carrera finalizada. Formación en desarrollo de software, análisis y diseño de sistemas.',
      en: 'Degree completed. Training in software development, systems analysis and design.',
    },
  },
  {
    type: { es: 'Certificado de idioma', en: 'Language certification' },
    name: { es: 'Inglés', en: 'English' },
    date: { es: 'Cambridge English · C1 Advanced', en: 'Cambridge English · C1 Advanced' },
    desc: {
      es: 'Certificación de inglés nivel C1 con puntaje 188.',
      en: 'English certification at C1 level with a score of 188.',
    },
  },
  {
    type: { es: 'Curso', en: 'Course' },
    name: { es: 'Diseño UX/UI', en: 'UX/UI Design' },
    date: { es: 'UNLP · En curso', en: 'UNLP · In progress' },
    desc: {
      es: 'Formación complementaria enfocada en diseño de interfaces, experiencia de usuario y prototipado.',
      en: 'Complementary training focused on interface design, user experience and prototyping.',
    },
  },
  {
    type: { es: 'Curso', en: 'Course' },
    name: { es: 'Diseño Gráfico', en: 'Graphic Design' },
    date: { es: 'UNC · En curso', en: 'UNC · In progress' },
    desc: {
      es: 'Formación complementaria enfocada en composición visual, identidad y producción gráfica.',
      en: 'Complementary training focused on visual composition, identity and graphic production.',
    },
  },
]

export function Education({ lang }) {
  const labels = content[lang]

  return (
    <section id="education" className={styles.section}>
      <p className={styles.sectionTitle}>{labels.title}</p>

      <div className={styles.educationList}>
        {education.map(item => (
          <article key={`${item.name[lang]}-${item.date[lang]}`} className={styles.card}>
            <div className={styles.cardInfo}>
              <div className={styles.infoMain}>
                <p className={styles.educType}>{item.type[lang]}</p>
                <h2 className={styles.educName}>{item.name[lang]}</h2>
                <p className={styles.educDate}>{item.date[lang]}</p>
                <p className={styles.educDesc}>{item.desc[lang]}</p>
              </div>

              {item.certificateUrl && (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.certLink}
                >
                  {labels.certificate}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
