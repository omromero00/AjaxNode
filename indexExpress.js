const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Escuchando en: Http://localhost:3000")
});

app.get("/", (request, response) => {
    console.log(request.url);
    response.end("Hola Mundo con Express");
});