import React from "react";
import { motion } from "framer-motion";
import { Bell, MapPin, Users, Shield } from "lucide-react";
import SOS from "../components/SOS";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Emergency Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 md:col-span-2 lg:col-span-3"
        >
          <SOS />
        </motion.div>

        {/* Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center gap-4 mb-4">
            <Shield className="text-[#E53935]" size={24} />
            <h2 className="text-xl font-semibold">Status</h2>
          </div>
          <div className="flex items-center justify-between bg-[#2A2A2A] p-4 rounded-lg">
            <span>System Status</span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
              Active
            </span>
          </div>
        </motion.div>

        {/* Recent Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center gap-4 mb-4">
            <Bell className="text-[#E53935]" size={24} />
            <h2 className="text-xl font-semibold">Recent Alerts</h2>
          </div>
          <div className="space-y-4">
            {/* Sample alerts - replace with real data */}
            <div className="bg-[#2A2A2A] p-4 rounded-lg">
              <p className="text-sm text-gray-400">No recent alerts</p>
            </div>
          </div>
        </motion.div>

        {/* Nearby Responders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center gap-4 mb-4">
            <Users className="text-[#E53935]" size={24} />
            <h2 className="text-xl font-semibold">Nearby Responders</h2>
          </div>
          <div className="space-y-4">
            {/* Sample responders - replace with real data */}
            <div className="bg-[#2A2A2A] p-4 rounded-lg">
              <p className="text-sm text-gray-400">No active responders nearby</p>
            </div>
          </div>
        </motion.div>

        {/* Map View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#1E1E1E] p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center gap-4 mb-4">
            <MapPin className="text-[#E53935]" size={24} />
            <h2 className="text-xl font-semibold">Area Map</h2>
          </div>
          <div className="bg-[#2A2A2A] h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Map view will be displayed here</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
