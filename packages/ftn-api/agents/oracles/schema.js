const { SCHEMA_QUERIES } = require("constants/schema-keys")
const BlogController = require("controllers/blog-controller")
const { buildSchema, validateSchema } = require("graphql")
const getGraphQLServerMiddleware = require("express-graphql")
const {
  default: { schemaString }
} = require("@ftn/schema")
const FirebaseAgent = require("agents/oracles/firebase")

const NotFound = require("exceptions/not-found")

class Schema {
  constructor(graphiql) {
    this.firebaseAgent = new FirebaseAgent()
    this.firebaseAgent.ignite()
    this.blogController = new BlogController(this.firebaseAgent)
    this.schemaSettings = {
      graphiql
    }
  }

  setSchemaSettings() {
    const schema = buildSchema(schemaString)
    if (!validateSchema(schema)) {
      throw new NotFound("Schema file is invalid")
    } else {
      this.schemaSettings = {
        ...this.schemaSettings,
        schema,
        rootValue: this.blogController
      }
    }
  }

  async useSchema() {
    this.setSchemaSettings()
    return getGraphQLServerMiddleware(this.schemaSettings)
  }
}

module.exports = Schema
