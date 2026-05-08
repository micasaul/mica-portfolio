import { useTheme } from './hooks/useTheme'
import { useLang } from './hooks/useLang'
import { Header } from './components/Layout/Header'
import { Background } from './components/Layout/Background'
import { Hero } from './components/sections/Hero'

function App() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()

  return (
    <>
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          lang={lang}
          toggleLang={toggleLang}
        />
        <main>
          <Hero lang={lang} />
        </main>
      </div>
    </>
  )
}

export default App