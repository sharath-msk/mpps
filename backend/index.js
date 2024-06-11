const connectToMongo = require("./db");
var cors = require('cors')

connectToMongo();



const express = require("express");
const app = express();
app.use(cors())
const port = 4000;

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/parts", require("./routes/parts"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${4000}`);
});
