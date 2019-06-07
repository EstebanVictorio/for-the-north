const path = require('path')
const root = path.resolve(__dirname)
const aliases = {
  components: `${root}/components`,
  hooks: `${root}/hooks`,
  utils: `${root}/utils`,
}

module.exports = aliases