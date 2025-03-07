"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 pt-24">
      <motion.div 
        className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-6">We would love to hear from you!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            required
          ></textarea>
          <motion.button 
            type="submit" 
            className="w-full  bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
      <div className="flex gap-6 mt-6">
        <motion.a
          href="#"
          className="text-blue-600 text-3xl hover:text-blue-800"
          whileHover={{ scale: 1.2 }}
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          href="#"
          className="text-blue-400 text-3xl hover:text-blue-600"
          whileHover={{ scale: 1.2 }}
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          href="#"
          className="text-blue-700 text-3xl hover:text-blue-900"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="#"
          className="text-pink-600 text-3xl hover:text-pink-800"
          whileHover={{ scale: 1.2 }}
        >
          <FaInstagram />
        </motion.a>
      </div>

    </div>
  );
}
