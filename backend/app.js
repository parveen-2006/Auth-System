const express = require("express");
const app = express();
const PORT = 3000;
const userRoute = require("./Routes/userRoute.js");
const authRoute = require("./Routes/authRoute.js");
const cors = require("cors")

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRoute);
app.use("/auth", authRoute);


app.listen(PORT, () => {
  console.log(`running on PORT`);
});