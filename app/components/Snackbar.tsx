// app/components/Snackbar.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

type SnackbarProps = {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number; // in ms
  onClose?: () => void;
};

export default function Snackbar({
  message,
  type = "success",
  duration = 3000,
  onClose,
}: SnackbarProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor =
    type === "success"
      ? "bg-green-600"
      : type === "error"
      ? "bg-red-600"
      : "bg-gray-600";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 ${bgColor} text-white font-semibold px-6 py-3 rounded-xl shadow-lg z-50`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
