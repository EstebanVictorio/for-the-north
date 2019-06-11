import styled from 'styled-components'
import Link from 'next/link'

const StyledSidebar = styled.aside`
  display: flex;
  grid-area: sidebar;
  flex-direction: column;
  box-shadow: 0 4px 10px -2px;
  background-color: rgb(175, 153, 6);

  @media screen and (min-width:1024px) {
    display: inline-flex;
    height: calc(100vh - 60px);
    align-items: flex-start; 
  }
`

const StyledNavLink = styled.a`
  width: 100%;
  font-size: 20px;
  cursor: pointer;
  color: whitesmoke;
  text-align: center;
  padding: 0.5em 2em;
  text-decoration: none;
  box-sizing: border-box;
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