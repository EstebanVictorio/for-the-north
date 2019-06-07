import styled from 'styled-components'
import Link from 'next/link'

const StyledSidebar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  background-color: rgb(175, 153, 6);

  @media screen and (min-width:1024px) {
    display: inline-flex;
    height: calc(100vh - 60px);
    align-items: flex-start; 
  }
`

const StyledNavLink = styled.a`
  font-size: 20px;
  box-sizing: border-box;
  padding: 0.5em 2em;
  color: whitesmoke;
  text-decoration: none;

  &:hover {
    color: #323330;
    background-color: #f6e995;
    text-decoration: underline;
  }
`

const Sidebar = () => (
  <StyledSidebar>
    <Link href="/posts">
      <StyledNavLink>Posts</StyledNavLink>
    </Link>
    <Link href="/about">
      <StyledNavLink>About</StyledNavLink>
    </Link>
  </StyledSidebar>
)


export default Sidebar