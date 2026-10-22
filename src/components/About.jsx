import {
  FaGraduationCap,
  FaBriefcase,
  FaFolderOpen,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-cyan-400">About</span> Me
        </h2>

        {/* Glass Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

          {/* Left Side */}
          <div className="flex justify-center">

            <img
              src="/profile.png"
              alt="Rahul Murkute"
              className="w-full max-w-md rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:scale-105 transition-all duration-500"
            />

          </div>

          {/* Right Side */}

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 font-medium mb-5">
              MERN Stack Developer
            </span>

            <h3 className="text-5xl font-bold mb-6">
              Rahul Murkute
            </h3>

            <p className="text-gray-300 leading-9 text-lg">
              I am a passionate Full Stack Developer specializing in the
              MERN Stack. I enjoy building responsive, scalable and
              user-friendly web applications. I have completed multiple
              real-world projects and always strive to learn modern
              technologies to improve my development skills.
            </p>

            {/* Info Cards */}

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-slate-800 rounded-2xl p-5 hover:bg-cyan-500/10 transition">

                <FaGraduationCap className="text-3xl text-cyan-400 mb-3" />

                <h4 className="font-semibold text-xl">
                  Education
                </h4>

                <p className="text-gray-400 mt-2">
                  B.Tech Information Technology
                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5 hover:bg-cyan-500/10 transition">

                <FaBriefcase className="text-3xl text-cyan-400 mb-3" />

                <h4 className="font-semibold text-xl">
                  Experience
                </h4>

                <p className="text-gray-400 mt-2">
                  MERN Stack Developer Intern
                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5 hover:bg-cyan-500/10 transition">

                <FaFolderOpen className="text-3xl text-cyan-400 mb-3" />

                <h4 className="font-semibold text-xl">
                  Projects
                </h4>

                <p className="text-gray-400 mt-2">
                  Hospital Management
                  <br />
                  EventHub
                  <br />
                  Food Delivery
                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-5 hover:bg-cyan-500/10 transition">

                <FaMapMarkerAlt className="text-3xl text-cyan-400 mb-3" />

                <h4 className="font-semibold text-xl">
                  Location
                </h4>

                <p className="text-gray-400 mt-2">
                  Pune,
                  <br />
                  Maharashtra, India
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;