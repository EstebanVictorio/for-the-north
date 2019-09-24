import styled from "styled-components"
import { Link } from "@ftn/patterns"
import PostCard from "components/post-card"
import ReactSvg from "react-svg"

const StyledColumns = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  @media screen and (min-width: 144px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  .post-list-type-title {
    text-align: center;
  }

  .post-index-list {
    .post-list {
      display: flex;
      margin: 0;
      padding: 0;
      align-items: center;
      list-style-type: none;
      overflow-y: auto;
      flex-direction: column;
    }

    .empty-list {
      text-align: center;
      width: 350px;
      box-sizing: border-box;
      margin: 14px 50px;
    }

    .post-link {
      text-decoration: none;
    }

    .post-link:visited {
      color: inherit;
    }
  }
`

const PostList = ({ learning, tooling }) => (
  <StyledColumns>
    <div className="post-index-list">
      <h2 className="post-list-type-title">Learn</h2>
      <ul className="post-list">
        {learning.map(learningPost => {
          return (
            <li>
              <Link
                href={`/learning/[post]`}
                as={`/learning/${learningPost.id}`}
              >
                <a className="post-link">
                  <PostCard
                    postTitle={learningPost.title}
                    icon={
                      <ReactSvg
                        src={learningPost.iconUrl}
                        loading={() => "Loading svg..."}
                        wrapper="span"
                        afterInjection={(err, svg) => {
                          console.log(err)
                          return err ? "Error with SVG loading" : svg
                        }}
                      />
                    }
                  />
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
    <div className="post-index-list">
      <h2 className="post-list-type-title">Tooling</h2>
      <ul className="post-list">
        {tooling && tooling.length ? (
          tooling.map(toolingPost => (
            <li>
              <PostCard
                postTitle={toolingPost.title}
                icon={<ReactSvg src={toolingPost.iconUrl} />}
              />
            </li>
          ))
        ) : (
          <p className="empty-list">No Tooling posts yet.</p>
        )}
      </ul>
    </div>
  </StyledColumns>
)

export default PostList
