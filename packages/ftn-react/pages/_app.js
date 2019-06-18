import React from 'react';
import { Theme } from '@ftn/patterns'
import App from 'next/app';
import CodeHLBaseStyles from 'utils/code-hl-base-styles'

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
      <>
      <CodeHLBaseStyles />
      <Theme selected="snowy-plain">
        <Component  {...pageProps} />
      </Theme>
      </>
    )
  }
}

export default Blog;