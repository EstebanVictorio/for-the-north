const path = require('path')
const root = path.resolve(__dirname)
const aliases = {
  queries: `${root}/queries`,
  schema: `${root}/schema`,
  components: `${root}/components`,
  hooks: `${root}/hooks`,
  utils: `${root}/utils`,
}

module.exports = aliases