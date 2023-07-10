const express = require("express");
const cors = require("cors");
const app = express();
const quoteRouter = require("./Router/quoteRouter");
const QuoteModel = require("./Models/quoteModel");
const mongoose = require("mongoose");


require("./connection");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/quote", quoteRouter);






const PORT = 3636 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
