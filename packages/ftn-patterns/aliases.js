const path = require('path')
const root = path.resolve(__dirname)
const aliases = {
  hooks: `${root}/hooks`,
  themes: `${root}/themes`,
  components: `${root}/components`,
  icons: `${root}/components/icons`,
  constants: `${root}/utils/constants`,
  layouts: `${root}/components/layouts`,
  'static-icons': `${root}/static/icons`,
  navigation: `${root}/components/navigation`,
}

module.exports = aliases