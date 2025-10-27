import mongoose from "mongoose";

const alertSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  phone: { type: String },
  message: { type: String, required: true },
  status: { type: String, enum: ["Pending", "Accepted", "Completed"], default: "Pending" },
}, { timestamps: true });

export default mongoose.model("Alert", alertSchema);
