const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://apoorv654123:mongodb654123pass@cluster0.d7u1adi.mongodb.net/"
  )
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
