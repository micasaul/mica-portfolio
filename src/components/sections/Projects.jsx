import { useState, useRef } from 'react'
import styles from './Projects.module.css'

const content = {
  es: {
    title: 'proyectos',
    type: 'E-commerce Full Stack',
    desc: 'Aplicación web desarrollada de punta a punta — desde el diseño en Figma hasta la implementación. Incluye carrito, pagos, autenticación y gestión de productos.',
    more: 'ver más',
    less: 'ver menos',
    hint: 'arrastrá para comparar',
    before: '← wireframe',
    after: 'resultado final →',
    details: [
      'Frontend en React con rutas, carrito y estado global',
      'Backend con Strapi como CMS headless y API REST',
      'Base de datos relacional en PostgreSQL',
      'Integración de pagos y autenticación de usuarios',
      'Diseño completo en Figma — wireframes, mockups y prototipo',
    ],
    github: 'GitHub',
  },
  en: {
    title: 'projects',
    type: 'Full Stack E-commerce',
    desc: 'Web application built end to end — from Figma design to implementation. Includes cart, payments, authentication and product management.',
    more: 'see more',
    less: 'see less',
    hint: 'drag to compare',
    before: '← wireframe',
    after: 'final result →',
    details: [
      'Frontend in React with routing, cart and global state',
      'Backend with Strapi as headless CMS and REST API',
      'Relational database in PostgreSQL',
      'Payment integration and user authentication',
      'Full design in Figma — wireframes, mockups and prototype',
    ],
    github: 'GitHub',
  },
}

function Comparator({ hint }) {
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)
  const compRef = useRef(null)

  function setFromX(x) {
    const rect = compRef.current.getBoundingClientRect()
    const pct = Math.min(Math.max((x - rect.left) / rect.width, 0.05), 0.95)
    setPos(pct * 100)
  }

  function onMouseDown(e) {
    dragging.current = true
    setFromX(e.clientX)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  function onMouseMove(e) {
    if (dragging.current) setFromX(e.clientX)
  }

  function onMouseUp() {
    dragging.current = false
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }

  function onTouchMove(e) {
    setFromX(e.touches[0].clientX)
  }

  return (
    <>
      <div
        className={styles.comparator}
        ref={compRef}
        onMouseDown={onMouseDown}
        onTouchMove={onTouchMove}
      >
        <div className={styles.compAfter}>
          <img src="/result-camiseria.png" alt="Resultado final" />
        </div>
        <div
          className={styles.compBefore}
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img src="/wireframe-camiseria.png" alt="Wireframe" />
        </div>
        <div className={styles.compHandle} style={{ left: `${pos}%` }}>
          <div className={styles.compCircle}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </div>
        </div>
      </div>
      <p className={styles.hint}>{hint}</p>
    </>
  )
}

export function Projects({ lang }) {
  const [open, setOpen] = useState(false)
  const t = content[lang]

  return (
    <section className={styles.section}>
      <p className={styles.sectionTitle}>{t.title}</p>
      <div className={styles.card}>

        <div className={styles.cardTop}>
          <div className={styles.browser}>
            <div className={styles.browserBar}>
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.browserUrl} />
            </div>
            <div className={styles.browserBody}>
              <img src="/result-camiseria.png" alt="Camisería Urbana" />
            </div>
          </div>
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.infoMain}>
            <p className={styles.projType}>{t.type}</p>
            <h2 className={styles.projName}>Camisería Urbana</h2>
            <p className={styles.projDesc}>{t.desc}</p>

            <div className={styles.actions}>
              <button className={styles.expandBtn} onClick={() => setOpen(!open)}>
                {open ? t.less : t.more}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <a
                className={styles.projLink}
                href="https://github.com/micasaul/camiseria-urbana"
                target="_blank"
                rel="noreferrer"
              >
                {t.github}
              </a>
            </div>
          </div>

          <div className={styles.infoSide}>
            <p className={styles.stackLabel}>Stack</p>
            {['React', 'Node.js · Strapi', 'PostgreSQL', 'Figma'].map(s => (
              <div key={s} className={styles.stackItem}>
                <div className={styles.sdot} />
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.expandable} ${open ? styles.open : ''}`}>
          <div className={styles.expandInner}>

            <div className={styles.compareCol}>
              <div className={styles.compareLabelRow}>
                <span className={styles.clabel}>{t.before}</span>
                <span className={styles.clabel}>{t.after}</span>
              </div>
              <Comparator hint={t.hint} />
            </div>

            <div className={styles.detailList}>
              {t.details.map((d, i) => (
                <div key={i} className={styles.detailItem}>
                  <span className={styles.dicon}>→</span>
                  {d}
                </div>
              ))}
            </div>
          </div>

        </div>
      
      </div>
    </section>
  )
}