const mongoose = require("mongoose");

const { Schema } = mongoose;

const BoatSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  price: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const BoatModel = mongoose.model("Boat", BoatSchema);

module.exports = BoatModel;
