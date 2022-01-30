
import Link from 'next/link';
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
        <div className="flex items-start">
            <div className="inline py-10">
              <ul className="block-flex">
                <li className="mx-4">
                  <h1 className="text-1xl font-bold">Directories</h1>
                </li>
                <li className="mx-4">
                  <Link className="text-sm" href="/">
                    Home
                  </Link>
                </li>
                <li className="mx-4">
                  <Link className="text-sm" href="/projects">
                    Projects
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
                  <Link className="text-sm" href="/">
                    Card
                  </Link>
                </li>
                <li className="mx-4">
                  <Link className="text-sm" href="/">
                    About
                  </Link>
                </li>
                <li className="mx-4">
                  <Link className="text-sm" href="/projects">
                    Skills
                  </Link>
                </li>
                <li className="mx-4">
                  <Link className="text-sm" href="/">
                    Projects
                  </Link>
                </li>
                <li className="mx-4">
                  <Link className="text-sm" href="/">
                    Contact
                  </Link>
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
            <Link className="" href="">
              <AiOutlineMail />
            </Link>
            <Link className="" href="">
              <FaDiscord />
            </Link>
            <Link className="" href="">
              <FaLinkedinIn />
            </Link>
            <Link className="" href="">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
