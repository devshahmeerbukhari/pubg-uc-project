'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Snackbar from "../components/Snackbar";
import BackButton from "../components/BackButton";

export default function AddPartnerPage() {
  const [username, setUsername] = useState("");
  const [pubgId, setPubgId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call with 2s delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setMessage(
      `Partner "${username}" with PUBG ID "${pubgId}" added successfully!`
    );
    setShowSnackbar(true);

    // Reset form
    setUsername("");
    setPubgId("");

    // Hide snackbar after 3 seconds
    setTimeout(() => setShowSnackbar(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-800 flex flex-col justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white bg-opacity-10 rounded-3xl p-10 max-w-md w-full shadow-lg relative"
      >
        {/* Reusable Back Button */}
        <BackButton to="/" />

        <h2 className="text-3xl text-white font-bold mb-6 select-none text-center">
          Add Partner
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Link Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="px-5 py-3 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-400 text-gray-900 font-semibold"
            disabled={isSubmitting}
          />
          <input
            type="text"
            placeholder="PUBG ID"
            value={pubgId}
            onChange={(e) => setPubgId(e.target.value)}
            required
            className="px-5 py-3 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-400 text-gray-900 font-semibold"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className={`bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-xl shadow-md focus:outline-none focus:ring-4 focus:ring-pink-400 flex justify-center items-center gap-3 ${
              isSubmitting ? "cursor-not-allowed opacity-70" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Add Partner"
            )}
          </button>
        </form>

        {/* Snackbar */}
        <AnimatePresence>
          {showSnackbar && (
            <Snackbar
              message={message}
              type="success"
              duration={3000}
              onClose={() => setShowSnackbar(false)}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
