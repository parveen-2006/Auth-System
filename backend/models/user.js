const mongoose = require("mongoose");
main()
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/AuthSystem");
}

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
