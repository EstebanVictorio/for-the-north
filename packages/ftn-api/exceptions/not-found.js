class NotFound extends Error {
  constructor(additionalMessage = "") {
    super()
    this.message = `Not found Error : ${additionalMessage}`
  }
}

module.exports = NotFound
