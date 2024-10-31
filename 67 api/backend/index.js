import express from "express";
import postRouter from "./routes/post.js";

const app = express();
const port = 3001;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/post", postRouter);

app.listen(port, () => {
  console.log(
    `Blog application listening on port ${port}. Visit http://localhost:${port}.`
  );
});
