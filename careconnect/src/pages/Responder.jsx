import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Phone, Clock, CheckCircle, X, Navigation } from "lucide-react";

const mockSOSAlerts = [
  {
    id: 1,
    name: "Ishika Sharma",
    location: { lat: 28.6139, lng: 77.209 },
    phone: "+91 9876543210",
    message: "Help! Medical emergency!",
    status: "Pending",
    timestamp: new Date().toISOString(),
    emergencyType: "Medical",
  },
  {
    id: 2,
    name: "John Doe",
    location: { lat: 28.7041, lng: 77.1025 },
    phone: "+91 9123456789",
    message: "Accident reported",
    status: "Pending",
    timestamp: new Date().toISOString(),
    emergencyType: "Accident",
  },
];

const ResponderPage = () => {
  const [selectedSOS, setSelectedSOS] = useState(null);
  const [alerts, setAlerts] = useState(mockSOSAlerts);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAccept = (id) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, status: "Accepted" } : alert
      )
    );
    showToast("SOS alert accepted successfully!");
  };

  const handleComplete = (id) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, status: "Completed" } : alert
      )
    );
    setSelectedSOS(null);
    showToast("Emergency response completed successfully!");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Toast Notification */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0, y: -100 }}
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}>
          {toast.message}
        </motion.div>
      )}

      {/* SOS Alerts List */}
      <div className="w-1/2 bg-white p-6 overflow-y-auto border-r border-gray-200">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
          <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
          Emergency Alerts
        </h2>
        
        <div className="space-y-4">
          {alerts.map((alert) => (
            <motion.div
              key={alert.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-lg shadow-sm cursor-pointer border-l-4 ${
                alert.status === "Pending"
                  ? "border-red-500 bg-red-50"
                  : alert.status === "Accepted"
                  ? "border-yellow-500 bg-yellow-50"
                  : "border-green-500 bg-green-50"
              }`}
              onClick={() => setSelectedSOS(alert)}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{alert.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  alert.status === "Pending"
                    ? "bg-red-200 text-red-800"
                    : alert.status === "Accepted"
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-green-200 text-green-800"
                }`}>
                  {alert.status}
                </span>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {new Date(alert.timestamp).toLocaleTimeString()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="w-1/2 relative p-6 bg-gray-50">
        {selectedSOS ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-800">{selectedSOS.name}</h2>
              <button
                onClick={() => setSelectedSOS(null)}
                className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-gray-800">{selectedSOS.message}</p>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(selectedSOS.timestamp).toLocaleString()}
                </div>
              </div>

              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-2" />
                <p>{selectedSOS.phone}</p>
              </div>

              <div className="flex items-center space-x-2">
                {selectedSOS.status === "Pending" && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center"
                    onClick={() => handleAccept(selectedSOS.id)}>
                    <Navigation className="w-4 h-4 mr-2" />
                    Accept Emergency
                  </motion.button>
                )}
                {selectedSOS.status === "Accepted" && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center"
                    onClick={() => handleComplete(selectedSOS.id)}>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Mark as Completed
                  </motion.button>
                )}
              </div>
              <a href={`tel:${selectedSOS.phone}`}
                className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors">
                <Phone className="w-4 h-4 inline-block mr-2" />
                Call Emergency Contact
              </a>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${selectedSOS.location.lat},${selectedSOS.location.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                <Navigation className="w-4 h-4 inline-block mr-2" />
                Get Directions
              </a>
            </div>
          </motion.div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p className="text-lg">Select an emergency alert to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponderPage;
