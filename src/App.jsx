import { useTheme } from './hooks/useTheme'
import { useLang } from './hooks/useLang'
import { Header } from './components/Layout/Header'

function App() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()

  return (
    <div>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        toggleLang={toggleLang}
      />
    </div>
  )
}

export default App