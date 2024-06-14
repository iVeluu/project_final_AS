import { Link } from "react-router-dom";

export default function Header({ color }) {
      return (
        <header className=" p-10 border-b-4 border-tomato">
          <div className="flex justify-between flex-col md:flex-row max-w-7xl mx-auto items-center">
            <a className="text-white font-bold text-2xl uppercase ">
              Proyecto Final || 22110228
            </a>
            <nav className="mt-6 md:mt-0">
              <Link className="text-white font-bold text-2xl uppercase" to="/">
                Menú
              </Link>
            </nav>
          </div>
        </header>
      );
}
