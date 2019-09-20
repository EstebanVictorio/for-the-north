const path = require("path")
const root = "./src"
const aliases = {
  utils: `${root}/utils`
}

const presets = [["@babel/preset-env"]]

const plugins = [
  [
    require.resolve("babel-plugin-module-resolver"),
    {
      root: [root],
      alias: aliases
    }
  ]
]

module.exports = {
  presets,
  plugins
}
