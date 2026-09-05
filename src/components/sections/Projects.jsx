import { useState, useRef } from 'react'
import styles from './Projects.module.css'

const content = {
  es: {
    title: 'proyectos',
    more: 'ver más',
    less: 'ver menos',
    hint: 'arrastrá para comparar',
    before: '← wireframe',
    after: 'resultado final →',
    github: 'GitHub',
  },
  en: {
    title: 'projects',
    more: 'see more',
    less: 'see less',
    hint: 'drag to compare',
    before: '← wireframe',
    after: 'final result →',
    github: 'GitHub',
  },
}

const projects = [
  {
    name: 'Camisería Urbana',
    visual: 'camiseria',
    hasPreview: true,
    type: { es: 'E-commerce Full Stack', en: 'Full Stack E-commerce' },
    date: { es: 'Ago. 2025 – Feb. 2026', en: 'Aug. 2025 – Feb. 2026' },
    desc: {
      es: 'Aplicación web desarrollada de punta a punta — desde el diseño en Figma hasta la implementación. Incluye carrito, pagos, autenticación y gestión de productos.',
      en: 'Web application built end to end — from Figma design to implementation. Includes cart, payments, authentication and product management.',
    },
    stack: ['React', 'Node.js', 'Strapi', 'PostgreSQL', 'Figma'],
    details: {
      es: [
        'Frontend en React con rutas, carrito y estado global',
        'Backend con Strapi como CMS headless y API REST',
        'Base de datos relacional en PostgreSQL',
        'Integración de pagos y autenticación de usuarios',
        'Diseño completo en Figma — wireframes, mockups y prototipo',
      ],
      en: [
        'Frontend in React with routing, cart and global state',
        'Backend with Strapi as headless CMS and REST API',
        'Relational database in PostgreSQL',
        'Payment integration and user authentication',
        'Full design in Figma — wireframes, mockups and prototype',
      ],
    },
    githubUrl: 'https://github.com/micasaul/camiseria-urbana',
  },
  {
    name: 'DAV',
    visual: 'dav',
    hasPreview: true,
    type: { es: 'Diseño Asistido por Voz para FreeCAD', en: 'Voice-Assisted Design for FreeCAD' },
    date: { es: 'Abr. 2026 – Actualidad', en: 'Apr. 2026 – Present' },
    desc: {
      es: 'Interfaz de control por voz para FreeCAD orientada a personas con movilidad reducida, con herramientas para registrar y consultar las acciones realizadas.',
      en: 'Voice-control interface for FreeCAD designed for people with reduced mobility, with tools to record and review user actions.',
    },
    stack: ['Python', 'FreeCAD', 'VOSK', 'Git', 'GitHub'],
    details: {
      es: [
        'Desarrollo y mejora de una interfaz de control por voz para FreeCAD',
        'Diseño de interfaz y sistema de historial para visualizar acciones',
        'Análisis de errores y conversión de requerimientos en tickets',
        'Coordinación del equipo de diseño y seguimiento de entregables',
        'Relevamiento de funcionalidades y planificación de mejoras',
      ],
      en: [
        'Development and improvement of a voice-control interface for FreeCAD',
        'Interface and history system design to visualize user actions',
        'Bug analysis and conversion of requirements into implementation tickets',
        'Design team coordination and deliverable tracking',
        'Feature discovery and planning of system improvements',
      ],
    },
    githubUrl: 'https://github.com/DAv-Project-Team-UADER/DAV',
  },
  {
    name: 'RawDoc Pipeline',
    visual: 'rawdoc',
    hasPreview: false,
    type: { es: 'Pipeline Inteligente para Análisis Estructural de Documentos Normativos', en: 'Intelligent Pipeline for Structural Analysis of Regulatory Documents' },
    date: { es: 'Abr. 2026 – Actualidad', en: 'Apr. 2026 – Present' },
    desc: {
      es: 'Proyecto de investigación para digitalizar y analizar documentos normativos históricos mediante OCR y detección de estructuras documentales.',
      en: 'Research project to digitize and analyze historical regulatory documents using OCR and document-structure detection.',
    },
    stack: ['Python', 'YOLO', 'OCR', 'Git', 'GitHub'],
    details: {
      es: [
        'Relevamiento de documentos de la Facultad de Ciencia y Tecnología de UADER',
        'Evaluación y prueba de modelos YOLO para identificar estructuras',
        'Análisis de resultados y validación del código desarrollado',
        'Administración y organización del repositorio del proyecto',
        'Coordinación del versionado e integración del trabajo del equipo',
      ],
      en: [
        'Survey of documents from UADER Faculty of Science and Technology',
        'Evaluation and testing of YOLO models to identify document structures',
        'Results analysis and validation of the developed code',
        'Project repository administration and organization',
        'Versioning coordination and team-work integration',
      ],
    },
    githubUrl: 'https://github.com/micasaul/RawDoc-Pipeline',
  },
]

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
      <div className={styles.comparator} ref={compRef} onMouseDown={onMouseDown} onTouchMove={onTouchMove}>
        <div className={styles.compAfter}>
          <img src="/result-camiseria.png" alt="Resultado final" />
        </div>
        <div className={styles.compBefore} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src="/wireframe-camiseria.png" alt="Wireframe" />
        </div>
        <div className={styles.compHandle} style={{ left: `${pos}%` }}>
          <div className={styles.compCircle}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
        </div>
      </div>
      <p className={styles.hint}>{hint}</p>
    </>
  )
}

function ProjectVisual({ project, onClick }) {
    if (project.visual === 'camiseria') {
      return (
        <button type="button" className={styles.previewButton} onClick={onClick} aria-label={`Abrir vista completa de ${project.name}`}>
          <img src="/result-camiseria.png" alt={project.name} />
        </button>
      )
    }

    if (project.visual === 'dav') {
      return (
        <button type="button" className={styles.previewButton} onClick={onClick} aria-label={`Abrir vista completa de ${project.name}`}>
          <img src="/result-dav.png" alt={project.name} />
        </button>
      )
    }

    return (
      <div className={`${styles.projectVisual} ${styles[project.visual]}`}>
        <span className={styles.visualKicker}>{project.visual === 'dav' ? 'FREECAD / VOICE' : 'OCR / STRUCTURE'}</span>
        <strong>{project.name}</strong>
        <span className={styles.visualLine} />
        <span className={styles.visualCaption}>{project.visual === 'dav' ? 'command history' : 'document pipeline'}</span>
      </div>
    )
  }

  function ProjectCard({ project, lang, labels }) {
    const [open, setOpen] = useState(false)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const hasComparator = project.visual === 'camiseria'
    const hasReference = project.visual === 'dav'
    const hasPreview = project.hasPreview ?? true

    const previewImage = project.visual === 'camiseria' ? '/result-camiseria.png' : project.visual === 'dav' ? '/result-dav.png' : null

    return (
      <div className={`${styles.card} ${!hasPreview ? styles.cardNoPreview : ''}`}>
        {hasPreview && (
          <div className={styles.cardTop}>
            <div className={styles.browser}>
              <div className={styles.browserBar}>
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.browserUrl} />
              </div>
              <div className={styles.browserBody}>
                <ProjectVisual project={project} onClick={previewImage ? () => setLightboxOpen(true) : undefined} />
              </div>
            </div>
          </div>
        )}

        {lightboxOpen && previewImage && (
          <div className={styles.lightboxBackdrop} onClick={() => setLightboxOpen(false)}>
            <div className={styles.lightboxPanel} onClick={e => e.stopPropagation()}>
              <button type="button" className={styles.lightboxClose} onClick={() => setLightboxOpen(false)} aria-label="Cerrar imagen">
                ×
              </button>
              <img className={styles.lightboxImage} src={previewImage} alt={project.name} />
            </div>
          </div>
        )}

        <div className={`${styles.cardInfo} ${hasPreview ? styles.cardInfoWithPreview : styles.cardInfoNoPreview}`}>
          <div className={styles.infoMain}>
            <p className={styles.projType}>{project.type[lang]}</p>
            <h2 className={styles.projName}>{project.name}</h2>
            {project.date && <p className={styles.projDate}>{project.date[lang]}</p>}
            <p className={styles.projDesc}>{project.desc[lang]}</p>
          </div>

          <div className={styles.infoSide}>
            <p className={styles.stackLabel}>Stack</p>
            {project.stack.map(stackItem => (
              <div key={stackItem} className={styles.stackItem}>
                <div className={styles.sdot} />
                {stackItem}
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <button className={styles.expandBtn} onClick={() => setOpen(!open)}>
              {open ? labels.less : labels.more}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <a className={styles.projLink} href={project.githubUrl} target="_blank" rel="noreferrer">{labels.github}</a>
          </div>
        </div>

        <div className={`${styles.expandable} ${open ? styles.open : ''}`}>
          <div className={styles.expandInner}>
            {hasComparator && (
              <div className={styles.compareCol}>
                <div className={styles.compareLabelRow}>
                  <span className={styles.clabel}>{labels.before}</span>
                  <span className={styles.clabel}>{labels.after}</span>
                </div>
                <Comparator hint={labels.hint} />
              </div>
            )}
            {hasReference && (
              <div className={styles.referenceCol}>
                <img
                  className={styles.referenceImage}
                  src="/figma-dav.png"
                  alt="DAV visual exploration"
                />
                <p className={styles.referenceHint}>
                  {lang === 'es'
                    ? 'EXPLORACIÓN VISUAL — Referencias de FreeCAD y propuestas de interfaz utilizadas para definir la identidad visual de DAV.'
                    : 'VISUAL EXPLORATION — FreeCAD references and interface proposals used to define DAV visual identity.'}
                </p>
              </div>
            )}
            <div className={`${styles.detailList} ${!hasComparator && !hasReference ? styles.detailListFull : ''}`}>
              {project.details[lang].map((detail, index) => (
                <div key={index} className={styles.detailItem}>
                  <span className={styles.dicon}>→</span>
                  {detail}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

export function Projects({ lang }) {
  const labels = content[lang]

  return (
    <section id="projects" className={styles.section}>
      <p className={styles.sectionTitle}>{labels.title}</p>
      <div className={styles.projectList}>
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} lang={lang} labels={labels} />
        ))}
      </div>
    </section>
  )
}