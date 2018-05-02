const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 8080;

const handleRequest = (req, res) => {
  const { url: path } = req;

  switch (path) {
    case "/food":
    case "/movies":
    case "/frameworks":
      return renderHTML(`.${path}.html`, res);

    default:
      return renderHTML("./index.html", res);
  }
};


const renderHTML = async (filepath, res) => {
  try {
    const pageData = await readFile(filepath);
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(pageData);
  } catch(e) {
    console.log("Problem! ", e);
  }
}

const readFile = (filePath, res) => new Promise((resolve, reject) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      reject(err)
    }
    resolve(data);
  });
});

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
