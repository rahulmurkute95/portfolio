
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#060812] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-black">
              Rahul<span className="text-cyan-400">.</span>
            </a>
            <p className="text-gray-400 mt-2">
              MERN Stack Developer
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-cyan-400 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            <a
              href="https://github.com/rahulmurkute95"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:murkurerahul412@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <MdEmail size={23} />
            </a>

            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Rahul Murkute. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Designed and developed with React.js
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
