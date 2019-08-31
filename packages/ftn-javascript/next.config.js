const isProd = process.env.NODE_ENV === "production"
module.exports = {
  assetPrefix: isProd
    ? "http://evictorio.com/ftn-javascript"
    : "http://localhost:3001"
}
