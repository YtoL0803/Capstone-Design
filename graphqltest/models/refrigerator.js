/*import mongoose from "mongoose";

const Schema = mongoose.Schema

const refrigerator = new Schema({
    id: Number,
    start: String,
    end: String
});

export default mongoose.model('Refrigerator', refrigerator);*/

import mongoose from "mongoose";

const { Schema } = mongoose;

const refrigeratorSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
});

const Refrigerator = mongoose.model("Refrigerator", refrigeratorSchema);

export default Refrigerator;