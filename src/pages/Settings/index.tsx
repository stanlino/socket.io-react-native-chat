import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components/native'
import { useThemeContext } from '../../contexts/theme'
import { Container, Tag, Section, Output } from './styled'

const SettingsPage: React.FC = () => {
  const { title } = useContext(ThemeContext)
  const { toggleTheme } = useThemeContext()

  return (
    <Container>
      <Section onPress={toggleTheme}>
        <Tag>Tema</Tag>
        <Output>{title}</Output>
      </Section>
    </Container>
  )
}

export default SettingsPage
