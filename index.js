const http = require("http");
const express = require("express");
const app = express();
const mysql = require("mysql");
const server = http.createServer(app);

const PORT = 8000;

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "test",
  database: "db_project",
});

app.get("/", (req, res) => {
  res.status(200).send("GET method online");
});

connection.connect();
// connection.query("SELECT * FROM user;", (err, res) => {
//   console.log(err, res);
// });

server.listen(PORT, () => {
  console.log("Socket server is running at port:", PORT);
  connection.query("SELECT * FROM user;", (err, res) => {
    console.log(err, res);
  });
});
