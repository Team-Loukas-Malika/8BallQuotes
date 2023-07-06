const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

const Router = require ("./router/.js");
const Router = require ("./router/.js");


app.use(
    cors({
      origin: "*",
    })
  );

app.use("/", );
app.use("/", );



const PORT = 3636;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});