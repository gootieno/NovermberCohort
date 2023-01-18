const http = require("http");
const fs = require("fs");

const getContentType = (extension) => {
  // switch (extension) {
  //   case "css":
  //     return "text/css";
  //   case "jpg" || "jpeg":
  //     return "image/jpeg";
  //   default:
  //     return "text/plain";
  // }

  if (extension === "css") {
    return "text/css";
  } else if (extension === "jpg" || extension === "jpeg") {
    return "image/jpeg";
  } else {
    return "text/plain";
  }
};

const server = http.createServer((req, res) => {
  // Your code here
  if (req.method === "GET" && req.url.startsWith("/static")) {
    const urlParts = req.url.split("/static");
    console.log("url parts ", urlParts);

    const assetPath = urlParts[1];
    console.log("asset path ", assetPath);

    const resBody = fs.readFileSync("./assets" + assetPath); // ./assets/css/application.css

    const extension = assetPath.split(".")[1];
    console.log("ext ", extension);

    res.statusCode = 200;

    const contentType = getContentType(extension);
    res.setHeader("Content-Type", contentType);

    return res.end(resBody);
  }

  if (req.method === "GET" && req.url === "/") {
    const resBody = fs.readFileSync("index.html", "utf-8");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(resBody);
  }
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
