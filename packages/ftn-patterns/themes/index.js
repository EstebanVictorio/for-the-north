import dynamic from 'next/dynamic'
import { createGlobalStyle } from 'styled-components'


const StyledTheme = createGlobalStyle`
:root {
  --focus : ${({ focus }) => {
    console.log('Focus prop:', focus)
    return focus
  }};
  --accent : ${({ accent }) => accent};
  --primary : ${({ primary }) => primary};
  --secondary : ${({ secondary }) => secondary};
  --landscape : ${({ landscape }) => landscape};
}
`

const getContext = context => {
  const { Consumer } = context
  return (
    <Consumer>
      { (themeProps) => {
        console.log('Theme props:')
        console.log(themeProps)
        return <StyledTheme {...themeProps}/>
      } }
    </Consumer>
  )
}


const Theme = ({selected}) => {
  let Component = null
  switch(selected) {
    case 'belladona':
      Component = dynamic(() => import('./belladona').then(getContext))
    case 'snowy-plain':
      Component = dynamic(() => import('./snowy-plain').then(getContext))
    case 'sunny-desert':
      Component = dynamic(() => import('./sunny-desert').then(getContext))
    case 'slim':
    default:
      Component = dynamic(() => import('./slim').then(getContext))
  }
  return Component
}

export default Theme