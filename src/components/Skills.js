import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaAws,
  FaGithub,
  FaBootstrap
} from "react-icons/fa";
import { SiFlutter, SiJavascript, SiJquery, SiMongodb, SiNextdotjs, SiTailwindcss, SiTerraform, SiSpringboot } from "react-icons/si";
import { AiOutlineConsoleSql } from 'react-icons/ai';
import LazyShowRight from "./LazyShowRight";
import LazyShow from "./LazyShow";

export default function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-row flex-grow justify-center items-center lg:mx-12 md:mx-0"
    >
      <div className="flex flex-col flex-grow p-12 lg:max-w-5xl md:max-w-none">
        <LazyShow>
          <h1 className="inline text-5xl font-bold text-slate-700 mb-8">
            Skills
          </h1>
        </LazyShow>
        <div className="">
            <LazyShowRight>
          <h3 className="inline text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600">
            Proficiency at its finest
          </h3>
          <p className="mb-4">People come with their greatest strengths, here are mine.</p>
          <div className="mb-5 text-8xl text-slate-500">
              <FaHtml5 className="mx-auto inline mr-5" />
            <FaCss3Alt className="mx-auto inline mr-5" />
            <SiJavascript className="mx-auto inline mr-5" />
          </div>
            </LazyShowRight>
        </div>
        <div className="">
          <LazyShowRight>
            <h3 className="inline text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600">
              With experience
            </h3>
            <p className="mb-4">
              In addition to the above, I work or used to work with these languages and frameworks.
            </p>
            <div className="mb-5 text-5xl text-slate-500">
              <FaPython className="mx-auto inline mr-5" />
              <span className="mx-auto inline mr-5"> c </span>
              <SiJquery className="mx-auto inline mr-5" />
              <FaNodeJs className="mx-auto inline mr-5" />
              <SiMongodb className="mx-auto inline mr-5" />
              <FaReact className="mx-auto inline mr-5" />
              <SiNextdotjs className="mx-auto inline mr-5" />
              <FaGithub className="mx-auto inline mr-5" />
              <SiTailwindcss className="mx-auto inline mr-5" />
              <FaBootstrap className="mx-auto inline mr-5" />
          </div>
          </LazyShowRight>
        </div>
        <div className="">
          <LazyShowRight>
            <h3 className="inline text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600">
              Learning
            </h3>
            <p className="mb-4">
              While I learn stuff above me, I&apos;m also learning the following:{" "}
            </p>
            <div className="mb-5 text-3xl text-slate-500">
              <SiTerraform className="mx-auto inline mr-5" />
              <AiOutlineConsoleSql className="mx-auto inline mr-5" />
              <FaAws className="mx-auto inline mr-5" />
              <SiFlutter className="mx-auto inline mr-5" />
            </div>
          </LazyShowRight>
        </div>
      </div>
      <div className="hidden flex-col pl-12 pr-12 justify-center item-center lg:flex sm:hidden">
        <img className="rounded-3xl" src="code.png" width="500" alt="" />
      </div>
    </div>
  );
}
