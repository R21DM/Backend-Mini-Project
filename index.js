const http = require("http");
const express = require("express");
const app = express();
const mysql = require("mysql");
const server = http.createServer(app);
const cors = require("cors");

const PORT = 8000;

app.use(express.json());
app.use(cors());

//Database
const connection = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "test",
  database: "db_project",
});

//Controller
app.get("/", (req, res) => {
  connection.query("SELECT * FROM user;", (err, result) => {
    res.status(200).send(result);
  });
});

connection.connect();

server.listen(PORT, () => {
  console.log("Socket server is running at port:", PORT);
});
