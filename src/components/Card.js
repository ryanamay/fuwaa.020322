export default function Card(props) {
        return (
            <div className="rounded bg-slate-500 mx-2 max-w-xs" style={{backgroundImage: "linear-gradient(180deg, transparent, #000), url("+props.image+")", backgroundSize: '100% 100%)'}}>
                <div className="pt-20 pl-5 pr-5 pb-5">
                    <h1 className="text-2xl font-bold text-white">{props.name}</h1>
                    <h3 className=" text-white mb-5">{props.description}</h3>
                    <a href={props.link} className="rounded bg-slate-500 p-1 px-3 text-white">See Project</a>
                </div>
            </div>
        );
}