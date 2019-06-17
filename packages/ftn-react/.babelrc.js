const path = require('path')
const aliases = require('./aliases')

const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root:[ path.resolve(__dirname) ],
      alias: aliases
    }
  ],
  [
    require.resolve('babel-plugin-styled-components'),
    {
      ssr: true,
      displayName: true,
      preprocess: true,
    },
  ],
  [
    require.resolve('babel-plugin-import-graphql')
  ]
]


module.exports = {
  presets: ['next/babel'],
  plugins
}