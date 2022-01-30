import { FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiJquery, SiMongodb, SiNextdotjs } from 'react-icons/si';
import { AiOutlineArrowDown, AiOutlineCloudDownload, AiOutlineMail } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import Banner from '../components/Banner';

export default function Header(props) {
    return(
        <header>
            <div className="flex flex-row min-h-screen justify-center bg-cover bg-center items-center relative" style={{backgroundImage: "url("+props.image+")", backgroundSize: '100% 100%)'}}>
                <Banner />
                <div className="mr-auto ml-auto justify-center items-center text-center text-white">
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
                    <div className="flex flex-row text-black">
                        <button className="rounded bg-gradient-to-r hover:from-green-500 hover:to-slate-500 from-green-300 to-slate-300 p-1 px-3 flex items-center">Contact <AiOutlineMail className="ml-2" /></button>
                        <button href="/projects" className="rounded bg-gradient-to-r hover:from-blue-500 hover:to-slate-500 from-blue-300 to-slate-300 p-1 px-3 ml-5 flex items-center">See my projects <BsArrowRightShort className="ml-2" /></button>
                        <button href="/projects" className="rounded bg-gradient-to-r hover:from-red-500 hover:to-slate-500 from-red-300 to-slate-300 p-1 px-3 ml-5 flex items-center">Resume <AiOutlineCloudDownload className="ml-2" /></button>
                    </div>
                </div>
                <div className="w-full absolute bottom-10 text-center text-white">Learn More</div>
                    <div className="w-full absolute bottom-8 text-center text-white">
                        <AiOutlineArrowDown className="absolute w-full" />
                    </div>
                    <div className="p-1 bg-gradient-to-r from-indigo-500 to-blue-500 w-full absolute bottom-0"> </div>
            </div>
        </header>
    ); 
}