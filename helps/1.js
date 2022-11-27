//! 05 (arajin das)

const http = require("http");//patrasti bana nodi meja mtnum es http-
import http from "http"//sranq nuyn bann en nshanakum

let count = 0;

const server = http.createServer((request, response) => {
  count++;

  switch (request.url) {//asumenq ete http - url-y (request url) 
    case "/students"://exni students
      response.write("students " + count);//response i mej (ekranin, brauzerum) gri students + county
      break;
    case "/tables":
      response.write("tables " + count);
      break;
    default:
      response.write("not found " + count);
  }
  response.end();//partadir end enq grum vor et gracy ekranin cuyc ta
});

server.listen(3000);//server enq sarqum localhost3000 porti vra, (vor jogi eli requesti jamanak vor url i requestina hetevalu)

