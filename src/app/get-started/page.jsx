"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";

export default function GetStarted() {   
  const router = useRouter();
  useEffect(() => {
    console.log("GetStarted Page Loaded!");
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-teal-500 to-green-600 text-white text-center py-20 px-6">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Your Journey!
        </motion.h1>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Explore and unlock new possibilities.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            console.log("Back button clicked!");
            router.push("/home");
          }}
        >
          Back to Home
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 text-center">
        {[
          { title: "Innovative Ideas", icon: FaLightbulb },
          { title: "Fast Performance", icon: FaRocket },
          { title: "Community Driven", icon: FaUsers },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <feature.icon className="text-teal-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">
              Experience the best features with us.
            </p>
          </motion.div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-white text-center py-12 px-6">
        <p className="text-xl italic text-gray-800">
          "Absolutely amazing experience! This platform changed the way we
          manage our work."
        </p>
        <motion.div
          className="mt-6 bg-gray-200 p-6 rounded-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-800 italic">
            "This platform transformed the way we work!"
          </p>
          <p className="mt-2 font-semibold">- Jane Doe</p>
        </motion.div>
      </section>
    </div>
  );
}
