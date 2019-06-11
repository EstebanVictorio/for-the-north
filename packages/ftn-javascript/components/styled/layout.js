import Navbar from './navbar'
import Sidebar from './sidebar'
import styled, { createGlobalStyle } from 'styled-components'

const BaseStyles = createGlobalStyle`
@font-face{
  font-family: bFont;
  src: url('/static/fonts/Neutra-Text-Bold.otf') format('opentype');
}

@font-face{
  font-family: lato;
  src: url('/static/fonts/Lato-Light.ttf') format('truetype');
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  font-family: bFont;
  background-color: #fdfbed;
}
`

const StyledLayout = styled.main`
  display: grid;
  @media screen and (min-width: 144px) {
    grid-template-areas:
      "navbar"
      "sidebar"
      "main-content";
  }

  @media screen and (min-width: 1024px) {
    grid-template-areas:
      "navbar navbar"
      "sidebar main-content";
    grid-template-columns: minmax(min-content,max-content) 1fr;
  }
`

const StyledMainContent = styled.section`
  box-sizing: border-box;
  padding: 10px;
  grid-area: main-content;
  font-family: lato;
  font-size: 20px;

`

const Layout = ({ children }) => {
  return (
    <>
      <BaseStyles />
      <StyledLayout>
        <Navbar />
        <Sidebar />
        <StyledMainContent>
        { children }
        </StyledMainContent>
      </StyledLayout>
    </>
  )
}

export default Layout