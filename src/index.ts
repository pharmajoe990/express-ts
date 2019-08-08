import express from "express";

const app = express();
const port = 3000;

const foo = { bar: "baz", baz: "super", foobar: "someOtherThing"};

app.get("/", (req, res) => res.send(foo));

app.listen(port);
