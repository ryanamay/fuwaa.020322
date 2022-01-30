export default function About() {
  return (
    <div id="about" className="flex flex-row flex-grow justify-center pt-32 lg:mx-12 md:mx-0">
      <div className="flex flex-col flex-grow px-12 py-12 max-w-5xl">
        <h1 className="inline text-5xl font-bold text-slate-700 mb-8">About</h1>
        <h3 className="inline text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600">Hey hey!</h3>
        <p className="text-2xl justify max-w-prose">
         My name is Jariel and I&apos;m a full-time student, full-time full-stack developer typa&apos; guy. Need something? Contact me and we&apos;ll talk it out.
        </p>

        <h3 className="inline text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-800 mt-10">Consider me if you want someone who is</h3>

        <h3 className="inline text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600 mt-2">Passion-driven</h3>
        <p className="text-2xl justify max-w-prose">
          Everyone has their own passions, mine&apos;s all about code.
        </p>
        <h3 className="inline text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600 mt-5">Team-oriented</h3>
        <p className="text-2xl justify max-w-prose">
          Whether leader or member, I always have your back.
        </p>
        <h3 className="inline text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600 mt-5">Quick Learner</h3>
        <p className="text-2xl justify max-w-prose">
          Need someone to handle something no one has experience on? I gotcha.
        </p>
      </div>
      <div className="hidden flex-col pl-12 pr-12 justify-center item-center lg:flex sm:hidden ">
          <img className="" src="/code.svg" width="500" alt="" />
      </div>
    </div>
  );
}
