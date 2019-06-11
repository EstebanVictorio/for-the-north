import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledSidebar = styled.aside`
  display: flex;
  grid-area: sidebar;
  flex-direction: column;
  box-shadow: 0 4px 10px -2px;
  background-color: rgb(175, 153, 6);

  @media screen and (min-width: 144px) {
    .sidebar-toggle-button {
      display: none;
    }
  }

  @media screen and (min-width:1024px) {
    &.open {
      width: 150px;
    }

    &.closed {
      width: 80px;
    }
    display: inline-flex;
    height: calc(100vh - 60px);
    align-items: flex-start; 
    .sidebar-toggle-button {
      display: initial;
    }
  }

  .sidebar-toggle-button {
    &.open {
      background-image: url('/static/icons/collapse-left.svg');
    }

    &.closed {
      background-image: url('/static/icons/expand-right.svg');
    }

    width: 100%;
    border: none;
    padding: 15px;
    outline: none;
    font-size: 20px;
    cursor: pointer;
    filter: invert(1);
    color: whitesmoke;
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;
    background-size: 40px 40px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    &:hover {
      color: #323330;
      background-color: #f6e995;
      text-decoration: underline;
      filter: none;
    }
  }
`

const StyledNavLink = styled.a`
  width: 100%;
  display: flex;
  font-size: 20px;
  cursor: pointer;
  color: whitesmoke;
  padding: 0.5em 2em;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    color: #323330;
    background-color: #f6e995;
    text-decoration: underline;
    .link-icon {
      filter: none;
    }
  }

  .link-icon {
    margin-right: 5px;
    filter: invert(1);
  }

  &.open {
    .link-text {
      display: inline;
    }
  }

  &.closed {
    .link-text {
      display: none;
    }
  }
`

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const [openClass, setOpenClass] = useState('open')

  useEffect(() => setOpenClass(open ? 'open' : 'closed'),[open])

  const handleToggleSidebarClick = () => setOpen(!open)

  return (
    <StyledSidebar className={openClass}>
      <input
        type="button"
        className={`sidebar-toggle-button ${openClass}`}
        onClick={handleToggleSidebarClick}
      />
      <Link href="/posts">
        <StyledNavLink className={openClass}>
          <img className="link-icon" src="/static/icons/post.svg" alt="posts"/>
          <span className="link-text">
            Posts
          </span>
        </StyledNavLink>
      </Link>
      <Link href="/about">
        <StyledNavLink className={openClass}>
          <img className="link-icon" src="/static/icons/about.svg" alt="about"/>
          <span className="link-text">
            About
          </span>
        </StyledNavLink>
      </Link>
    </StyledSidebar>
  )
}


export default Sidebar