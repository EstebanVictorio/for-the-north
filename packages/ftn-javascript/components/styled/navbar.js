import styled from 'styled-components'
import Link from 'next/link'

const StyledNavbar = styled.nav`
  grid-area: navbar;
  height: 60px;
  background-color: #F0DB4F;
  color: #323330;
  font-size: 32px;
  display: flex;
  align-items: center;
`

const StyledLogo = styled.a`
    box-sizing: border-box;
    padding: 0 0.5em;
    text-decoration: none;
    color: black;
`

const Navbar = () => (
  <StyledNavbar>
    <Link href="/">
      <StyledLogo>
        <strong>FTN</strong>
      </StyledLogo>
    </Link>
  </StyledNavbar>
)

export default Navbar