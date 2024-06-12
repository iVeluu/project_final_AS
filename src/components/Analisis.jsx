import { Link } from "react-router-dom";



export default function Analisis({titulo, enlace}) {
      return (
          <Link
            to={enlace}
            className="text-white text-center font-bold bg-violet-600 p-5 rounded-lg hover:bg-violet-700 cursor-pointer m-4"
          >
            {titulo}
          </Link>
      );
}
