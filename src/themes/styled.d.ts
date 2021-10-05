import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      Primary: string
      Secundary: string
      Metallic_Seaweed: string
      Beau_Blue: string
      Lavender_Web: string
    },
    sizes: {
      one: number,
      ten: number
    }
  }
}
