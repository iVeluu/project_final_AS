import { Link } from "react-router-dom";

export default function Preguntas({ titulo, enlace }) {
  return (
      <Link
        to={enlace}
        className="text-white text-center font-bold bg-fuchsia-600 p-10 rounded-lg hover:bg-fuchsia-700 cursor-pointer m-4"
      >
        {titulo}
      </Link>
  );
}
