import express from "express";
import routes from "./src/routes/crm.router";
import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import bodyParser from "body-parser";
import Contact from "./src/models/crm.json"
const typeorm = require("typeorm");

const app = express();
const PORT = 3000;
const EntitySchema = typeorm.EntitySchema;

(async () => {
  await createConnection({
    "type": "mysql", 
    "host": "localhost", 
    "port": 3306, 
    "username": "rotour", 
    "password": "Passw0rd", 
    "database": "lkdlrnnodejs",
    "synchronize": true, 
    "logging": false, 
    entities: [new EntitySchema(require("./src/models/crm.json"))],
  });
})();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.use(express.static('public'));

app.get("/", (req, res) => {
  getRepository("Contact").save({
    firstname: "Hola",
    lastname: "Que tal",
  });
  res.send(`Learning Node&Express`);
});

app.listen(PORT, () => {
  console.log(`Server node & express started on http://localhost:${PORT}`);
});
