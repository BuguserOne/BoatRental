const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  checking: { type: Date, required: true },
  checkout: { type: Date, required: true },
  price: { type: Number, required: true },
  boat: { type: mongoose.Schema.Types.ObjectId, ref: "Boat", required: true },
});

const BookingModel = mongoose.model("Booking", bookingSchema);

module.exports = BookingModel;
