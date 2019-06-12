import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
  grid-area: navbar;
  height: 60px;
  background-color: #F0DB4F;
  color: #323330;
  font-size: 32px;
  display: flex;
  align-items: center;
  box-shadow: 10px 0 10px -2px;
`

const StyledLogo = styled.a`
    color: black;
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
`

const Navbar = ({handleToggleMenuClick}) => {

  return (
    <StyledNavbar>
      <StyledMenuToggleButton type="button" onClick={handleToggleMenuClick}/>
      <Link prefetch href="/">
        <StyledLogo>
          <strong>FTN</strong>
        </StyledLogo>
      </Link>
    </StyledNavbar>
  )
}

export default Navbar