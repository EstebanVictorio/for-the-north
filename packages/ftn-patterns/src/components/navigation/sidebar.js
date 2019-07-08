import Link from 'navigation/app-link'
import Icon from 'components/styled/icon'
import styled, { ThemeConsumer } from 'styled-components'
import React,{ useState, useEffect } from 'react'

const StyledSidebar = styled.aside`
  top: 60px;
  width: 240px;
  display: flex;
  position: sticky;
  grid-area: sidebar;
  align-items: flex-end;
  box-sizing: border-box;
  flex-direction: column;
  background-color: var(--secondary);
  @media screen and (min-width: 144px) and (max-width: 1024px) {
    .sidebar-toggle-button {
      display: none;
    }

    &.open {
      height: calc(100vh - 60px);
    }


    &.closed {
      height: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 10px 0;
  }

  .sidebar-toggle-button {
    width: 100%;
    border: none;
    padding: 15px;
    outline: none;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;
    color: var(--secondary);
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
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    text-decoration: underline;
  }

  .link-icon {
    margin-right: 5px;
  }

  @media screen and (min-width: 144px)  and (max-width: 1024px){
    &:hover {
      color: var(--accent);
      background-color: var(--focused);
      text-decoration: underline;
    }

    &.open{
      display: flex;
    }


    &.closed{
      display: none;
    }
  }


  @media screen and (min-width: 1024px){

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
        {/* <input
          type="button"
          className={`sidebar-toggle-button ${openClass} ${iconTheme}`}
          onClick={handleToggleMenuClick}
        /> */}
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