import styled from "styled-components"
import PostCard from "components/post-card"
import ReactSvg from "react-svg"

const StyledRecentPostsNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .recent-title {
    margin: 0 50px;
  }
`

const RecentPostsNavigation = () => (
  <StyledRecentPostsNavigation>
    <h2 className="recent-title">Recently on FTN:</h2>
    <PostCard
      postTitle="Welcome to React!"
      icon={<ReactSvg src="/static/icons/react.svg" />}
    />
  </StyledRecentPostsNavigation>
)

export default RecentPostsNavigation
