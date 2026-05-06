import { useState } from 'react'

export function useLang() {
  const [lang, setLang] = useState('es')
  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es')
  return { lang, toggleLang }
}