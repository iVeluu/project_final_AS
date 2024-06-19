import { useState } from "react";
import Analisis from "./Analisis";
import Teoria from "./Teoria";
import ListItem from "./ListItem";

export default function Home() {

      const [analisis, setAnalisis] = useState(false);
      const [teoria, setTeoria] = useState(false);
      const [info, setInfo] = useState(false);
      const [referencias, setReferencias] = useState(false);

      const handleTeoriaClick = () => {
            setTeoria(!teoria);
      };

      const handleAnalisisClick = () => {
            setAnalisis(!analisis);
      };

      const handleInfoClick = () => {
        setInfo(!info);
      };

      const handleReferenciasClick = () => {
        setReferencias(!referencias);
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
                    <span className="font-bold  text-white">Velu</span>
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
                  <img className="h-60 mx-auto " src="/ceti.png" alt="" />
                </div>
              </div>
            </section>
          )}
          <h2
            className="text-center mt-10 font-black text-1xl uppercase text-white bg-referencias p-3 rounded-lg mx-auto w-36 max-w-7xl mb-10"
            onClick={handleReferenciasClick}
          >
            Referencias
          </h2>
          {referencias && (
            <section className="max-w-7xl mx-auto mt-10 ">
              <div className="space-y-5 border-4  border-referencias p-4 rounded-lg mb-10 mx-4 text-white">
                <ul className="list-disc px-6 space-y-4">
                  <ListItem
                    info={
                      "Valtx. (2022, 19 julio). Metodologías para el desarrollo de software: ¿Qué son y para qué sirven? Valtx. https://www.valtx.pe/blog/metodologias-para-el-desarrollo-de-software-que-son-y-para-que-sirven"
                    }
                  />
                  <ListItem
                    info={
                      "Long method. (s. f.). https://refactoring.guru/es/smells/long-method"
                    }
                  />
                  <ListItem
                    info={
                      "Equipo editorial de IONOS. (2022, 4 julio). Pair Programming: principio de los cuatro ojos en el desarrollo de software. IONOS Digital Guide. https://www.ionos.mx/digitalguide/paginas-web/desarrollo-web/pair-programming/"
                    }
                  />
                  <ListItem
                    info={
                      "Henry, R. (2021, 17 septiembre). Cómo funciona el Pair Programming | Henry Blog. Henry. https://blog.soyhenry.com/que-es-el-pair-programming/#:~:text=El%20Pair%20Programming%20es%20una,para%20intervenir%20en%20el%20c%C3%B3digo"
                    }
                  />
                  <ListItem
                    info={
                      "Patrón arquitectónico – domain model. (2013, 23 septiembre). El Blog del Maldo. https://sebmaldo.com/2013/09/20/patron-arquitectonico-domain-model/"
                    }
                  />
                  <ListItem
                    info={
                      "border-radius - CSS: Cascading Style Sheets | MDN. (2023, 21 febrero). MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"
                    }
                  />
                  <ListItem
                    info={
                      "Tailwind CSS - Rapidly build modern websites without ever leaving your HTML. (s. f.-b). Tailwind CSS. https://tailwindcss.com/"
                    }
                  />
                  <ListItem info={"React. (s. f.). https://es.react.dev/"} />
                  <ListItem
                    info={
                      "Getting started. (s. f.). Vitejs. https://vitejs.dev/guide/"
                    }
                  />
                </ul>
              </div>
            </section>
          )}
        </main>
      );
}