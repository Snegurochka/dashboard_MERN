import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
const app = express();

app.get("/", (req, res) => {
  res.send("ok");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server Up");
});
