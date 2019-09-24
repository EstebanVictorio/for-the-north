import styled from "styled-components"

const StyledPostCard = styled.div`
  display: flex;
  width: 350px;
  height: 100px;
  margin: 14px 50px;
  border-radius: 2px;
  align-items: center;
  box-sizing: border-box;
  background-color: black;
  border: 1px solid #28464b;
  justify-content: space-between;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    color: black;
    background-color: #61dafb;
    svg {
      path {
        fill: black;
      }
    }
  }

  svg {
    width: 120px;
    height: 80px;
    path {
      fill: #61dafb;
    }
  }

  .post-card-icon-container {
    padding: 0;
    margin: 0;
  }

  .post-card-title {
    text-align: center;
    flex-grow: 1;
  }
`

const PostCard = ({ icon, postTitle }) => (
  <StyledPostCard>
    <figure className="post-card-icon-container">{icon}</figure>
    <h4 className="post-card-title">{postTitle}</h4>
  </StyledPostCard>
)

export default PostCard
