const FileSystem = require("fs")
const { buildSchema } = require("graphql")
const getGraphQLServerMiddleware = require("express-graphql")
const { rootValue } = require("@ftn/schema")
const NotFound = require("exceptions/not-found")

class SchemaGateway {
  constructor(graphiql) {
    this.schemaSettings = {
      graphiql,
      rootValue
    }
  }

  setSchemaSettings(err, data, resolve, reject) {
    if (err) {
      console.log("Schema File could not be found")
      reject("Schema file could not be found")
    } else {
      console.log("Schema found!")
      const schema = buildSchema(data.toString())
      this.schemaSettings = {
        ...this.schemaSettings,
        schema
      }
      resolve()
    }
  }

  async readSchema(resolve, reject) {
    await FileSystem.readFile("schema/dsl.graphql", (err, data) =>
      this.setSchemaSettings(err, data, resolve, reject)
    )
  }

  async useSchema() {
    await new Promise((res, rej) => this.readSchema(res, rej))
    return getGraphQLServerMiddleware(this.schemaSettings)
  }
}

module.exports = SchemaGateway
