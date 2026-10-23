
import { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=murkurerahul412@gmail.com&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="bg-[#080B16] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 mt-5">
            Have a project or opportunity? Let's connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Let's work together
            </h3>
            <p className="text-gray-400 leading-7">
              I am a MERN Stack Developer interested in building
              modern and responsive web applications.
            </p>

            <a
              href="mailto:murkurerahul412@gmail.com"
              className="flex items-center gap-4 text-gray-300 hover:text-cyan-400"
            >
              <MdEmail size={25} />
              murkurerahul412@gmail.com
            </a>

            <div className="flex items-center gap-4 text-gray-300">
              <MdLocationOn size={25} className="text-cyan-400" />
              Maharashtra, India
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full rounded-xl bg-[#111827] border border-white/10 p-4 outline-none focus:border-cyan-400"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full rounded-xl bg-[#111827] border border-white/10 p-4 outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full rounded-xl bg-[#111827] border border-white/10 p-4 outline-none focus:border-cyan-400 resize-y"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-4 font-bold hover:-translate-y-1 transition"
            >
              Open Gmail <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
