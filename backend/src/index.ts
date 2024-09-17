import cors from "cors";
import express from "express";
import dummyData from "./dummyData";

const app = express();
const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
    res.send(dummyData);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
