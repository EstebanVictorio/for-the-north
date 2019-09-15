import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import SunnyDesert from './sunny-desert'
import Belladona from './belladona'
import SnowyPlain from './snowy-plain'
import Slim from './slim'
import NightDark from './night-dark'
import {
  SLIM,
  BELLADONA,
  SNOWY_PLAIN,
  SUNNY_DESERT,
  NIGHT_DARK
 } from 'utils/constants'



const themes = {
  "slim": Slim,
  "belladona": Belladona,
  "snowy-plain": SnowyPlain,
  "sunny-desert": SunnyDesert,
  "night-dark": NightDark,
}

const Theme = ({ selected, children }) => {
  const selectedTheme = themes[selected] ? themes[selected] : themes.slim
  return (
    <ThemeProvider theme={selectedTheme}>
      { children }
    </ThemeProvider>
  )
}

export default Theme