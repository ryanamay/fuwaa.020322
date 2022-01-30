export default function About() {
  return (
    <div id="about" className="flex flex-row flex-grow justify-center pt-32 lg:mx-12 md:mx-0">
      <div className="flex flex-col flex-grow px-12 py-12 max-w-5xl">
        <h1 className="inline text-5xl font-bold text-slate-700 mb-8">About</h1>
        <h3 className="inline text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600">Proficiency at its finest</h3>
        <p className="text-2xl justify max-w-prose">
          I am a full stack developer with a strong understanding of HTML, CSS and JavaScript
        </p>
        <h3 className="inline text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600 mt-10">Passion-driven</h3>
        <p className="text-2xl justify max-w-prose">
          I am a passionate and dedicated developer with a strong desire to learn and grow.
        </p>
        <h3 className="inline text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600 mt-10">Team-oriented</h3>
        <p className="text-2xl justify max-w-prose">
          I am a team player and I am always looking for opportunities to grow and learn.
        </p>
        <h3 className="inline text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600 mt-10">Quick Learner</h3>
        <p className="text-2xl justify max-w-prose">
          I am a quick learner and I am always eager to learn new technologies and languages.
        </p>
      </div>
      <div className="hidden flex-col pl-12 pr-12 justify-center item-center lg:flex sm:hidden ">
          <img className="" src="/code.svg" width="500" alt="" />
      </div>
    </div>
  );
}
