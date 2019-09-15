import styled from "styled-components"

const StyledPostCard = styled.div`
  display: flex;
  margin: 0 50px;
  cursor: pointer;
  border-radius: 2px;
  padding: 10px 50px;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  background-color: black;
  border: 1px solid #28464b;

  svg {
    width: 80px;
    margin-right: 40px;
  }
`

const PostCard = ({ icon, postTitle }) => (
  <StyledPostCard>
    {icon}
    <h4>{postTitle}</h4>
  </StyledPostCard>
)

export default PostCard
