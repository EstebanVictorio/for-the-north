import { Theme, NavigationProvider } from "@ftn/patterns"
import App from "next/app"
import CodeHLBaseStyles from "utils/code-hl-base-styles"
import { BASE_PATH } from "utils/constants"

class Blog extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    let basePath = process.env.NODE_ENV === "production" ? BASE_PATH : ""

    return {
      basePath,
      pageProps
    }
  }

  render() {
    const { Component, pageProps, basePath } = this.props
    return (
      <>
        <CodeHLBaseStyles />
        <Theme selected="night-dark">
          <NavigationProvider value={basePath}>
            <Component {...pageProps} />
          </NavigationProvider>
        </Theme>
      </>
    )
  }
}

export default Blog
