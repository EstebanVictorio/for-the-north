import Link from 'navigation/app-link'
import React,{ useState } from 'react'
import styled,{ ThemeConsumer } from 'styled-components'

const StyledNavbar = styled.nav`
  top: 0;
  height: 60px;
  display: flex;
  font-size: 32px;
  position: sticky;
  grid-area: navbar;
  align-items: center;
  color: var(--accent);
  box-sizing: border-box;
  background-color: var(--secondary);
  

  @media screen and (min-width: 144px) and (max-width: 1024px){
    
  }


  /* &:hover {
    box-shadow: 10px 0 10px -2px black;
    background-color: var(--primary);
    &.border {
      border-bottom: 4px solid var(--focused);
    }
  } */
`

const StyledLogo = styled.a`
    cursor: pointer;
    font-size: 32px;
    color: var(--accent);
    text-decoration: none;
    box-sizing: border-box;
`

const StyledMenuToggleButton = styled.input`
  right: 0;
  border: none;
  outline: none;
  padding: 25px;
  position: absolute;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 40px 40px;

  &.open {
    background-image: url('/static/icons/close.svg');
  }

  &.closed {
    background-image: url('/static/icons/menu.svg');
  }

  @media screen and (min-width: 144px) {
    display: initial;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
  
  &.icon-light {
    filter: invert(1);
  }
}
`

const Navbar = ({handleToggleMenuClick, border, open}) => {

  return (
    <ThemeConsumer>
      {
        ({ iconTheme }) => (
          <StyledNavbar className={`${border ? 'border':''}`}>
            <StyledMenuToggleButton
              type="button"
              className={`${iconTheme} ${open ? 'open':'closed'}`}
              onClick={handleToggleMenuClick}
            />
            <Link prefetch href="/">
              <StyledLogo>
                <strong>FTN</strong>
              </StyledLogo>
            </Link>
          </StyledNavbar>
        )
      }
    </ThemeConsumer>
  )
}

export default Navbar