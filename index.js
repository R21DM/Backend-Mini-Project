const http = require("http"); // 1. Untuk create server
const express = require("express"); // 2. Import
const app = express(); // 3. Running express, bisa baca json
const mysql = require("mysql"); // 4. Connect database
const server = http.createServer(app); // 5.
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

//Controller POST
app.post("/", (req, res) => {
  console.log(req.body);

  const USERNAME = req.body.username;
  const PASSWORD = req.body.password;
  const EMAIL = req.body.email;

  const QUERY =
    "INSERT INTO `db_user_register`.`data_user` (`username`, `password`, `email`) VALUES ('" +
    USERNAME +
    "', '" +
    PASSWORD +
    "', '" +
    EMAIL +
    "');";
  
//   console.log(QUERY);
  
  connection.query(QUERY, (err, result) => {
    res.status(200).send(result);
  });
});

connection.connect();

server.listen(PORT, () => {
  console.log("Socket server is running at port:", PORT);
});
