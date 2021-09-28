import React, { useState } from 'react'
import { ThemeProvider as TP } from 'styled-components'
import themes from '../themes'

const ThemeProvider: React.FC = ({ children }) => {

    const [ currentTheme, setCurrentTheme ] = useState('light')

    const theme = currentTheme === 'light' ? themes.light : themes.dark

    return (
        <TP theme={theme}>
            {children}
        </TP>
    )
}

export default ThemeProvider