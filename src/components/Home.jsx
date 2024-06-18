import { useState } from "react";
import Analisis from "./Analisis";
import Teoria from "./Teoria";

export default function Home() {

      const [analisis, setAnalisis] = useState(false);
      const [teoria, setTeoria] = useState(false);
      const [info, setInfo] = useState(false);

      const handleTeoriaClick = () => {
            setTeoria(!teoria);
      };

      const handleAnalisisClick = () => {
            setAnalisis(!analisis);
      };

      const handleInfoClick = () => {
        setInfo(!info);
      };

      return (
        <main>
          <h2
            className="text-center mt-10 font-black text-1xl uppercase text-white bg-violet-600 p-3 rounded-lg mx-auto w-36 max-w-7xl"
            onClick={handleAnalisisClick}
          >
            Análisis
          </h2>
          {analisis && (
            <section className="grid md:grid-cols-2 max-w-7xl mx-auto mt-10 gap-4">
              <Analisis
                titulo="1. Introducción a la arquitectura y diseño del software"
                enlace="IADS"
              />
              <Analisis
                titulo="2. Arquitectura en capas y orientada a objetos"
                enlace="ACOB"
              />
              <Analisis
                titulo="3. Diseño del software utilizando metodologías clásicas."
                enlace="DSMC"
              />
              <Analisis
                titulo="4. Diseño de software utilizando metodologías ágiles."
                enlace="DSMA"
              />
            </section>
          )}

          <h2
            className="text-center mt-10 font-black text-1xl uppercase text-white bg-blue-600 p-3 rounded-lg mx-auto w-36 max-w-7xl"
            onClick={handleTeoriaClick}
          >
            Prácticas
          </h2>
          {teoria && (
            <section className="grid md:grid-cols-2 max-w-7xl mx-auto mt-10 gap-4">
              <Teoria
                titulo="1. Planteamiento y diseño del software utilizando arquitecturas en capas y orientada a objetos"
                enlace="T1"
              />
              <Teoria
                titulo="2. Planteamiento y diseño del software utilizando metodologías clásicas"
                enlace="T2"
              />
              <Teoria
                titulo="3. Planteamiento y diseño del software utilizando metodologías ágiles."
                enlace="T3"
              />
            </section>
          )}
          <h2
            className="text-center mt-10 font-black text-1xl uppercase text-white bg-tomato p-3 rounded-lg mx-auto w-36 max-w-7xl mb-10"
            onClick={handleInfoClick}
          >
            Info Alumno
          </h2>
          {info && (
            <section className="max-w-7xl mx-auto mt-10 ">
              <div className="grid md:grid-cols-2  gap-4 border-4  border-tomato p-4 rounded-lg mb-10 mx-4">
                <div className="flex flex-col space-y-5 md:border-r-4 md:border-dashed md:border-tomato p-4  ">
                  <p className="font-black text-1xl text-tomato ">
                    {" "}
                    Alias: {""}
                    <span className="font-bold  text-white">
                     Velu
                    </span>
                  </p>
                  <p className="font-black text-1xl text-tomato">
                    {" "}
                    Registro: {""}
                    <span className="font-bold text-white ">22110228</span>
                  </p>
                  <p className="font-black text-1xl text-tomato">
                    {" "}
                    Materia: {""}
                    <span className="font-bold text-white ">
                      Arquitectura de Software
                    </span>
                  </p>
                  <p className="font-black text-1xl text-tomato">
                    {" "}
                    Nombre Maestra: {""}
                    <span className="font-bold text-white ">
                      Rodriguez Jannet
                    </span>
                  </p>
                  <p className="font-black text-1xl text-tomato">
                    {" "}
                    Nombre Actividad: {""}
                    <span className="font-bold text-white ">
                      Proyecto Integrador
                    </span>
                  </p>
                </div>
                <div className="">
                  <img
                    className="h-60 mx-auto "
                    src="/ceti.png"
                    alt=""
                  />
                </div>
              </div>
            </section>
          )}
        </main>
      );
}