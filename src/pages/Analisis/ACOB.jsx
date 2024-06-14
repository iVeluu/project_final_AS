import ListItem from "../../components/ListItem";
import Title from "../../components/Title";

export default function ACOB() {
  return (
    <div className="max-w-3xl mx-auto mt-10 ">
      <section className="border-violet-700 border-4 p-6 rounded-lg m-4 space-y-6 ">
        <Title info={"Arquitectura en Capas y Orientada a Objetos"} />
        <h2 className="text-white text-2xl text-center font-bold">
          Arquitectura en Capas
        </h2>
        <div className="grid grid-cols-3">
          <p className="text-white col-span-2">
            La arquitectura en capas es un estilo de diseño de software que
            organiza el sistema en capas distintas, cada una con
            responsabilidades específicas. Esta arquitectura facilita la
            separación de preocupaciones, permitiendo un diseño más modular y
            mantenible.
          </p>
          <img
            src="capas-Photoroom.png"
            alt="capas"
            className="mx-auto h-32 rounded-lg col-span-1"
          />
        </div>
        <h2 className="text-white text-2xl font-bold">
          Capas Comunes en una Arquitectura en Capas
        </h2>
        <ul className="list-decimal px-6 space-y-4">
          <ListItem
            span={"Capa de Presentación: "}
            info={
              "Gestionar la interacción con el usuario y la interacción con el usuario."
            }
          />
          <ListItem
            span={"Capa de Aplicación: "}
            info={
              "Contener la lógica de negocio y coordinar las actividades del sistema."
            }
          />
          <ListItem
            span={"Capa de Dominio: "}
            info={
              "Representar el dominio del problema, incluyendo las reglas y lógica de negocio específica."
            }
          />
          <ListItem
            span={"Capa de Persistencia: "}
            info={
              "Gestionar la interacción con la base de datos y otros sistemas de almacenamiento."
            }
          />
          <ListItem
            span={"Capa de Infraestructura: "}
            info={
              "Proveer servicios generales y utilidades que soportan las capas superiores."
            }
          />
        </ul>
        <h2 className="text-white text-2xl font-bold">
          Beneficios de la Arquitectura en Capas
        </h2>
        <ul className="list-decimal px-6 space-y-4">
          <ListItem
            span={"Modularidad: "}
            info={" Cada capa se desarrolla y mantiene por separado."}
          />
          <ListItem
            span={"Mantenibilidad: "}
            info={
              " Los cambios en una capa no afectan directamente a otras capas."
            }
          />
          <ListItem
            span={"Reusabilidad: "}
            info={
              "Componentes en una capa pueden ser reutilizados en diferentes partes del sistema."
            }
          />
        </ul>
        <h2 className="text-white text-2xl font-bold">Orientación a Objetos</h2>
        <p className="text-white">
          La orientación a objetos es un paradigma de programación que utiliza
          "objetos" para diseñar software. Los objetos son instancias de clases,
          que encapsulan datos y comportamiento.
        </p>
        <h2 className="text-white text-2xl font-bold">
          Principios de la Orientación a Objetos
        </h2>
        <ul className="list-disc px-6 space-y-4">
          <ListItem
            span={"Encapsulamiento: "}
            info={
              " Ocultar los detalles internos de los objetos y exponer solo lo necesario a través de interfaces públicas."
            }
          />
          <ListItem
            span={"Abstracción: "}
            info={
              " Simplificar la complejidad mediante la creación de modelos abstractos del mundo real."
            }
          />
          <ListItem
            span={"Herencia: "}
            info={
              " Permitir que una clase derive de otra, heredando sus atributos y métodos."
            }
          />
          <ListItem
            span={"Polimorfismo: "}
            info={
              "Permitir que un objeto se comporte de diferentes maneras según el contexto."
            }
          />
        </ul>
        <h2 className="text-white text-2xl font-bold">
          Integración de Arquitectura en Capas y Orientación a Objetos
        </h2>
        <p className="text-white">
          La arquitectura en capas y la orientación a objetos pueden combinarse
          de manera efectiva para crear sistemas robustos y mantenibles. En una
          aplicación orientada a objetos, cada capa puede estar compuesta por
          objetos que representan entidades y servicios específicos del dominio.
        </p>
      </section>
    </div>
  );
}
