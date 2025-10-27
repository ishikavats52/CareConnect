import Alert from "../models/alert.js";
import User from "../models/user.js";

export const createAlert = async (req, res) => {
  try {
    const { name, location, phone, message } = req.body;
    const alert = await Alert.create({
      user: req.user.id,
      name,
      location,
      phone,
      message,
      status: "Pending",
    });
    res.status(201).json(alert);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find().populate("user", "name email phone role");
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateAlertStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const alert = await Alert.findByIdAndUpdate(id, { status }, { new: true });
    res.json(alert);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
