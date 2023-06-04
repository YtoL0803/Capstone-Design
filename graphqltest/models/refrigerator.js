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