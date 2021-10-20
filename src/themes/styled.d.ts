import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    primaryColor: string
    secundaryColor: string
    backgroundColor: string
    colors: {
      blue: string
      whiteblue: string
    },
    sizes: {
      one: number,
      ten: number
    }
  }
}
