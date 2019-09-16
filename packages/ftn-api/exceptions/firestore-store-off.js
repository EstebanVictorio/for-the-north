class FirebaseStoreOff extends Error {
  constructor(additionalMessage = "") {
    super()
    this.message = `Firebase Error : Firestore Off`
  }
}

module.exports = FirebaseStoreOff
