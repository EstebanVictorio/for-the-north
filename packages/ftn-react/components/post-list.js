import styled from 'styled-components'
import Link from 'next/link'

const StyledColumns = styled.div`
  display: flex;
  

  @media screen and (min-width: 144px){
    flex-direction: column;
  }

  @media screen and (min-width: 1024px){
    flex-direction: row;
  }


  .post-index-list {
    margin: 10px;
    flex-grow: 1;

    .post-entry {
      margin: 15px 0;
    }
  }
`

const PostList = () => (
  <StyledColumns>
      <div className="post-index-list">
        <h2>Eager to learn?</h2>
        <ol>
        <li className="post-entry">
            <Link prefetch href="/posts/welcome-to-react">
              <a>Welcome to React!</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link prefetch href="/posts/how-to-write-components">
              <a>Components: How to write them</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link>
              <a>Components: <code>props</code> and how to take advantage of them (coming soon)</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link>
              <a>Components: How do they actually work (coming soon)</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link>
              <a>Components: The <code>class</code> component (coming soon)</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link>
              <a>Components: Enter <code>state</code> (coming soon)</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link>
              <a>Components: Lifecycle (coming soon)</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link>
              <a>Components: Intro to Hooks (coming soon)</a>
            </Link>
          </li>
        </ol>
      </div>
      <div className="post-index-list">
        <h2>Want to empower your tooling?</h2>
        <ol>
          <li className="post-entry">
            <Link>
              <a>Set up a React Environment</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link>
              <a>Hot Reload: the hard way</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link>
              <a>Hot Reload: the much easier way</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link>
              <a>Styled Components</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link>
              <a><code>styled-components</code> (nope, not a duplicate)</a>
            </Link>
          </li>
        </ol>
      </div>
    </StyledColumns>
)


export default PostList