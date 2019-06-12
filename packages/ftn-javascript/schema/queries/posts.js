const post = () => ({
  id: 1,
  author: 'Esteban',
  text:'Post test'
})

const posts = () => [
  {
    id: 2,
    author: 'Esteban',
    text:'Post 2'
  },
  {
    id: 3,
    author: 'Esteban',
    text:'Post 3'
  },
]

module.exports = {
  post,
  posts,
}