function enableCORS(req, res, next) {
  console.log("Enabling cors...")
  res.setHeader("Access-Control-Allow-Headers", "*")
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS")
  res.setHeader("Allow", "POST,GET,OPTIONS")
  next()
}

module.exports = enableCORS
