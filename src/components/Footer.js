
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import {
  FaRegCopyright,
  FaDiscord,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="overflow-hidden flex flex-row justify-center items-center relative bg-slate-500 text-white">
        <div className="inline py-10 mx-auto">
          <h1 className="text-3xl font-semibold">
            <img src="/favicon.ico" width="30" className="inline mx-auto"></img>{" "}
            nafu
          </h1>
          <h3>turning dreams into reality.</h3>
        </div>
        <div className="items-start hidden md:flex">
            <div className="inline py-10">
              <ul className="block-flex">
                <li className="mx-4">
                  <h1 className="text-1xl font-bold">Directories</h1>
                </li>
                <li className="mx-4">
                  <Link className="text-sm" href="/">
                    <a className="hover:text-red-500">Home</a>
                  </Link>
                </li>
                <li className="mx-4">
                  <Link className="text-sm hover:text-red-500" href="/projects">
                     <a className="hover:text-red-500">Projects</a>
                  </Link>
                </li>
                <li className="mx-4">
                  <Link className="text-sm hover:text-red-500" href="/#contact">
                   <a className="hover:text-red-500">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="inline py-10">
              <ul className="block-flex">
                <li className="mx-4">
                  <h1 className="text-1xl font-bold">Sections</h1>
                </li>
                <li className="mx-4">
                  <LinkScroll className="text-sm hover:text-red-500" to="header" smooth="true">
                    Card
                  </LinkScroll>
                </li>
                <li className="mx-4">
                  <LinkScroll className="text-sm hover:text-red-500" to="about" smooth="true">
                    About
                  </LinkScroll>
                </li>
                <li className="mx-4">
                  <LinkScroll className="text-sm hover:text-red-500" to="skills" smooth="true">
                    Skills
                  </LinkScroll>
                </li>
                <li className="mx-4">
                  <LinkScroll className="text-sm hover:text-red-500" to="projects" smooth="true">
                    Projects
                  </LinkScroll>
                </li>
                <li className="mx-4">
                  <LinkScroll className="text-sm hover:text-red-500" to="contact" smooth="true">
                    Contact
                  </LinkScroll>
                </li>
              </ul>
            </div>
        </div>
        <div className="inline py-10"></div>
        <div className="flex flex-col mx-auto items-right">
          <span className="flex items-center ml-auto text-white text-sm mr-1">
            <FaRegCopyright className="inline mr-1 text-white text-sm" />{" "}
            {new Date().getFullYear()} Jariel Que
          </span>

          <span className="flex items-center ml-auto">
            Powered by
            <img className="fill-white inline ml-1" src="vercel.svg" />
          </span>
          <div className="flex flex-row justify-end mt-5 space-x-2">
            <a className="hover:text-red-500" href="mailto:jarielque@gmail.com"  target="_blank" rel="noreferrer">
              <AiOutlineMail />
            </a>
            <a className="hover:text-red-500" href="https://discord.gg/Z8KCyQjY9q" target="_blank" rel="noreferrer">
              <FaDiscord />
            </a>
            <a className="hover:text-red-500" href="https://www.linkedin.com/in/nafuni/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a className="hover:text-red-500" href="https://github.com/nfni" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
