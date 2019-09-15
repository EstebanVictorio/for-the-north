import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"

const StyledBlogNavigation = styled.div`
  right: 0;
  top: 120px;
  display: flex;
  align-items: center;
  position: absolute;

  .blog-navigation-dropdown {
    width: 24px;
    height: 24px;
    position: relative;
    margin-right: -5px;
    border-radius: 50%;
    cursor: pointer;
    border: 6px solid #004fff;
  }

  .blog-navigation-options {
    top: 36px;
    width: 100px;
    right: 110px;
    padding: 5px;
    position: relative;
    border-radius: 2px;
    box-sizing: border-box;
    flex-direction: column;
    background-color: black;
    border: 1px solid #28464b;
    &.open {
      display: flex;
    }

    &.closed {
      display: none;
    }

    .blog-navigation-option {
      cursor: pointer;
      color: whitesmoke;
      text-decoration: none;
      &:hover {
        background-color: #28464b;
      }

      &:visited {
        color: whitesmoke;
      }
    }
  }

  .blog-navigation-rectangle {
    height: 10px;
    width: 100px;
    background-color: #004fff;
  }
`

const BlogNavigation = () => {
  const [optionsOpen, setOptionsOpen] = useState(false)
  const [optionsOpenClass, setOptionsOpenClass] = useState("closed")

  const handleDropDownOptionsClick = () => setOptionsOpen(!optionsOpen)

  const setOptionsOpenEffect = () => {
    setOptionsOpenClass(optionsOpen ? "open" : "closed")
  }

  useEffect(setOptionsOpenEffect, [optionsOpen])
  return (
    <StyledBlogNavigation>
      <div
        className="blog-navigation-dropdown"
        onClick={handleDropDownOptionsClick}
      >
        <div className={`blog-navigation-options ${optionsOpenClass}`}>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener"
            className="blog-navigation-option"
          >
            Option 1
          </a>
          <a className="blog-navigation-option">Option 2</a>
          <a className="blog-navigation-option">Option 3</a>
        </div>
      </div>
      <div className="blog-navigation-rectangle"></div>
    </StyledBlogNavigation>
  )
}

export default BlogNavigation
