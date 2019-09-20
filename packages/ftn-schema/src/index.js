import { importSchema } from "graphql-import"
import path from "path"
const schemaPath = path.resolve("../ftn-schema/src/sdl.graphql")
const schemaString = importSchema(schemaPath)
export default {
  schemaString
}
