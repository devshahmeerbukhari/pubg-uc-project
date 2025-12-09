// app/uc-packages/page.tsx
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { paths } from "../routes/paths";
import { ucPackages } from "../data/ucPackages";
import BackButton from "@/app/components/BackButton";

export default function UcPackagesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-800 flex flex-col justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl relative"
      >
        {/* Reusable Back Button */}
        <BackButton to="/" />

        <h2 className="text-3xl text-black font-bold mb-6 select-none text-center">
          UC Packages
        </h2>

        <div className="flex flex-col gap-4">
          {ucPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push(paths.ucPackages.details(pkg.id))}
              className="bg-gray-100 rounded-xl p-5 flex flex-col cursor-pointer shadow-md transition-all duration-200 hover:bg-gray-200"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  router.push(paths.ucPackages.details(pkg.id));
                }
              }}
            >
              <h3 className="text-black font-bold text-lg mb-1">{pkg.name}</h3>
              <p className="text-gray-800 font-semibold mb-2">{pkg.price}</p>
              <p className="text-gray-600 text-sm">{pkg.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
