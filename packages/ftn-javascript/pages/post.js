import 'isomorphic-fetch'
import {useEffect} from 'react'
import Layout from 'components/styled/layout'
const Post = ({posts}) => {
  console.log('Props:',posts)
  return (
    <Layout>
      {
        posts.map(post => <div>{post.id}</div>)
      }
    </Layout>
  )
}


Post.getInitialProps = async () => {
  let response = await fetch('http://localhost:3001/api/posts/3', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{ posts(id:${3}) {
        id text author url
      } }`
    })
  }).catch(reason => console.log('Err:', reason))
  let { data } = await response.json()
  let { posts } = data
  console.log('Data:')
  console.log(posts)
  return {
    posts,
  }
}

export default Post