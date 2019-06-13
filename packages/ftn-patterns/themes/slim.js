import { createContext } from 'react'

const { Provider, Consumer } = createContext({
  navigation: {
    meta: {
      primary: "#F0DB4F",
      secondary: "#AF9906",
    },
    content: {
      accent: "black",
      focus: "#F6E995",
      landscape: "#FDFBED",
    }
  }
})


export {
  Provider,
  Consumer,
}

export default {
  Provider,
  Consumer,
}