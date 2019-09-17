const FirebaseAdmin = require("firebase-admin")
const AccountMetaKey = require("resources/for-the-north-firebase-adminsdk-qw8om-5747c96295.json")
const FireStoreOff = require("exceptions/firestore-store-off")
class Firebase {
  constructor() {
    this.admin = FirebaseAdmin
    this.serviceAccount = AccountMetaKey
    this.settings = {
      credential: this.admin.credential.cert(this.serviceAccount)
    }
    this.db = null
  }

  ignite() {
    this.admin.initializeApp(this.settings)
    this.db = this.admin.firestore()
  }

  async readCollection(name) {
    if (!this.db) {
      throw new FireStoreOff()
    }
    const collection = []
    const query = await this.db.collection(name)
    const snapshot = await query.get()
    snapshot.docs.map(snapshotDoc => collection.push({ ...snapshotDoc.data() }))
    return collection
  }

  async readDocumentCollection(name, document, collection) {
    if (!this.db) {
      throw new FireStoreOff()
    }

    const documentCollections = []
    const query = await this.db.collection(name).doc(document)
    const collections = await query.collection(collection)
    documentCollections.map(collection =>
      documentCollections.push({ ...collection })
    )
    return documentCollections
  }
}

module.exports = Firebase
