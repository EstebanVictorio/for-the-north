import React,{ useState, useEffect } from 'react'
import Navbar from 'navigation/navbar'
import Sidebar from 'navigation/sidebar'
import styled, { createGlobalStyle, ThemeConsumer } from 'styled-components'

const BaseStyles = createGlobalStyle`
:root {
  --focused : ${({ content }) => content.focused};
  --accent : ${({ content }) => content.accent};
  --primary : ${({ meta }) => meta.primary};
  --secondary : ${({ meta }) => meta.secondary};
  --landscape : ${({ content }) => content. landscape};
}

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
  width: 100vw;
  height: 100vh;
  font-family: lato;
  background-color: var(--landscape);
}

code, pre {
  overflow-wrap: break-word;
}

p {
  text-align: justify;
}

`


const StyledLayout = styled.main`
  box-sizing: border-box;
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
    grid-template-columns: auto 1fr;
  }
`

const StyledMainContent = styled.section`
  overflow: scroll;
  font-family: lato;
  color: var(--accent);
  box-sizing: border-box;
  grid-area: main-content;

  @media screen and (min-width: 144px) and (max-width: 1024px) {
    font-size: 22px;
    padding: 10px 20px;
    &.open {
      display:none;
    }

    &.closed {
      height: calc(100vh - 60px);
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 5px 180px 5px 50px;
    font-size: 20px;
    height: calc(100vh - 60px);
  }
`

const Layout = ({ theme, children }) => {
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)
  
  useEffect(() => {
    if(typeof window !== 'undefined') {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  })

  useEffect(() => {
      setOpen(width >= 1024)
  },[width])
  
  const handleToggleMenuClick = () => setOpen(!open)
  return (
    <>
    <ThemeConsumer>
      {
        themeProps => <BaseStyles {...themeProps}/>
      }
    </ThemeConsumer>
    <StyledLayout>
      <ThemeConsumer>
        { ({navbarBorder}) => (
            <Navbar
              open={open}
              border={navbarBorder}
              handleToggleMenuClick={handleToggleMenuClick}
            />
        ) }
      </ThemeConsumer>
      <Sidebar
        open={open}
        handleToggleMenuClick={handleToggleMenuClick}
      />
      <StyledMainContent className={open ? 'open' : 'closed'}>
        { children }
      </StyledMainContent>
    </StyledLayout>
    </>
  )
}

export default Layout