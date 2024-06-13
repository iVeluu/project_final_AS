import { useState } from "react";
import Analisis from "./Analisis";
import Teoria from "./Teoria";
import Preguntas from "./Preguntas";

export default function Home() {

      const [analisis, setAnalisis] = useState(false);
      const [teoria, setTeoria] = useState(false);
      const [preguntas, setPreguntas] = useState(false);
      const [info, setInfo] = useState(false);

      const handleTeoriaClick = () => {
            setTeoria(!teoria);
      };

      const handleAnalisisClick = () => {
            setAnalisis(!analisis);
      };

      const handlePreguntasClick = () => {
            setPreguntas(!preguntas);
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
            className="text-center mt-10 font-black text-1xl uppercase text-white bg-fuchsia-600 p-3 rounded-lg mx-auto w-36 max-w-7xl"
            onClick={handlePreguntasClick}
          >
            Preguntas
          </h2>
          {preguntas && (
            <section className="grid md:grid-cols-2 max-w-7xl mx-auto mt-10 gap-4 mb-10   ">
              <Preguntas
                titulo="1. ¿Qué es la arquitectura en capas y orientada a objetos, el diseño del software (de metodologías clásicas y ágiles)?"
                enlace="P1"
              />
              <Preguntas
                titulo="2.  ¿Cuáles son esas metodologías y las más usadas en que se divide el diseño del software? y describe cada una de las metodologías."
                enlace="P2"
              />
              <Preguntas
                titulo="3. - Patrón arquitectónico en capas y orientado a objetos, aplicación y diseño."
                enlace="P3"
              />
              <Preguntas titulo="4. Patrones de Diseño" enlace="P4" />
            </section>
          )}
          <h2
            className="text-center mt-10 font-black text-1xl uppercase text-white bg-blue-600 p-3 rounded-lg mx-auto w-36 max-w-7xl"
            onClick={handleTeoriaClick}
          >
            Teoría
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
                    Nombre: {""}
                    <span className="font-bold  text-white">
                      Alejandro Velazquez Luuuuu jjj
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
                      Rodriguez Chavez Cruz Jannet
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
                    src="../../public/ceti.png"
                    alt=""
                  />
                </div>
              </div>
            </section>
          )}
        </main>
      );
}