import React,{ useState } from 'react'
import Link from 'next/link'
import styled,{ ThemeConsumer } from 'styled-components'

const StyledNavbar = styled.nav`
  height: 60px;
  display: flex;
  font-size: 32px;
  grid-area: navbar;
  align-items: center;
  color: var(--accent);
  box-sizing: border-box;
  background-color: var(--primary);
  box-shadow: 10px 0 10px -2px black;


  &.border {
    border-bottom: 4px solid var(--focused);
  }
`

const StyledLogo = styled.a`
    color: var(--accent);
    cursor: pointer;
    padding: 0 0.5em;
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
  background-image: url('/static/icons/menu.svg');

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

const Navbar = ({handleToggleMenuClick, border}) => {

  return (
    <ThemeConsumer>
      {
        ({ iconTheme }) => (
          <StyledNavbar className={`${border ? 'border':''}`}>
            <StyledMenuToggleButton
              type="button"
              className={iconTheme}
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