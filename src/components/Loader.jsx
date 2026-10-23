
import { motion } from "framer-motion";

function Loader() {
  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#080B16] text-white"
      role="status"
      aria-label="Loading portfolio"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-16 h-16 rounded-full border-4 border-white/10 border-t-cyan-400 border-r-purple-500"
      />

      <motion.h2
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="mt-6 text-2xl font-black"
      >
        Rahul<span className="text-cyan-400">.</span>
      </motion.h2>

      <p className="mt-2 text-sm tracking-[4px] text-gray-400">
        LOADING...
      </p>
    </div>
  );
}

export default Loader;
