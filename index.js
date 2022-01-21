const http = require("http"); // 1. Untuk create server
const express = require("express"); // 2. Import
const app = express(); // 3. Running express, bisa baca json
const mysql = require("mysql"); // 4. Connect database
const server = http.createServer(app); // 5.
const cors = require("cors");

const PORT = 8000;

app.use(express.json());
app.use(cors());

//Database ganti*
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tyo06081997",
  database: "db_user_register",
});

//Controller post aja*
app.post("/", (req, res) => {
  console.log(req.body);
  //"INSERT INTO `db_user_register`.`data_user` (`username`, `password`, `email`) VALUES ('Arif', 'syaogi', 'syaogi@mail.com');",
  //INSERT INTO `db_user_register`.`data_user` (`username`, `password`, `email`) VALUES (`qwerty`, `qwerty`, `qwerty`);
  //"INSERT INTO `db_user_register`.`data_user` (`username`, `password`, `email`) VALUES (`qwerty`, `qwerty`, `qwerty`);"
  // const QUERY =
  //   '"INSERT INTO `db_user_register`.`data_user` (`username`, `password`, `email`) VALUES (`' +
  //   req.body.username +
  //   "', '" +
  //   req.body.password +
  //   "', '" +
  //   req.body.email +
  //   "');";
  const USERNAME = req.body.username;
  const PASSWORD = req.body.password;
  const EMAIL = req.body.email;

  const QUERTY =
    "INSERT INTO `db_user_register`.`data_user` (`username`, `password`, `email`) VALUES ('" +
    USERNAME +
    "', '" +
    PASSWORD +
    "', '" +
    EMAIL +
    "');";
  console.log(QUERTY);
  connection.query(QUERTY, (err, result) => {
    res.status(200).send(result);
    res.status(400).send(err);
  });
});

connection.connect();

server.listen(PORT, () => {
  console.log("Socket server is running at port:", PORT);
});

// POST method route
// app.post("/", function (req, res) {
//   res.send("POST request to the homepage");
// });
