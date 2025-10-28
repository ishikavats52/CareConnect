import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck, Users, MapPin, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: <AlertTriangle className="w-8 h-8 text-[#E53935]" />,
    title: "Instant SOS Alerts",
    description: "Send emergency alerts instantly to responders and nearby users with a single click."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    title: "Verified Responders",
    description: "Connect with trusted responders for quick and reliable help during emergencies."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Community Network",
    description: "Leverage a decentralized network of users and responders for maximum coverage."
  },
  {
    icon: <MapPin className="w-8 h-8 text-purple-500" />,
    title: "Live Location Tracking",
    description: "Track and share your location in real-time for faster assistance."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-pink-500" />,
    title: "Secure & Private",
    description: "Your data is protected with end-to-end encryption and privacy-first design."
  },
];

const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#1a1a1a] to-[#111] text-white flex flex-col items-center pt-24 px-4">
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl text-center mb-12"
    >
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#E53935] to-[#ff867c] bg-clip-text text-transparent">
        Welcome to CareConnect
      </h1>
      <p className="text-lg text-gray-300 mb-6"></p>
        <span className="font-semibold text-[#E53935]">CareConnect</span> is your trusted emergency companion, connecting you instantly to a network of responders and community members. Whether you face a medical emergency, accident, or need urgent help, CareConnect empowers you to send SOS alerts, share your live location, and get support in seconds.<br /><br />
        <span className="text-[#E53935] font-bold">Why CareConnect?</span><br />
        <ul className="list-disc list-inside text-left mx-auto max-w-xl text-gray-400 mb-4">
          <li>Decentralized, community-driven safety network</li>
          <li>Verified responders for trusted help</li>
          <li>Real-time location sharing for faster response</li>
          <li>Secure, private, and easy to use</li>
        </ul>
        <span className="text-[#E53935] font-bold">Our Mission:</span> To make emergency help accessible, fast, and secure for everyone, everywhere.
      
      <div className="flex justify-center gap-4 mb-4">
        <a href="/register" className="bg-[#E53935] hover:bg-[#B71C1C] text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all">Get Started</a>
        <a href="/login" className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all">Login</a>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {features.map((feature, idx) => (
        <div key={idx} className="bg-[#1E1E1E] rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
          {feature.icon}
          <h3 className="text-xl font-semibold mt-4 mb-2 text-[#E53935]">{feature.title}</h3>
          <p className="text-gray-300 text-sm">{feature.description}</p>
        </div>
      ))}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="max-w-3xl mt-16 text-center text-gray-400">
      <h2 className="text-2xl font-bold mb-2 text-[#E53935]">How CareConnect Works</h2>
      <ol className="list-decimal list-inside text-left mx-auto max-w-xl">
        <li className="mb-2"><span className="text-[#E53935] font-semibold">Sign Up:</span> Register as a user or responder and join the safety network.</li>
        <li className="mb-2"><span className="text-[#E53935] font-semibold">Login:</span> Access your personalized dashboard and connect with the community.</li>
        <li className="mb-2"><span className="text-[#E53935] font-semibold">Send SOS:</span> In an emergency, press the SOS button to alert responders and nearby users.</li>
        <li className="mb-2"><span className="text-[#E53935] font-semibold">Get Help:</span> Verified responders receive your alert, view your location, and respond quickly.</li>
        <li className="mb-2"><span className="text-[#E53935] font-semibold">Track & Communicate:</span> Monitor alert status, chat securely, and get updates until help arrives.</li>
      </ol>
      <p className="mt-6 text-gray-300">CareConnect is built for <span className="text-[#E53935] font-semibold">speed</span>, <span className="text-[#E53935] font-semibold">security</span>, and <span className="text-[#E53935] font-semibold">reliability</span>. Join our mission to make every community safer, together.</p>
    </motion.div>
  </div>
);

export default Home;
