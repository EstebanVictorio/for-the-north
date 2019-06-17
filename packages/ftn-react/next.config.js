const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx|js)$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})