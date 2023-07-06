const express = require("express");
require("./connection")
const cors = require("cors");
const app = express();
app.use(express.json());

const quoteRouter = require ("./Router/quoteRouter");


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