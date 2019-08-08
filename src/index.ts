import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    // we're connected!
});

const foo = { bar: "baz", baz: "super", foobar: "someOtherThing"};

app.get("/", (req, res) => res.send(foo));

app.listen(port);
