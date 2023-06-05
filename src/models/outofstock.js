import mongoose from "mongoose";

const { Schema } = mongoose;

const outofstockSchema = new Schema({
  shelf: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
});

const OutOfStock = mongoose.model("OutOfStock", outofstockSchema);

export default OutOfStock;