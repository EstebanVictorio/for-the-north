import App from 'next/app'


class BlogApp extends App {
  render() {
    const { Component } = this.props
    return <Component />
  }
}


export default BlogApp