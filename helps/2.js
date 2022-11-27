//! 06 (2nd)

const http = require("http");
const fs = require("fs"); //fayleri het ashxatelu hamara(file system)

const delay = (ms) => {//prosty funkcian enq sarqum
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {//asum enq fs-n pathov gna u porci karda et fayly(pathy funkcian stanuma)
      if (err) reject(err);//ete error ka reject ara 
      else resolve(data);//ere chka resolve ara (aysinqn return ara data)
    });
  });
};

const server = http.createServer(async (request, response) => {//asinxron funkcia
  switch (request.url) {//naxord dasi nman
    case "/home": {
      try {//qani vor async await enq ogtagorcum partadira sa
        const data = await readFile("pages/home.html");
        response.write(data);
        response.end();
      } catch (err) {
        response.write("something bad happened");
        response.end();
      }
      break;
    }
    case "/about": {
      await delay(3000);//delay funkcian kanchum enq u asum 3 vrk tox spasi
      fs.readFile("pages/about.html", (err, data) => {//karainq sael verevi funkciai nman aneinq prosty chem anum🤷‍♂️
        if (err) response.write("some error ocurred");
        else response.write(data);
        response.end();
      });
      break;
    }
    default: {
      response.write("not found");
      response.end();
    }
  }
});

server.listen(3000);
