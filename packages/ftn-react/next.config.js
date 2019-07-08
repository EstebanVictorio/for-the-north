const prod = process.env.NODE_ENV === 'production'
module.exports = {
<<<<<<< HEAD
  assetPrefix: '',
=======
  assetPrefix: prod ? 'http://evictorio.com/ftn-react' : ''
>>>>>>> 85e61db2288224620415e9e4ae76a28156e02192
}