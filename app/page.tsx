'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PaymentsIcon from '@mui/icons-material/Payments';
import { paths } from './routes/paths';

export default function LandingPage() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-800 flex flex-col justify-center items-center px-6 space-y-12">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-5xl font-extrabold select-none text-center"
      >
        Welcome to UC Portal
      </motion.h1>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-8"
      >
        {/* Add Partner Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigateTo(paths.partner.add)}
          className="flex items-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-3xl shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-400"
        >
          <PersonAddIcon />
          Add Partner
        </motion.button>

        {/* Purchase UC Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigateTo(paths.ucPackages.root)}
          className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-3xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
        >
          <PaymentsIcon />
          Purchase UC
        </motion.button>
      </motion.div>
    </div>
  );
}
