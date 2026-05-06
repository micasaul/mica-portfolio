import { useTheme } from './hooks/useTheme'
import { useLang } from './hooks/useLang'

function App() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()

  return (
    <div>
      <p>tema: {theme}</p>
      <p>idioma: {lang}</p>
      <button onClick={toggleTheme}>toggle tema</button>
      <button onClick={toggleLang}>toggle idioma</button>
    </div>
  )
}

export default App