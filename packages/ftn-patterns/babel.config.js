const path = require('path')
const aliases = require('./aliases')

const presets = 
[
  ['@babel/preset-env'],
  ['@babel/preset-react']
]


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
  ]
]


module.exports = {
  presets,
  plugins
}