'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { paths } from '../../routes/paths';
import { ucPackages } from '@/app/data/ucPackages';
import Snackbar from '@/app/components/Snackbar';
import BackButton from '@/app/components/BackButton';

export default function UCPackageDetailPage() {
  const params = useParams();
  const id = params?.id;

  const [isPurchasing, setIsPurchasing] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Find package by id
  const pkg = ucPackages.find((p) => p.id === id);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-800 flex justify-center items-center px-6">
        <h2 className="text-black text-3xl font-bold">Package not found!</h2>
      </div>
    );
  }

  const handlePurchase = async () => {
    setIsPurchasing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsPurchasing(false);
    setSnackbarMessage(`Successfully purchased ${pkg.name} for ${pkg.price}!`);
    setShowSnackbar(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-800 flex flex-col justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl relative"
      >
        {/* Reusable Back Button */}
        <BackButton to={paths.ucPackages.root} />

        <h2 className="text-3xl text-black font-bold mb-4 select-none text-center">{pkg.name}</h2>
        <p className="text-black font-semibold text-lg mb-2 text-center">{pkg.price}</p>
        <p className="text-gray-700 text-center">{pkg.description}</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePurchase}
          disabled={isPurchasing}
          className={`mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-xl shadow-md focus:outline-none focus:ring-4 focus:ring-pink-400 flex justify-center items-center gap-2 ${
            isPurchasing ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isPurchasing && (
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
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          )}
          {isPurchasing ? 'Processing...' : 'Purchase Now'}
        </motion.button>
      </motion.div>

      {/* Snackbar */}
      {showSnackbar && (
        <Snackbar
          message={snackbarMessage}
          type="success"
          duration={3000}
          onClose={() => setShowSnackbar(false)}
        />
      )}
    </div>
  );
}
