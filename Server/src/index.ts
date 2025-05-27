const express = require("express");
import { HelloRouteur } from "./routes/hello.router";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/hello", HelloRouteur);
