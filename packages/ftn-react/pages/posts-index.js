import { Layout } from '@ftn/patterns/dist'
import styled from 'styled-components'
import PostList from 'components/post-list'


const PostsIndex = ({ theme }) => (
  <Layout theme={theme}>
    <PostList />
  </Layout>
)


export default PostsIndex