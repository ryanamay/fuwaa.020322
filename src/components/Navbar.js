export default function Navbar() {
  return (
    <nav className="ml-64 mr-auto mt-16 top-0 fixed">
      <div className="flex flex-col items-right px-4 py-2 ">
         <div className="justify-center inline-flex">
          <ul className="">
            <li className="mx-4">
              <a href="/">Home</a>
            </li>
            <li className="mx-4">
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
