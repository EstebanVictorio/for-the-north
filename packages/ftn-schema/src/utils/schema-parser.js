import { importSchema } from "graphql-import"

class SchemaParser {
  parseSchema(path) {
    const SDL = importSchema(path)
    return SDL
  }
}

export default SchemaParser
