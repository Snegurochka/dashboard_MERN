import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import 'dotenv/config';

import schema from "./schema";
import { connectDB } from "./config/db";

// Connect to MongoDB
connectDB();

// Server
const app = express();

app.get("/", (req, res) => {
  res.send("ok");
});

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen('5000', () => {
  console.log("Server Up");
});
