const path = require('path')
const root = './src'
const aliases = {
  mutations: `${root}/mutations`,
  queries: `${root}/queries`,
  root: `${root}/root.js`
}

const presets = 
[
  ['@babel/preset-env'],
]


const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root:[ root ],
      alias: aliases
    }
  ],
  [
    require.resolve('babel-plugin-import-graphql')
  ]
]


module.exports = {
  presets,
  plugins
}