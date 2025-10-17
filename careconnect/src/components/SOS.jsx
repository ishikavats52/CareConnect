import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const SOS = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleSOSPress = () => {
    setIsPressed(true);
    // TODO: Implement SOS alert logic here
    setTimeout(() => setIsPressed(false), 2000); // Reset button after 2 seconds
  };

  return (
    <div className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg text-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSOSPress}
        className={`w-40 h-40 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isPressed ? "bg-[#B71C1C]" : "bg-[#E53935]"
        }`}
      >
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 mx-auto text-white" />
          <span className="block text-white font-bold mt-2">
            {isPressed ? "SENDING..." : "SOS"}
          </span>
        </div>
      </motion.button>
      <p className="text-gray-400 mt-4">
        Press the button above in case of emergency
      </p>
    </div>
  );
};

export default SOS;
