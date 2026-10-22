import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowDown } from "react-icons/hi";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#080B16] text-white"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute -bottom-40 right-0 w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[180px]" />

      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen grid lg:grid-cols-2 gap-10 items-center pt-28 pb-16">

        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Small heading */}
          <div className="flex items-center gap-4 mb-7">
            <div className="w-10 h-[2px] bg-cyan-400" />

            <span className="text-cyan-400 tracking-[5px] text-sm font-semibold uppercase">
              Welcome to my portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="text-[70px] sm:text-[90px] lg:text-[105px] font-black leading-[0.82] tracking-tight">
            Rahul

            <span className="block mt-5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Murkute
            </span>
          </h1>

          {/* Role */}
          <div className="flex items-center gap-4 mt-10">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            <h2 className="text-2xl lg:text-3xl font-semibold">
              <span className="text-cyan-400">MERN</span>{" "}
              Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="mt-7 max-w-xl text-gray-400 text-lg lg:text-xl leading-9">
            Passionate full-stack developer building modern,
            scalable and responsive web applications with
            <span className="text-white font-medium">
              {" "}React.js, Node.js, Express.js and MongoDB.
            </span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="/resume.pdf"
              className="
                px-8 py-4 rounded-xl font-semibold
                bg-gradient-to-r from-cyan-500 to-purple-600
                shadow-[0_10px_40px_rgba(34,211,238,.2)]
                hover:shadow-[0_15px_50px_rgba(139,92,246,.35)]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="
                px-8 py-4 rounded-xl font-semibold
                border border-white/15
                bg-white/[0.03]
                hover:border-cyan-400/70
                hover:bg-cyan-400/5
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              View Projects
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-12">
            <a href="#" className="hero-social">
              <FaGithub size={21} />
            </a>

            <a href="#" className="hero-social">
              <FaLinkedin size={21} />
            </a>

            <a href="#" className="hero-social">
              <MdEmail size={22} />
            </a>

            <a href="#" className="hero-social">
              <FaWhatsapp size={21} />
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            relative
            h-[620px]
            flex
            items-end
            justify-center
          "
        >
          {/* BACK GLOW */}
          <div className="absolute bottom-10 w-[430px] h-[430px] rounded-full bg-cyan-500/15 blur-[100px]" />

          <div className="absolute bottom-0 w-[500px] h-[300px] rounded-full bg-purple-600/15 blur-[100px]" />

          {/* OUTER CIRCLE */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[560px]
              h-[560px]
              rounded-full
              border border-cyan-400/20
            "
          />

          {/* MIDDLE CIRCLE */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[500px]
              h-[500px]
              rounded-full
              border border-purple-500/30
            "
          />

          {/* INNER CIRCLE */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[440px]
              h-[440px]
              rounded-full
              border-2 border-cyan-400/40
              bg-gradient-to-br
              from-cyan-500/[0.05]
              to-purple-500/[0.08]
            "
          />

          {/* PHOTO */}
          <div
            className="
              absolute
              z-20
              bottom-0
              left-1/2
              -translate-x-1/2
              flex
              justify-center
              items-end
              w-full
            "
          >
            <img
              src="/profile.png"
              alt="Rahul Murkute"
              className="
                w-[430px]
                lg:w-[520px]
                max-w-none
                h-auto
                object-contain
                drop-shadow-[0_25px_60px_rgba(0,0,0,.55)]
                hover:scale-[1.025]
                transition-transform
                duration-500
              "
            />
          </div>

          {/* Small status card */}
          <div
            className="
              absolute z-30
              bottom-16
              -left-2
              px-5 py-3
              rounded-2xl
              border border-white/10
              bg-[#0d1325]/80
              backdrop-blur-xl
              shadow-xl
            "
          >
            <p className="text-xs text-gray-500">
              Currently working with
            </p>

            <p className="text-sm font-semibold mt-1 text-cyan-400">
              MERN Stack
            </p>
          </div>

          {/* Dot decorations */}
          <div className="absolute top-12 left-12 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,.8)]" />

          <div className="absolute top-20 right-12 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(139,92,246,.8)]" />

          <div className="absolute bottom-32 right-4 w-3 h-3 rounded-full bg-cyan-400/70" />

          <div className="absolute bottom-20 left-8 w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
        </motion.div>
      </div>

      {/* SCROLL */}
      <a
        href="#about"
        className="
          absolute
          z-30
          bottom-7
          left-1/2
          -translate-x-1/2
          flex flex-col
          items-center
          gap-2
          text-gray-500
          hover:text-cyan-400
          transition
        "
      >
        <span className="text-[10px] tracking-[4px] uppercase">
          Scroll
        </span>

        <HiArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}

export default Hero;