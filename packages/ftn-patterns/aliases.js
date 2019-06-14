const path = require('path')
const root = path.resolve(__dirname)
const aliases = {
  hooks: `${root}/hooks`,
  themes: `${root}/themes`,
  components: `${root}/components`,
  constants: `${root}/utils/constants`,
  layouts: `${root}/components/layouts`,
  navigation: `${root}/components/navigation`,
}

module.exports = aliases