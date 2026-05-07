import { useTheme } from './hooks/useTheme'
import { useLang } from './hooks/useLang'
import { Header } from './components/Layout/Header'
import { Background } from './components/Layout/Background'

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
      </div>
    </>
  )
}

export default App