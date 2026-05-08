import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Intro.module.css'

const PARTICLE_TYPES = ['estrella', 'estrellita', 'brillo']
const PARTICLES = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  type: PARTICLE_TYPES[i % 3],
}))

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

export function Intro({ onDone, SvgEstrella, SvgEstrellita, SvgBrillo }) {
  const [phase, setPhase] = useState('idle')

  function handleClick() {
    if (phase !== 'idle') return

    setPhase('animating')

    setTimeout(() => {
      setPhase('done')
      onDone()
    }, 2500)
  }

  if (phase === 'done') return null

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 998,
          backgroundColor: 'var(--color-bg)',
          pointerEvents: 'none',
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'animating' ? 0 : 1 }}
        transition={{ duration: 3, ease: 'linear' }}
      />

      <div
        className={styles.overlay}
        style={{ 
          backgroundColor: phase === 'idle' ? 'var(--color-bg)' : 'transparent', 
          zIndex: 1000,
          pointerEvents: phase === 'animating' ? 'none' : 'auto' 
        }}
      >
        {phase === 'animating' && PARTICLES.map((p) => {
          const angle = randomBetween(0, 360)
          const distance = randomBetween(300, 900)
          const rad = (angle * Math.PI) / 180
          const tx = Math.cos(rad) * distance
          const ty = Math.sin(rad) * distance
          const size = randomBetween(16, 48)
          
          const SvgEl = p.type === 'estrella' ? SvgEstrella
            : p.type === 'estrellita' ? SvgEstrellita
            : SvgBrillo

          return (
            <motion.div
              key={p.id}
              className={styles.particle}
              style={{
                left: '50%',
                top: '50%',
                width: size,
                height: size,
                color: 'var(--color-glow-bg)',
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{ x: tx, y: ty, opacity: 0, scale: 0.2 }}
              transition={{ duration: 3, ease: 'easeOut' }} 
            >
              <SvgEl style={{ width: '100%', height: '100%' }} />
            </motion.div>
          )
        })}

        <motion.div
          animate={{
            opacity: phase === 'animating' ? 0 : 1,
            scale: phase === 'animating' ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`${styles.folder} ${phase === 'animating' ? styles.open : ''}`}
            onClick={handleClick}
          >
            <div className={styles.back} />
            <div className={styles.cover} />
          </div>
          <p className={styles.folderLabel}>~/mica/</p>
        </motion.div>
      </div>
    </>
  )
}