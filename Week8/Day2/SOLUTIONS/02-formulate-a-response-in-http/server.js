// Your code here
const http = require("http");

const server = http.createServer((req, res) => {
  // main server code here
  const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;

  // status code
  res.statusCode = 200;
  // set any headers
  res.setHeader("Content-Type", "text/html");
  
  // return response
  // res.write(responseBody);
  // return res.end()

  // or 

  return res.end(responseBody);
});

const port = 5000;

server.listen(port, () => console.log(`listening on port ${port}`));
