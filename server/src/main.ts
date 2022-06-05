import { createServer } from '@graphql-yoga/node'
import { execute, parse } from "graphql";
import { schema } from "./schema";

async function main() {
  // const myQuery = parse(/* GraphQL */ `
  // query {
  //     healthCheck
  //   }
  // `);

  // const result = await execute({
  //   schema,
  //   document: myQuery,
  // });
  // console.log("result :>> ", result?.data?.healthCheck);
  
  
  const server = createServer({ schema })
  await server.start()

}

main();