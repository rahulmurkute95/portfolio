import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFlutter,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";

const skills = [
  {
    id: 1,
    name: "React.js",
    icon: <FaReact className="text-5xl text-cyan-400" />,
    percentage: 90,
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    name: "Node.js",
    icon: <FaNodeJs className="text-5xl text-green-500" />,
    percentage: 85,
    color: "from-green-400 to-green-600",
  },
  {
    id: 3,
    name: "Express.js",
    icon: <SiExpress className="text-5xl text-gray-300" />,
    percentage: 85,
    color: "from-gray-300 to-gray-500",
  },
  {
    id: 4,
    name: "MongoDB",
    icon: <SiMongodb className="text-5xl text-green-600" />,
    percentage: 85,
    color: "from-green-500 to-lime-500",
  },
  {
    id: 5,
    name: "Flutter",
    icon: <SiFlutter className="text-5xl text-sky-500" />,
    percentage: 80,
    color: "from-sky-400 to-blue-500",
  },
  {
    id: 6,
    name: "Firebase",
    icon: <SiFirebase className="text-5xl text-yellow-500" />,
    percentage: 80,
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 7,
    name: "JavaScript",
    icon: <SiJavascript className="text-5xl text-yellow-400" />,
    percentage: 90,
    color: "from-yellow-300 to-yellow-500",
  },
  {
    id: 8,
    name: "Bootstrap",
    icon: <FaBootstrap className="text-5xl text-purple-500" />,
    percentage: 85,
    color: "from-violet-500 to-purple-600",
  },
];

export default skills;