import { Layout, BlogNavigation } from "@ftn/patterns"
import styled from "styled-components"
import ReactMD from "react-markdown"
import PostNavigation from "components/navigation/post-navigation"
import RecentPostsNavigation from "components/navigation/recent-posts-navigation"
import { QueryCreators, useQuery } from "@ftn/gss"

const StyledHeading = styled.h1`
  font-size: 150px;
  text-align: center;
  margin-bottom: 40px;
`

const StyledSubtitle = styled.h2`
  margin: 0;
  font-size: 70px;
  text-align: center;
`

const Home = () => {
  const { recent } = QueryCreators
  const { loading, error, data } = useQuery(...recent("reactjs"))

  return (
    <Layout>
      <BlogNavigation />
      <StyledHeading>For The North</StyledHeading>
      <StyledSubtitle>React Edition</StyledSubtitle>
      <PostNavigation />
      <RecentPostsNavigation />
    </Layout>
  )
}

export default Home
