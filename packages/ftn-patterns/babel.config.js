const path = require('path')
const root = './src'
const aliases = {
  themes: `${root}/themes`,
  components: `${root}/components`,
  icons: `${root}/components/icons`,
  constants: `${root}/utils/constants`,
  layouts: `${root}/components/layouts`,
  navigation: `${root}/components/navigation`,
}

const presets = 
[
  ['@babel/preset-env'],
  ['@babel/preset-react']
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