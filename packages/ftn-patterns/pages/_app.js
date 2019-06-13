import React from 'react';
import App from 'next/app';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.theme = "sunny-desert"
    
    return {
      pageProps
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return <Component  {...pageProps} />;
  }
}

export default MyApp;