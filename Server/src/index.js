"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const hello_router_1 = require("./routes/hello.router");
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
app.use("/hello", hello_router_1.HelloRouteur);
