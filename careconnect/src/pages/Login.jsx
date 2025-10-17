import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck } from "lucide-react";

const Login = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#111] text-white">
      {/* Left side image/branding */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-[#E53935] bg-opacity-90 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-96 h-96 bg-red-500 opacity-20 rounded-full blur-3xl"
        ></motion.div>

        <div className="z-10 text-center">
          <AlertTriangle className="mx-auto w-20 h-20 text-white animate-pulse" />
          <h1 className="text-5xl font-bold mt-4">CareConnect</h1>
          <p className="text-lg text-gray-200 mt-2">
            Decentralized Emergency Response Network
          </p>
        </div>
      </div>

      {/* Right side form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#1E1E1E] p-8 rounded-2xl shadow-2xl w-full max-w-md"
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <ShieldCheck className="text-[#E53935]" size={30} />
            <h2 className="text-2xl font-semibold">Login to Stay Safe</h2>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-[#2A2A2A] focus:ring-2 focus:ring-[#E53935] outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg bg-[#2A2A2A] focus:ring-2 focus:ring-[#E53935] outline-none"
                placeholder="••••••••"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 bg-[#E53935] hover:bg-[#B71C1C] transition-all rounded-lg font-semibold text-white shadow-md"
            >
              Login
            </motion.button>
          </form>

          <p className="text-sm text-gray-400 text-center mt-5">
            Don’t have an account?{" "}
            <a href="/register" className="text-[#E53935] hover:underline">
              Register
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
