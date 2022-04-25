const http = require("http");
const server = http.createServer();

console.log("> Environment");
console.log(process.env);

server
  .on("request", (request, response) => {
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();

        console.log(`==== ${request.method} ${request.url}`);
        console.log("> Headers");
        console.log(request.headers);

        console.log("> Body");
        console.log(body);
        response.end();
      });
  })
  .listen(process.env.PORT || 3000);
