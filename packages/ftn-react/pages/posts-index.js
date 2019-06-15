import { Layout } from '@ftn/patterns/dist'
import Link from 'next/link'
import styled from 'styled-components'


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

const PostsIndex = ({ theme }) => (
  <Layout theme={theme}>
    <StyledColumns>
      <div className="post-index-list">
        <h2>Eager to learn?</h2>
        <ol>
        <li className="post-entry">
            <Link href="/posts/1">
              <a>Welcome to React!</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link href="/posts/1">
              <a>Components: How to write them</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link href="/posts/1">
              <a>Components: How do they actually work</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link href="/posts/1">
              <a>Components: <code>props</code> and how to take advantage of them</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link href="/posts/1">
              <a>Components: The <code>class</code> component</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link href="/posts/1">
              <a>Components: Enter <code>state</code></a>
            </Link>
          </li>
          <li className="post-entry">
            <Link href="/posts/1">
              <a>Components: Lifecycle</a>
            </Link>
          </li>
        </ol>
      </div>
      <div className="post-index-list">
        <h2>Want to empower your tooling?</h2>
        <ol>
          <li className="post-entry">
            <Link href="/posts/1">
              <a>Set up a React Environment</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link href="/posts/1">
              <a>Hot Reload: the hard way</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link href="/posts/1">
              <a>Hot Reload: the much easier way</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link href="/posts/1">
              <a>Styled Components</a>
            </Link>
          </li>
          <li className="post-entry">
            <Link href="/posts/1">
              <a><code>styled-components</code> (nope, not a duplicate)</a>
            </Link>
          </li>
        </ol>
      </div>
    </StyledColumns>
  </Layout>
)


export default PostsIndex