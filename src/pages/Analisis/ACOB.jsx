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
          Aplicación del patrón arquitectónico en capas a los sistemas y
          servicios software.
        </h2>
        <p className="text-white">
          La separación de la aplicación en capas busca cumplir con el principio
          de separación de preocupaciones, de tal forma que cada capa se
          encargue una tarea muy definida, por ejemplo, la capa de presentación
          solo se preocupa por presentar la información de forma agradable al
          usuario, pero no le interesa de donde viene la información ni la
          lógica de negocio que hay detrás, en su lugar, solo sabe que existe
          una capa de negocio que le proporcionará la información. Por otra
          parte, la capa de negocio solo se encarga de aplicar todas las reglas
          de negocio y validaciones, pero no le interesa como recuperar los
          datos, guardarlos o borrarlos, ya que para eso tiene una capa de
          persistencia que se encarga de eso. Por otro lado, la capa de
          persistencia es la encargada de comunicarse a la base de datos, crear
          las instrucciones SQL para consultar, insertar, actualizar o borrar
          registros y retornarlos en un formato independiente a la base de
          datos. De esta forma, cada capa se preocupa por una cosa y no le
          interesa como le haga la capa de abajo para servirle los datos que
          requiere.
        </p>
        <img src="C1.webp" alt="Imagen helper" className="mx-auto" />
        <h2 className="text-white text-2xl font-bold">
          Principios de diseño de la arquitectura en capas.
        </h2>
        <ul className="list-decimal px-6 space-y-4">
          <ListItem
            span={"Separación de Responsabilidades (SoC): "}
            info={
              " Cada capa tiene una responsabilidad claramente definida y separada de las demás."
            }
          />
          <ListItem
            span={"Encapsulamiento: "}
            info={
              " Cada capa oculta su implementación interna y solo expone una interfaz bien definida."
            }
          />
          <ListItem
            span={"Interdependencias Controladas: "}
            info={
              "Las dependencias entre capas deben ser unidireccionales y claramente definidas."
            }
          />
          <ListItem
            span={"Reutilización "}
            info={
              " Las capas superiores pueden reutilizar las funcionalidades ofrecidas por las capas inferiores."
            }
          />
        </ul>
        <h2 className="text-white text-2xl font-bold">
          Beneficios de la Arquitectura en Capas
        </h2>
        <ul className="list-decimal px-6 space-y-4">
          <ListItem
            span={"Fácil de desarrollar: "}
            info={
              " Este estilo arquitectónico es especialmente fácil de implementar, además de que es muy conocido y una gran mayoría de las aplicaciones la utilizan."
            }
          />
          <ListItem
            span={"Fácil de desarrollar: "}
            info={
              " Debido a que la aplicación construida por capas, es posible ir probando de forma individual cada capa, lo que permite probar por separada cada capa."
            }
          />
          <ListItem
            span={"Fácil de mantener: "}
            info={
              "Debido a que cada capa hace una tarea muy específica, es fácil detectar el origen de un bug para corregirlo, o simplemente se puede identificar donde se debe aplicar un cambio."
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
        <img src="I2.png" alt="imagen" />
      </section>
    </div>
  );
}
