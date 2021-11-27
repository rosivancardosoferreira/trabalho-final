import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      grayDark: string,
      gray: string,
      grayLight: string,
  
      whiteDark: string,
      white: string,
          
      blueDark: string,
      blue: string,
      blueDight: string,
  
      redDark: string,
      red: string,
      redDight: string,
  
      yellowDark: string,
      yellow: string,
      yellowDight: string,
  
      greenDark: string,
      green: string,
      greenDight: string,
      
      purple: string,
      purpleDark: string
      

   },
   fonts: {
      interBold: string,
      interLight: string,
      interMedium: string,
      interRegular: string,
   }
  }
}
