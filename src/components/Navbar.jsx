import { useEffect, useState } from "react";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-[#08111f]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-[#08111f]/70 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Logo */}

        <a href="#home" className="flex items-center gap-3 mr-8">

          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 flex justify-center items-center font-bold text-2xl">

            RM

          </div>

          <div>

            <h2 className="font-bold text-xl">
              Rahul Murkute
            </h2>

            <p className="text-xs text-gray-400">
              MERN Developer
            </p>

          </div>

        </a>

        {/* Menu */}

        <nav className="hidden lg:flex gap-10">

          {menu.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
            >
              {item}

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>

            </a>
          ))}

        </nav>

        {/* Resume Button */}

        <a
          href="/resume.pdf"
          className="hidden lg:block px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition"
        >
          Resume
        </a>

      </div>
    </header>
  );
}

export default Navbar;