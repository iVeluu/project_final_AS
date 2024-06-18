import ListItem from "../../components/ListItem";
import Title from "../../components/Title";

export default function IADS() {
  return (
    <div className="max-w-7xl mx-auto mt-10 ">
      <section className="border-violet-700 border-4 p-3 rounded-lg m-4  ">
        <Title info={"Introducción a la Arquitectura y Diseño del Software"} />
        <h2 className=" text-white text-center mb-5 font-bold">
          Metodologías de desarrollo de software
        </h2>
        <div className="grid md:grid-cols-2 border-b-4 border-white ">
          <div className="flex flex-col p-5">
            <p className="text-white">
              La metodología de desarrollo de software es el conjunto de
              técnicas y métodos que se utilizan para diseñar una solución de
              software informático. Es importante señalar que existen varias, de
              manera que es una decisión de cada equipo.
            </p>
            <p className="text-white">
              Trabajar con una metodología es imprescindible por una cuestión de
              organización. No en vano, los factores tienen que estar ordenados
              y saber cómo se van a utilizar.
            </p>
            <p className="text-white">
              Por otra parte, las metodologías también sirven para controlar el
              desarrollo del trabajo. Esto sirve para minimizar los márgenes de
              errores y anticiparse a esa situación.
            </p>
            <p className="text-white">
              Otra ventaja de utilizar una metodología es que te hace ahorrar
              tiempo y gestionar mejor los recursos disponibles. Esto sucede
              tanto en metodologías a corto como a largo plazo. Cuando te
              decantes por un sistema, has de tener en cuenta este factor. Al
              final, uno de los elementos básicos es optimizar los recursos a tu
              alcance.
            </p>
          </div>
          <img
            src="/I1.png"
            alt="imagen prueba"
            className="mx-auto h-80 mb-4"
          />
        </div>
        <div className=" grid md:grid-cols-3 p-5 sm:space-y-2 md:space-y-0 items-start gap-5 border-b-4">
          <div className="space-y-4">
            <h2 className=" text-white text-center mb-5 font-bold">
              Arquitectura y diseño de software.
            </h2>
            <p className="text-white">
              La arquitectura de software se refiere a la estructura y diseño de
              un sistema de software. Es una representación de alto nivel que
              define cómo los componentes del software interactúan entre sí,
              cómo se organizan y cómo cumplen con los requisitos funcionales y
              no funcionales del sistema.
            </p>
            <p className="text-white">
              La arquitectura de software proporciona una visión global del
              sistema, lo que permite a los desarrolladores y arquitectos
              comprender su estructura y tomar decisiones informadas durante el
              proceso de desarrollo.
            </p>
          </div>
          <div>
            <h2 className=" text-white text-center mb-5 font-bold">
              Arquitectura lógica y física de un sistema.
            </h2>
            <div className="space-y-4">
              <p className="text-white ">
                En este momento, es útil detenerse y analizar la diferencia
                entre la arquitectura lógica y la arquitectura física, y cómo se
                aplica al diseño de aplicaciones basadas en microservicios.
              </p>
              <p className="text-white ">
                Para empezar, la creación de microservicios no requiere el uso
                de ninguna tecnología específica. Por ejemplo, los contenedores
                de Docker no son obligatorios para crear una arquitectura basada
                en microservicios. Esos microservicios también se pueden
                ejecutar como procesos sin formato. Los microservicios son una
                arquitectura lógica.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className=" text-white text-center mb-5 font-bold">
              Rol de los patrones de diseño en el diseño.
            </h2>
            <p className="text-white ">
              Es muy importante entender que los patrones de diseño no nacen
              para imponer unas alternativas frente a otras o para eliminar la
              creatividad que es inherente al proceso mismo del diseño.
            </p>
            <p className="text-white ">
              Los patrones de diseño tienen como objetivo proporcionar catálogos
              de elementos reusables en el diseño de sistemas de software y
              evitar la reiteración en la búsqueda de soluciones a problemas ya
              conocidos y solucionados anteriormente.
            </p>
            <p className="text-white ">
              Por eso, cabe recordar que en algunos casos, puede darse la
              situación de que el patrón no es aplicable y querer forzar su uso,
              sería un error.
            </p>
          </div>
        </div>
        <div>
          <h2 className=" text-white text-center mb-5 font-bold mt-5">
            Metodologías de desarrollo de software
          </h2>
          <p className="text-white p-5">
            La arquitectura y el diseño del software son componentes
            fundamentales en cualquier proyecto de desarrollo de software, y su
            enfoque puede variar significativamente dependiendo de si se
            utilizan metodologías clásicas (como el Modelo en Cascada) o
            metodologías ágiles (como Scrum o Kanban). A continuación, se
            presenta una comparación de estos enfoques:
          </p>
          <div className="grid md:grid-cols-2  gap-4">
            <div>
              <h2 className=" text-white text-center mb-5 font-bold mt-5">
                Metodologías Clásicas
              </h2>
              <ul className="list-decimal px-6 space-y-4">
                <ListItem
                  span={"Definición y Planificación Extensiva:  "}
                  info={
                    " La arquitectura del software se define completamente al inicio del proyecto. Se invierte mucho tiempo en la planificación y en la creación de documentos detallados."
                  }
                />
                <ListItem
                  span={"Documentación Completa:   "}
                  info={
                    " Se crean documentos extensos que describen la arquitectura, incluyendo diagramas detallados de la estructura del sistema, componentes, interfaces, y dependencias."
                  }
                />
                <ListItem
                  span={"Rígida y Estática: "}
                  info={
                    "  La arquitectura es rígida y no se espera que cambie significativamente una vez definida. Cualquier cambio es costoso y puede requerir una reevaluación completa del proyecto."
                  }
                />
              </ul>
            </div>
            <div>
              <h2 className=" text-white text-center mb-5 font-bold mt-5">
                Metodologías Ágiles
              </h2>
              <ul className="list-decimal px-6 space-y-4">
                <ListItem
                  span={"Evolutiva y Adaptable:  "}
                  info={
                    "La arquitectura del software es evolutiva y puede adaptarse a medida que el proyecto avanza. Se define una arquitectura inicial, pero se espera y se facilita su evolución."
                  }
                />
                <ListItem
                  span={"Documentación Justo a Tiempo:    "}
                  info={
                    " Se mantiene una documentación mínima y justo a tiempo, centrada en lo que es necesario para apoyar el desarrollo en curso."
                  }
                />
                <ListItem
                  span={"Feedback Continuo: "}
                  info={
                    "   La arquitectura se adapta continuamente basado en el feedback recibido durante los ciclos de desarrollo cortos."
                  }
                />
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h2 className=" text-white text-center mb-5 font-bold mt-5">
                Diseño del Software de Metodologías Clásicas
              </h2>
              <ul className="list-disc px-6 space-y-4">
                <ListItem
                  span={"Diseño Detallado Inicial:  "}
                  info={
                    " Al igual que con la arquitectura, el diseño del software se realiza en detalle antes de comenzar la codificación."
                  }
                />
                <ListItem
                  span={"Especificaciones Complejas:   "}
                  info={
                    "  Se crean especificaciones detalladas para cada componente del sistema, incluyendo algoritmos, estructuras de datos, y flujos de trabajo."
                  }
                />
                <ListItem
                  span={"Especificaciones Complejas: "}
                  info={
                    "  Debido a la naturaleza secuencial del proceso, se intenta minimizar los cambios en el diseño una vez que se ha comenzado el desarrollo."
                  }
                />
              </ul>
            </div>
            <div>
              <h2 className=" text-white text-center mb-5 font-bold mt-5">
                Diseño del Software de Metodologías Ágiles
              </h2>
              <ul className="list-disc px-6 space-y-4">
                <ListItem
                  span={"Diseño Iterativo:  "}
                  info={
                    " El diseño del software se realiza de manera iterativa y incremental. Se crean diseños iniciales simples que se refinan y mejoran con cada iteración."
                  }
                />
                <ListItem
                  span={"Flexibilidad y Refactorización:   "}
                  info={
                    "  Se espera que el diseño cambie y se mejore a lo largo del tiempo. La refactorización es una práctica común y aceptada."
                  }
                />
                <ListItem
                  span={"Flexibilidad y Refactorización: "}
                  info={
                    " Los equipos de desarrollo colaboran estrechamente con los stakeholders para ajustar el diseño basado en el feedback constante y las necesidades cambiantes."
                  }
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
