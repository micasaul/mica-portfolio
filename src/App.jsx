import { useTheme } from './hooks/useTheme'
import { useLang } from './hooks/useLang'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Intro } from './components/intro/Intro'
import { StarButton } from './components/layout/StarButton'
import { Header } from './components/layout/Header'
import { Background } from './components/layout/Background'
import { Hero } from './components/sections/Hero'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Education } from './components/sections/Education'

import EstrellaSvg from './assets/icons/estrella.svg?react'
import EstrellitaSvg from './assets/icons/estrellita.svg?react'
import BrilloSvg from './assets/icons/brillo.svg?react'

function App() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      <Intro
        onDone={() => setIntroDone(true)}
        SvgEstrella={EstrellaSvg}
        SvgEstrellita={EstrellitaSvg}
        SvgBrillo={BrilloSvg}
      />

      <Background />

      <motion.div
        style={{ position: 'relative', zIndex: 1, width: '100%', overflowX: 'hidden' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.8, ease: 'easeIn' }}
      >
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          lang={lang}
          toggleLang={toggleLang}
        />
        <main>
          <Hero lang={lang} />
          <Projects lang={lang} />
          <Skills lang={lang} />
          <Education lang={lang} />
        </main>
        <StarButton theme={theme} toggleTheme={toggleTheme} />
      </motion.div>
    </>
  )
}

export default App