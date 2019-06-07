import Navbar from './navbar'
import Sidebar from './sidebar'
import styled, { createGlobalStyle } from 'styled-components'

const BaseStyles = createGlobalStyle`
@font-face{
  font-family: bFont;
  src: url('/static/fonts/Neutra-Text-Bold.otf') format('opentype');
}

html, body {
  margin: 0;
  padding: 0;
  background-color: #fdfbed;
  font-family: bFont;
  width: 100%;
  height: 100vh;
}
`

const StyledLayout = styled.main``

const Layout = ({ children }) => {
  return (
    <>
      <BaseStyles />

      <StyledLayout>
        <Navbar />
        <Sidebar />
        { children }
      </StyledLayout>
    </>
  )
}

export default Layout