import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex justify-center items-center gap-3 mb-16">

          <FaBriefcase className="text-purple-500 text-3xl" />

          <h2 className="text-5xl font-bold">
            Experience
          </h2>

        </div>

        {/* Card */}

        <div className="rounded-3xl border border-slate-700 bg-[#161f2f] p-10 hover:border-cyan-400 transition-all duration-500">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}

            <div className="flex">

              {/* Timeline */}

              <div className="flex flex-col items-center mr-8">

                <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]"></div>

                <div className="w-[2px] h-36 bg-slate-600"></div>

              </div>

              {/* Job */}

              <div>

                <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  MERN Stack Developer Intern
                </h3>

                <p className="text-2xl mt-3 text-gray-200">
                  A2Z IT HUB Pvt. Ltd.
                </p>

                <p className="text-lg text-gray-400 mt-2">
                  June 2025 – December 2025
                </p>

              </div>

            </div>

            {/* Right */}

            <div>

              <p className="text-gray-300 leading-9 text-lg">

                Worked on real-world MERN Stack projects using
                React.js, Node.js, Express.js and MongoDB.

              </p>

              <p className="text-gray-300 leading-9 text-lg mt-4">

                Built REST APIs, integrated MongoDB databases,
                developed responsive user interfaces and collaborated
                with the development team using Git & GitHub.

              </p>

              {/* Skills */}

              <div className="flex flex-wrap gap-3 mt-8">

                <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                  React.js
                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                  Node.js
                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                  Express.js
                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                  MongoDB
                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                  REST API
                </span>

                <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300">
                  GitHub
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;