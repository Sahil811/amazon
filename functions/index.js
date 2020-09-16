const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")(
  "sk_test_51H1ZAEFdme2uT4qpK3AuuGr2ciI4Hh3afgaRfID0si1qV5bMl9XlEUcCalffZf1BfMD62sC7fYxxpoR76bxp0Sr600qCS8OdNy"
);

// API

// APP CONFIG
const app = express();

// MIDDLEWARE
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTER
app.get("/", (request, response) => response.status(200).send("hello word"));

// LISTEN COMMAND
exports.api = functions.https.onRequest(app);
