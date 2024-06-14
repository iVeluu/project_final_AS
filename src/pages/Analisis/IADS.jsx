import ListItem from "../../components/ListItem";
import Title from "../../components/Title";

export default function IADS() {
  return (
    <div className="max-w-7xl mx-auto mt-10 ">
      <section className="border-violet-700 border-4 p-3 rounded-lg m-4  ">
        <Title info={"Introducción a la Arquitectura y Diseño del Software"} />
        <h2 className=" text-white text-center mb-5 font-bold">
          ¿Qué es la Arquitectura del Software?
        </h2>
        <div className="grid md:grid-cols-2 border-b-4 border-white ">
          <div className="flex flex-col p-5">
            <p className="text-white">
              La arquitectura del software se refiere a la estructura
              fundamental de un sistema de software, incluyendo sus componentes,
              las relaciones entre ellos y los principios que guían su diseño y
              evolución. La arquitectura del software es un concepto crucial
              porque:
            </p>
            <ul className="list-disc p-6 space-y-3">
              <ListItem
                info={
                  "Proporciona un marco para la implementación y evolución del software."
                }
                span={"Guía el desarrollo: "}
              />
              <ListItem
                info={
                  "Ayuda a los equipos de desarrollo a comprender el sistema y a tomar decisiones informadas."
                }
                span={"Facilita la comunicación: "}
              />
              <ListItem
                info={
                  "Proporciona una vista de alto nivel del sistema, mostrando cómo los componentes interactúan."
                }
                span={"Define la estructura: "}
              />
            </ul>
          </div>
          <img src="/I1.png" alt="imagen prueba" className="mx-auto h-80" />
        </div>
        <div className=" grid md:grid-cols-3 p-5 sm:space-y-2 md:space-y-0 items-start">
          <div>
            <h2 className=" text-white text-center mb-5 font-bold">
              Principios de la Arquitectura del Software
            </h2>
            <ul className="list-decimal p-6 space-y-3 ">
              <ListItem
                span={"Modularidad: "}
                info={
                  "Dividir el sistema en módulos independientes que pueden desarrollarse y entenderse por separado."
                }
              />
              <ListItem
                span={"Escalabilidad: "}
                info={
                  "Diseñar el sistema de manera que pueda manejar un aumento en la carga o el tamaño de los datos sin degradarse."
                }
              />
              <ListItem
                span={"Mantenibilidad: "}
                info={
                  "Facilitar la corrección de errores, la adición de nuevas funcionalidades y la adaptación a los cambios."
                }
              />
            </ul>
          </div>
          <div>
            <h2 className=" text-white text-center mb-5 font-bold">
              ¿Qué es el Diseño del Software?
            </h2>
            <div>
              <p className="text-white p-6">
                El diseño del software se refiere al proceso de definir la
                arquitectura, componentes, interfaces y otros detalles del
                sistema o componente. Es una etapa más detallada y específica
                dentro del ciclo de desarrollo de software, que traduce los
                requisitos en una especificación técnica que los desarrolladores
                pueden implementar.
              </p>
              <img src="aaaaa.jpg" alt="design" className="mx-auto h-32" />
            </div>
          </div>
          <div>
            <h2 className=" text-white text-center mb-5 font-bold">
              Diferencias entre Arquitectura y Diseño 
            </h2>
            <ul className="list-decimal p-6 space-y-3 ">
              <ListItem
                span={"Nivel de Abstracción: "}
                info={
                  "La arquitectura opera a un nivel más alto, enfocándose en la estructura general del sistema, mientras que el diseño es más detallado y específico."
                }
              />
              <ListItem
                span={"Enfoque: "}
                info={
                  "La arquitectura aborda las decisiones estructurales y de alto nivel, como la selección de patrones arquitectónicos y la distribución de responsabilidades. El diseño se centra en cómo implementar esas decisiones en componentes específicos y en la lógica interna."
                }
              />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
