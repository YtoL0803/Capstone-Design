/*import mongoose from "mongoose";

const Schema = mongoose.Schema

const visitor = new Schema({
    id: Number,
    time: String
});

export default mongoose.model('Visitor', visitor);*/

import mongoose from "mongoose";

const { Schema } = mongoose;

const visitorSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

export default Visitor;
