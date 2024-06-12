import { Link } from "react-router-dom";

export default function Teoria({ titulo, enlace }) {
  return (
      <Link
        to={enlace}
        className="text-white text-center font-bold bg-blue-600 p-10 rounded-lg hover:bg-blue-700 cursor-pointer m-4"
      >
        {titulo}
      </Link>
  );
}
