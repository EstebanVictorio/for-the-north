const isProd = process.env.NODE_ENV === "production"
module.exports = {
  assetPrefix: isProd
    ? "http://evictorio.com/ftn-react"
    : "http://localhost:3002"
}
