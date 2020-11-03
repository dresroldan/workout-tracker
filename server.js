const express = require("express");
const mongoose = require("mongoose");
var morgan = require('morgan')




const PORT = process.env.PORT || 7090;

const app = express();
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/htmlroute.js"));



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
