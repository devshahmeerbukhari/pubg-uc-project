'use client';

import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
  to?: string; // Optional: if not provided, will use router.back()
  className?: string;
}

export default function BackButton({ to, className }: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (to) {
      router.push(to);
    } else {
      router.back();
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(229, 231, 235, 0.8)' }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      aria-label="Go back"
      className={`absolute top-4 left-4 flex items-center justify-center w-10 h-10 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 transition ${className ?? ''}`}
    >
      <ArrowBackIcon fontSize="medium" />
    </motion.button>
  );
}
