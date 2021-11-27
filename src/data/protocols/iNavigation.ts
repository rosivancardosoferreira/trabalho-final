interface ResetiNTERFACE {
  
}
export interface iNavigation {
  navigation : {
    screen?: string,
    navigate: (router: string, params?: object) => void,
    replace: (router: string) => void,
    goBack: () => void,
    // reset: (router: string, params?: object) => void,

    reset: (index: number,
      routes: {
              name: string,
              params?: object,
      }) => void,

    popToTop: () => void,
  },
  route : {
    params : any
  }
}