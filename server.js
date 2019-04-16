const mongoose = require("mongoose");
const mongoDB = "mongodb://erick:tech.2019@ds139956.mlab.com:39956/citartech";
mongoose.connect(mongoDB, { useNewUrlParser: true });
const app = require("./src/app");

app.listen(process.env.PORT || 3000);