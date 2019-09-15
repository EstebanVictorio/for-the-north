import React from "react"
import { Consumer } from "./context"
import Link from "next/link"

const AppLink = ({ href, children, prefetch }) => (
  <Consumer>
    {basePath => (
      <Link href={`${basePath}${href}`} prefetch={prefetch}>
        {children}
      </Link>
    )}
  </Consumer>
)

export default AppLink
