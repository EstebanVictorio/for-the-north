const post = (id) => {
  console.log('ID:',id)
  return ({
    id,
    author: 'Esteban',
    text:`Post test ${id}`
  })
}

const posts = ({ id }) => {
  console.log(id)
  return [
    {
      id: 2,
      author: 'Esteban',
      text:'Post 2',
      url: '/post/2'
    },
    {
      id: 3,
      author: 'Esteban',
      text:'Post 3',
      url: '/post/3'
    },
  ].filter(post => post.id === id)
}

module.exports = {
  post,
  posts,
}