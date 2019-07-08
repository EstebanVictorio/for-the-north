import styled from 'styled-components'
import { Link } from '@ftn/patterns'

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
        </ol>
      </div>
      <div className="post-index-list">
        <h2>Want to empower your tooling?</h2>
        <ol>
        </ol>
      </div>
    </StyledColumns>
)


export default PostList