import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            Bg: string,
            Fg: string,
            Metallic_Seaweed: string,
            Beau_Blue: string,
            Lavender_Web: string
        }
    } 
}