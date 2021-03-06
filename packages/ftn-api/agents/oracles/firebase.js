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
    const documents = {}
    const query = await this.db.collection(name)
    const snapshot = await query.get()
    snapshot.docs.map(snapshotDoc => {
      documents[snapshotDoc.id] = snapshotDoc.data()
    })
    return documents
  }

  async readDocumentCollectionData(collection, document, name) {
    if (!this.db) {
      throw new FireStoreOff()
    }

    const query = await this.db.collection(collection).doc(document)
    const snapshot = await query.get()
    const data = snapshot.get(name)
    return data
  }
}

module.exports = Firebase
