import { FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiJquery, SiMongodb, SiNextdotjs } from 'react-icons/si';
import { AiOutlineArrowDown } from 'react-icons/ai';

export default function Header() {
    return(
        <header>
            <div className="overflow-hidden flex flex-row min-h-screen justify-center items-center relative bg-white">
                <div className="mr-auto ml-auto justify-center items-center text-center">
                    <img src="/me.png" width="200" height="200" className="ml-auto mr-auto rounded-full outline outline-offset-2 outline-blue-500 mb-3"/>
                    <h1 className="text-4xl font-semibold">Jariel Que</h1>
                    <h3 className="text-1xl mt-2 font-medium">Full Stack DevOps Intern</h3>
                    <div className="mb-5">
                            <FaPython className="mx-auto inline mx-1" />
                            <FaHtml5 className="mx-auto inline mx-2" />
                            <FaCss3Alt className="mx-auto inline mx-1" />
                            <SiJavascript className="mx-auto inline mx-2" />
                            <SiJquery className="mx-auto inline mx-1" />
                            <FaNodeJs className="mx-auto inline mx-2" />
                            <SiMongodb className="mx-auto inline mx-1" />
                            <FaReact className="mx-auto inline mx-2" />
                            <SiNextdotjs className="mx-auto inline mx-1" />
                    </div>
                    <div>
                        <a className="rounded bg-blue-200 p-1 px-3 mt-10">Contact Me</a>
                        <a href="/projects" className="rounded bg-blue-300 p-1 px-3 mt-10 ml-5">See my Projects</a>
                    </div>
                </div>
                <div className="w-full absolute bottom-10 text-center">Explore More</div>
                    <div className="w-full absolute bottom-9 text-center">
                        <AiOutlineArrowDown className="absolute w-full" />
                    </div>
                    <div className="p-1 bg-teal-500 w-full absolute bottom-0"> </div>
            </div>
        </header>
    ); 
}