import { model, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userTable = model("user", new Schema({
  userId: {
    type: String,
    default: uuidv4
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}));

export default userTable;