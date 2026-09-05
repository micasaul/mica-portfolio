import styles from './Skills.module.css'

const groups = [
  {
    title: { es: 'Frontend', en: 'Frontend' },
    wide: false,
    columns: 2,
    skills: [
      { name: 'HTML', icon: 'devicon-html5-plain' },
      { name: 'CSS', icon: 'devicon-css3-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'React', icon: 'devicon-react-original' },
    ],
  },
  {
    title: { es: 'Diseño/UX', en: 'Design/UX' },
    wide: true,
    columns: 4,
    skills: [
      { name: 'Figma', icon: 'devicon-figma-plain' },
      { name: 'Canva', icon: 'devicon-canva-plain' },
      { name: 'Balsamiq', icon: 'devicon-sketch-plain' },
      { name: 'Affinity', icon: 'devicon-gimp-plain' },
      { name: 'Adobe Illustrator', icon: 'devicon-illustrator-plain' },
      { name: 'Adobe Photoshop', icon: 'devicon-photoshop-plain' },
      { name: 'Adobe InDesign', icon: 'devicon-indesign-plain' },
    ],
  },
  {
    title: { es: 'Backend y bases de datos', en: 'Backend & Databases' },
    wide: true,
    columns: 3,
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'NestJS', icon: 'devicon-nestjs-plain' },
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'Strapi', icon: 'devicon-strapi-plain' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    ],
  },
  {
    title: { es: 'Herramientas', en: 'Tools' },
    wide: false,
    columns: 3,
    skills: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'GitLab', icon: 'devicon-gitlab-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'Postman', icon: 'devicon-postman-plain' },
      { name: 'Kanban', icon: 'devicon-trello-plain' },
    ],
  },
]

export function Skills({ lang }) {
  return (
    <section id="skills" className={styles.section}>
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
              <div
                className={`${group.wide ? styles.skillListRow : styles.skillList} ${
                  styles[`columns${group.columns}`]
                }`}
              >
                {group.skills.map((skill) => (
                  <div key={skill.name} className={styles.skill}>
                    {skill.icon && (
                      <i
                        className={skill.icon}
                        style={{ fontSize: 16, color: 'var(--color-stripe-text)' }}
                      />
                    )}
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