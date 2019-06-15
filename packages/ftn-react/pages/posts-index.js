import { Layout } from '@ftn/patterns/dist'
import Link from 'next/link'
import styled from 'styled-components'


const StyledColumns = styled.div`
  display: flex;
  flex-direction: row;


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
              <a>Components: The <code>class</code> component</a>
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
        </ol>
      </div>
    </StyledColumns>
  </Layout>
)


export default PostsIndex