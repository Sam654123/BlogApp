const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mogodb_URL"
  )
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
