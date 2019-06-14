import React from 'react';
import Theme from 'themes'
import App from 'next/app';

class Blog extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    
    return {
      pageProps
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Theme selected="slim">
        <Component  {...pageProps} />
      </Theme>
    )
  }
}

export default Blog;