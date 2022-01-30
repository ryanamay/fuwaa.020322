import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiJquery, SiMongodb, SiNextdotjs } from "react-icons/si";
import {
  AiOutlineArrowDown,
  AiOutlineCloudDownload,
  AiOutlineMail,
} from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

export default function Skills() {
  return (
    <div className="flex flex-row flex-grow justify-center items-center lg:mx-12 md:mx-0">
      <div className="flex flex-col flex-grow p-12 lg:max-w-5xl md:max-w-none">
        <h1 className="inline text-5xl font-bold text-slate-700 mb-8">
          Skills
        </h1>
        <div className="mb-5">
          <h3 className="inline text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600">
            Strong Understanding
          </h3>
          <p className="mb-4">Stuff I excel at. </p>
          <div className="mb-5 text-8xl text-slate-500 space-x-5">
            <FaHtml5 className="mx-auto inline" />
            <FaCss3Alt className="mx-auto inline" />
            <SiJavascript className="mx-auto inline" />
          </div>
        </div>
        <div className="mt-2">
          <h3 className="inline text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600">
            Basic Understanding
          </h3>
          <p className="mb-4">Stuff I know somewhere at the back of my head. </p>
          <div className="mb-5 text-5xl text-slate-500 space-x-5">
            <FaPython className="mx-auto inline" />
            <SiJquery className="mx-auto inline" />
            <FaNodeJs className="mx-auto inline" />
            <SiMongodb className="mx-auto inline" />
            <FaReact className="mx-auto inline" />
            <SiNextdotjs className="mx-auto inline" />
          </div>
        </div>
        <div className="mt-2">
          <h3 className="inline text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600">
            Learning
          </h3>
          <p className="mb-4">You learn a lot as a programmer and you never stop learning. </p>
          <div className="mb-5 text-3xl text-slate-500 space-x-5">
            <FaPython className="mx-auto inline" />
            <FaHtml5 className="mx-auto inline" />
            <FaCss3Alt className="mx-auto inline" />
            <SiJavascript className="mx-auto inline" />
            <SiJquery className="mx-auto inline" />
            <FaNodeJs className="mx-auto inline" />
            <SiMongodb className="mx-auto inline" />
            <FaReact className="mx-auto inline" />
            <SiNextdotjs className="mx-auto inline" />
          </div>
        </div>
      </div>
      <div className="hidden flex-col pl-12 pr-12 justify-center item-center lg:flex sm:hidden">
        <img src="code.png" width="500" alt="" />
      </div>
    </div>
  );
}
