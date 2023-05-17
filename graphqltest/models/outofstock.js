/*import mongoose from "mongoose";

const Schema = mongoose.Schema

const outofstock = new Schema({
    shelf: Number,
    time: String
});

export default mongoose.model('OutOfStock', outofstock);*/

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