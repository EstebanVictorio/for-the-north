import React,{ useState, useEffect } from 'react'
import styled, {ThemeConsumer} from 'styled-components'
import Link from 'next/link'
import Icon from 'components/styled/icon'
const StyledSidebar = styled.aside`
  display: flex;
  top: 60px;
  position: sticky;
  grid-area: sidebar;
  flex-direction: column;
  box-shadow: 0 10px 8px -2px;
  background-color: var(--secondary);
  height: calc(100vh - 60px);
  @media screen and (min-width: 144px) and (max-width: 1024px) {
    .sidebar-toggle-button {
      display: none;
    }

    &.open {
      height: initial;
    }


    &.closed {
      height: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    .sidebar-toggle-button {
      display: initial;
    }

    &.open {
      width: initial;
      
    }

    &.closed {
      width: 80px;
    }
  }

  .sidebar-toggle-button {
    width: 100%;
    border: none;
    padding: 15px;
    outline: none;
    font-size: 20px;
    cursor: pointer;
    color: var(--secondary);
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;
    background-size: 40px 40px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    &.icon-light {
      filter: invert(1);
    }


    &.open {
      background-image: url('/static/icons/collapse-left.svg');
    }

    &.closed {
      background-image: url('/static/icons/expand-right.svg');
    }
  }
`

const StyledNavLink = styled.a`
  font-size: 20px;
  cursor: pointer;
  color: var(--accent);
  padding: 0.5em 2em;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    color: var(--accent);
    background-color: var(--focused);
    text-decoration: underline;
  }

  .link-icon {
    margin-right: 5px;
  }

  @media screen and (min-width: 144px){
    &.open{
      display: flex;
    }


    &.closed{
      display: none;
    }
  }


  @media screen and (min-width: 1024px){
    &.open{
      display: flex;
      .link-text {
        display: initial;
      }
    }


    &.closed{
      display: flex;
      .link-text {
        display: none;
      }
    }
  }
`

const Sidebar = ({open, handleToggleMenuClick}) => {
  const [openClass, setOpenClass] = useState('open')

  useEffect(() => setOpenClass(open ? 'open' : 'closed'),[open])

  return (
    <ThemeConsumer>
      {
        ({iconTheme}) => {
          const iconPath = iconTheme.replace('icon-','')
          return (
            <StyledSidebar className={openClass}>
        <input
          type="button"
          className={`sidebar-toggle-button ${openClass} ${iconTheme}`}
          onClick={handleToggleMenuClick}
        />
        <Link prefetch href="/posts-index">
          <StyledNavLink className={openClass}>
            <Icon icon="blog-post" />
            <span className="link-text">
              Posts
            </span>
          </StyledNavLink>
        </Link>
        <Link prefetch href="/about">
          <StyledNavLink className={openClass}>
          <Icon icon="about" />
            <span className="link-text">
              About
            </span>
          </StyledNavLink>
        </Link>
      </StyledSidebar>
          )
        }
      }
    </ThemeConsumer>
  )
}


export default Sidebar