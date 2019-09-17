const FileSystem = require("fs")
const { buildSchema, validateSchema, GraphQLSchema } = require("graphql")
const getGraphQLServerMiddleware = require("express-graphql")
const SDL = require("@ftn/schema")
const NotFound = require("exceptions/not-found")

class SchemaGateway {
  constructor(graphiql) {
    console.log("SDL:", SDL)
    this.schemaSettings = {
      graphiql
    }
    // console.log(rootValue)
  }

  setSchemaSettings() {
    if (!validateSchema(SDL)) {
      reject("Invalid Schema file")
      throw new NotFound("Schema file is invalid,")
    } else {
      // const schema = buildSchema(data.toString())
      this.schemaSettings = {
        ...this.schemaSettings,
        SDL
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
    // await new Promise((res, rej) => this.readSchema(res, rej))
    this.setSchemaSettings()
    return getGraphQLServerMiddleware(this.schemaSettings)
  }
}

module.exports = SchemaGateway
