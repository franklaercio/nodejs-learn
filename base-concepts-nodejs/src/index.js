const express = require('express');

const app = express();

app.use(express.json());

app.get("/courses", (request, response) => {
  return response.json([
    "Curso 1",
    "Curso 2",
    "Curso 3"
  ]);
});

app.post("/courses", (request, response) => {
  return response.json([
    "Curso 1",
    "Curso 2",
    "Curso 3"
  ]);
});

app.put("/courses/:id", (request, response) => {
  return response.json([
    "Curso 6",
    "Curso 2",
    "Curso 3"
  ]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json([
    "Curso 6",
    "Curso 7",
    "Curso 3"
  ]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json([
    "Curso 6",
    "Curso 7"
  ]);
});

app.listen(3333);