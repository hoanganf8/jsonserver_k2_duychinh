const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const cors = require("cors");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
server.use(middlewares);
server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});
