class NotFound extends Error {
  constructor(additionalMessage = "") {
    this.message = `Not found Error : ${additionalMessage}`
  }
}

module.exports = NotFound
