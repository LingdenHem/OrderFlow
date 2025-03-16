import mongoose from "mongoose";
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
});
export const Food = mongoose.model("Food", foodSchema);
