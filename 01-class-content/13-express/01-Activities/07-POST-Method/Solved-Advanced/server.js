const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 8080;

async function handleRequest(req, res) {
  const { url: path } = req;

  if (path === "/thanks") {
    try {
      return await renderThankYouPage(req, res);
    } catch (e) {
      console.log(e);
      return res.end("<html><head><title>Oops</title></head><body><h1>Error</h1></body></html>");
    }
  } else {
    try {
      return await renderWelcomePage(req, res);
    } catch(e) {
      console.log(e);
      return res.end("<html><head><title>Oops</title></head><body><h1>Error</h1></body></html>");
    }
  }
}

function renderWelcomePage(req, res) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
      if (err) {
        res.writeHead(500);
        reject(err);
      }
      res.writeHead(200, {"Content-Type": "text/html"});
      resolve(res.end(data));
    });
  });
}

function renderThankYouPage(req, res) {
  let requestData = "";

  let myHTML =
    "<html><head><title>Hello Noder!</title></head><body><h1>Oops, I didn't get any data</h1></body></html>";
  return new Promise((resolve, reject) => {
    req.on("data", (data) => {
      requestData += data;
      console.log("Post succeeded!\n", requestData);

      myHTML = `<html><head><title>Hello Noder!</title></head><body><h1>Thank you for the data: </h1><code>${requestData}</code></body></html>`;
    });

    req.on("end", () => {
      res.writeHead(200, {"Content-Type": "text/html"});
      resolve(res.end(myHTML));
    });
  });
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
