import styled from "styled-components"
import { Link } from "@ftn/patterns"
import ReactSvg from "react-svg"

const StyledPostNavigation = styled.nav`
  display: flex;
  justify-content: center;
  margin: 40px 0;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .post-links-list {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .post-link {
      color: whitesmoke;
    }
  }

  .navigation-separator {
    height: 1px;
    margin: 0 15px;
    width: 120px;
    border: none;
    background-color: #444444;
  }

  .icon {
  }

  .icon,
  .icon > svg {
    width: 120px;
  }

  .post-link {
    color: whitesmoke;
    font-weight: bold;
  }

  .icon svg {
    animation-name: spin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`

const PostNavigation = () => (
  <StyledPostNavigation>
    <ul className="post-links-list">
      <Link href="/">
        <a className="post-link">Latest</a>
      </Link>
      <hr className="navigation-separator" />
      <ReactSvg src="/static/icons/react.svg" className="icon" />
      <hr className="navigation-separator" />
      <Link href="/">
        <a className="post-link">Posts</a>
      </Link>
    </ul>
  </StyledPostNavigation>
)

export default PostNavigation
