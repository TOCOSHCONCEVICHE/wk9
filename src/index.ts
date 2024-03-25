//import express, { Request,Response } from "express";

import { Request, Response } from "express"

const express = require('express')
const app = express()

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World')
})

app.get('/hello', (req: Request, res:Response) => {
  const name = req.query.name

  if (name) {
    res.send(`Hello ${name}! Welcome to the best server ever!`);
  } else {
    res.send(`Hello! Welcome to the best server ever!`);
  }
})

app.listen(3000, () => {
  console.log(`Server is running`);
})