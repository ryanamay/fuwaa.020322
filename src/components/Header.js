import { FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiJquery, SiMongodb, SiNextdotjs } from 'react-icons/si';
import { AiOutlineArrowDown, AiOutlineCloudDownload, AiOutlineMail } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';

export default function Header() {
    return(
        <header>
            <div className="flex flex-row min-h-screen justify-center items-center relative bg-white dark:bg-slate-500">
                <div className="mr-auto ml-auto justify-center items-center text-center">
                    <img src="/me.png" width="200" height="200" className="ml-auto mr-auto rounded-full outline outline-offset-2 outline-blue-500 mb-3"/>
                    <h1 className="text-4xl font-semibold">Jariel Que</h1>
                    <h3 className="text-1xl mt-2 font-medium">Full Stack DevOps Intern</h3>
                    <div className="mb-5 space-x-1">
                            <FaPython className="mx-auto inline mx-1" />
                            <FaHtml5 className="mx-auto inline mx-1" />
                            <FaCss3Alt className="mx-auto inline mx-1" />
                            <SiJavascript className="mx-auto inline mx-1" />
                            <SiJquery className="mx-auto inline mx-1" />
                            <FaNodeJs className="mx-auto inline mx-1" />
                            <SiMongodb className="mx-auto inline mx-1" />
                            <FaReact className="mx-auto inline mx-1" />
                            <SiNextdotjs className="mx-auto inline mx-1" />
                    </div>
                    <div className="flex flex-row">
                        <button className="rounded bg-blue-200 p-1 px-3 flex items-center">Contact <AiOutlineMail className="ml-2" /></button>
                        <button href="/projects" className="rounded bg-blue-300 p-1 px-3 ml-5 flex items-center">See my projects <BsArrowRightShort className="ml-2" /></button>
                        <button href="/projects" className="rounded bg-blue-300 p-1 px-3 ml-5 flex items-center">Resume <AiOutlineCloudDownload className="ml-2" /></button>
                    </div>
                </div>
                <div className="w-full absolute bottom-10 text-center">Learn More</div>
                    <div className="w-full absolute bottom-8 text-center">
                        <AiOutlineArrowDown className="absolute w-full" />
                    </div>
                    <div className="p-1 bg-gradient-to-r from-indigo-500 to-blue-500 w-full absolute bottom-0"> </div>
            </div>
        </header>
    ); 
}