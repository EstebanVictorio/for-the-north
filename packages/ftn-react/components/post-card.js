import styled from "styled-components"

const StyledPostCard = styled.div`
  display: flex;
  height: 100px;
  margin: 14px 50px;
  cursor: pointer;
  border-radius: 2px;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  background-color: black;
  border: 1px solid #28464b;

  svg {
    width: 80px;
  }
`

const PostCard = ({ icon, postTitle }) => (
  <StyledPostCard>
    {icon}
    <h4>{postTitle}</h4>
  </StyledPostCard>
)

export default PostCard
