import styles from './Skills.module.css'

const groups = [
  {
    title: { es: 'Lenguajes', en: 'Languages' },
    wide: false,
    skills: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'HTML', icon: 'devicon-html5-plain' },
      { name: 'CSS', icon: 'devicon-css3-plain' },
    ],
  },
  {
    title: { es: 'Frontend & Diseño', en: 'Frontend & Design' },
    wide: false,
    skills: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'Figma', icon: 'devicon-figma-plain' },
      { name: 'Balsamiq'},
      { name: 'Canva', icon: 'devicon-canva-plain' },
    ],
  },
  {
    title: { es: 'Backend & Bases de datos', en: 'Backend & Databases' },
    wide: false,
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'NestJS', icon: 'devicon-nestjs-plain' },
      { name: 'Strapi' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    ],
  },
  {
    title: { es: 'Herramientas', en: 'Tools' },
    wide: false,
    skills: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'GitLab', icon: 'devicon-gitlab-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'Postman', icon: 'devicon-postman-plain' },
    ],
  },
]

export function Skills({ lang }) {
  return (
    <section className={styles.section}>
      <div className={styles.stripe}>
        <p className={styles.stripeTitle}>
          {lang === 'es' ? 'habilidades' : 'skills'}
        </p>
        <div className={styles.bento}>
          {groups.map((group) => (
            <div
              key={group.title.es}
              className={`${styles.cell} ${group.wide ? styles.wide : ''}`}
            >
              <span className={styles.cellTitle}>{group.title[lang]}</span>
              <div className={group.wide ? styles.skillListRow : styles.skillList}>
                {group.skills.map((skill) => (
                  <div key={skill.name} className={styles.skill}>
                    <i
                      className={skill.icon}
                      style={{ fontSize: 16, color: 'var(--color-stripe-text)' }}
                    />
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}