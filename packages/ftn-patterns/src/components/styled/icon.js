import React, { useState } from 'react'
import { ThemeConsumer } from 'styled-components'
import ReactSVG from 'react-svg'


const Icon = ({ icon }) => (
    <ReactSVG
      style={{fill: 'var(--accent)' }}
      src={`./static/icons/${icon}.svg`}
    />
  )

export default Icon