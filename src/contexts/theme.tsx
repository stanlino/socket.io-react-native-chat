import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider as TP } from 'styled-components'
import themes from '../themes'

interface ThemeContextData {
  toggleTheme(): any
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const ThemeProvider: React.FC = ({ children }) => {
  const { dark, light } = themes

  const [theme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme(!theme)
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <TP theme={theme ? light : dark}>{children}</TP>
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const { toggleTheme } = useContext(ThemeContext)
  return { toggleTheme }
}

export default ThemeProvider
