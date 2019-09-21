const path = require("path")
const root = "./src"
const aliases = {
  "query-creators": `${root}/query-creators`
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
