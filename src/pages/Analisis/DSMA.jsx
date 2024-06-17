import ListItem from "../../components/ListItem";
import Title from "../../components/Title";

export default function DSMA() {
  return (
    <div className="max-w-6xl mx-auto mt-10 ">
      <section className="border-violet-700 border-4 p-6 rounded-lg m-4 space-y-6">
        <Title info={"Diseño de software utilizando metodologías ágiles."} />
        <div className="flex flex-col">
          <h2 className="text-white text-2xl font-bold my-5 text-center md:text-left ">
            ¿Qué son las metodologías ágiles?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 border-b-4 border-violet-600 py-5">
            <img src="agiles.jpg" alt="metod agiles" className="rounded-lg" />
            <div className="text-white space-y-5 my-auto">
              <p>
                Las metodologías ágiles de desarrollo de software son
                ampliamente utilizadas debido a su alta flexibilidad y capacidad
                para adaptarse rápidamente a los cambios.
              </p>
              <p>
                Estas metodologías permiten a los equipos de trabajo ser más
                productivos y eficientes al tener claridad sobre las tareas que
                deben realizar en cada momento.
              </p>
              <p>
                Además, proporcionará la flexibilidad necesaria para ajustar el
                software a medida que surjan nuevas necesidades, lo que
                resultará en la construcción de aplicaciones más funcionales y
                satisfactorias para los usuarios.
              </p>
            </div>
          </div>
          <h2 className="text-white text-2xl font-bold my-5 text-center md:text-left">
            SCRUM
          </h2>
          <div className="grid md:grid-cols-2 gap-4 border-b-4 border-violet-600 py-5">
            <div className="text-white space-y-5 my-auto">
              <p>
                SCRUM es un modelo que integra un conjunto de prácticas y roles
                un marco de trabajo o Framework, donde el desarrollador busca un
                único producto o servicio en un periodo de tiempo determinado.
              </p>
              <p>
                La versatilidad de SCRUM permite que los proyectos desarrollados
                con esta metodología sean más adaptables, interactivos, rápidos,
                flexibles y eficaces.
              </p>
              <p>
                Una característica de esta metodología es la división de sus
                tareas y roles muy bien estructuradas y optimizadas.
              </p>
            </div>
            <img src="SCRUM.png" alt="metod agiles" className="rounded-lg" />
          </div>
          <h2 className="text-white text-2xl font-bold my-5 text-center md:text-left">
            Extreme Programming o XP
          </h2>
          <div className="grid md:grid-cols-2 gap-4 border-b-4 border-violet-600 py-5">
            <img
              src="xp2.jpg"
              alt="metod agiles"
              className="rounded-lg  my-auto"
            />
            <div className="text-white space-y-5 my-auto">
              <p>
                Extreme Programming es una metodología que permite mejorar la
                eficiencia en el desarrollo de software en las empresas,
                aplicando prácticas de ingeniería en la creación de los
                productos.
              </p>
              <p>
                XP compite muy de cerca con Scrum en el entorno TI, pero ha
                perdido un poco de popularidad en los últimos años sin dejar de
                ser una metodología exitosa para los negocios tecnológicos.
              </p>
              <p>
                En la versatilidad de este método permite que tres de las
                variables sean fijadas por personas externas al equipo de
                desarrollo como puede ser el cliente o el encargado del proyecto
                (no de desarrollo). La otra variable queda bajo la
                responsabilidad del departamento de TI quien fija su valor para
                darle el equilibrio y la mejor toma de decisión en el proceso.
              </p>
            </div>
          </div>
          <h2 className="text-white text-2xl font-bold my-5 text-center md:text-left">
            Kanban
          </h2>
          <div className="grid md:grid-cols-2 gap-4 border-b-4 border-violet-600 py-5">
            <div className="text-white space-y-5 my-auto">
              <p>
                La metodología Kanban proviene de las técnicas gerenciales
                empleadas por Toyota para agilizar la producción en sus fábricas
                minimizando errores y pérdidas.
              </p>
              <p>
                Por lo general este método se representa en forma de un tablero
                donde se refleja el flujo de los procesos en un trabajo
                designado, permitiendo a cada responsable mover sus tareas
                libremente según los avances, de esta forma se genera mayor
                confianza y control a nivel visual.
              </p>
            </div>
            <img
              src="kanban.jpg"
              alt="metod agiles"
              className="rounded-lg  my-auto"
            />
          </div>
          {/* izquierda */}
          <h2 className="text-white text-2xl font-bold my-5 text-center md:text-left">
            TDD
          </h2>
          <div className="grid md:grid-cols-2 gap-4 border-b-4 border-violet-600 py-5">
            <img
              src="TDD1.webp"
              alt="metod agiles"
              className="rounded-lg  my-auto"
            />
            <div className="text-white space-y-5 my-auto">
              <p>
                El test driven development (TDD) o en español desarrollo guiado
                por pruebas, es un enfoque de programación que se utiliza
                durante el desarrollo de software en el que se realizan pruebas
                unitarias antes de escribir el código. Básicamente, el objetivo
                consiste en hacer un código limpio, robusto y simple, para ello;
                es necesario crear en primer lugar, casos de prueba para cada
                funcionalidad que se quiera desarrollar, se testea, y en caso de
                detectar algún fallo, se rescribe un código libre de errores.
              </p>
              <p>
                El enfoque TDD pretende eliminar la duplicación de código y
                dejar que los desarrolladores sólo escriban un código nuevo, en
                caso de que las pruebas fallen, subsanando los incontables
                errores que puedan producirse en miles de líneas de código,
                además de permitir generar una documentación mucho más
                transparente y que consecuentemente se cree una red de seguridad
                ante cualquier modificación.
              </p>
            </div>
          </div>

          {/* derecha */}
          <h2 className="text-white text-2xl font-bold my-5 text-center md:text-left">
            Tests en TDD.
          </h2>
          <div className="grid md:grid-cols-2 gap-4 border-b-4 border-violet-600 py-5">
            <div className="text-white space-y-5 my-auto">
              <p>
                Realizar un proceso de Test Driven Development consta de 3
                fases:
              </p>
              <ul className="list-disc px-6 space-y-4 ">
                <ListItem
                  span={"Desarrollo y Escritura de la prueba: "}
                  info={
                    "el desarrollador debe definir de forma clara los requerimientos que se llevarán a cabo para completar la escritura del código y que se usarán para codificar y validar las diferentes pruebas que se realicen. "
                  }
                />
                <ListItem
                  span={"Validación de las pruebas: "}
                  info={
                    "Una vez validadas las pruebas establecidas podemos decir que se cumplen los requisitos establecidos. Durante esta fase no se contemplan buenas prácticas, sino que simplemente se verifica que los test propuestos se cumplen, por ello se le conoce como fase green ya que este color es el más representativo para este proceso."
                  }
                />
                <ListItem
                  span={"Refactorización: "}
                  info={
                    "En esta parte, se revisará el código escrito con el objetivo de verificar que cumpla con las buenas prácticas y se verifique que el código sea limpio."
                  }
                />
              </ul>
            </div>
            <img
              src="TDD.webp"
              alt="metod agiles"
              className="rounded-lg  my-auto mt-5"
            />
          </div>
          {/* izquierda */}
          <h2 className="text-white text-2xl font-bold my-5 text-center md:text-left">
            Coding en TDD
          </h2>
          <div className="grid md:grid-cols-2 gap-4 border-b-4 border-violet-600 py-5">
            <img
              src="sf1.jpg"
              alt="metod agiles"
              className="rounded-lg  my-auto "
            />
            <div className="text-white space-y-5 my-auto">
              <p className="font-bold">
                8 ventajas de trabajar un Test Driven Development
              </p>
              <ul className="list-decimal px-6 space-y-4 ">
                <ListItem info={"Reducción de Errores"} />
                <ListItem info={"Detección de requisitos no especificados"} />
                <ListItem info={"Eliminación de código duplicado"} />
                <ListItem info={"Menor coste de mantenimiento"} />
                <ListItem info={"Menor redundancia"} />
                <ListItem info={"Mayor productividad"} />
                <ListItem info={"Mayor documentación"} />
                <ListItem info={"Potenciamiento de metodología ágil"} />
              </ul>
            </div>
          </div>
          {/* DERECHA */}
          <h2 className="text-white text-2xl font-bold my-5 text-center md:text-left">
            Pair Programming
          </h2>
          <div className="grid md:grid-cols-2 gap-4 border-b-4 border-violet-600 py-5">
            <div className="text-white space-y-5 my-auto">
              <p>
                El método conocido como pair programming (en español,
                programación en pareja) se utiliza principalmente en el
                desarrollo ágil de software y, más concretamente, en la
                programación extrema (XP). El pair programming especifica que
                siempre haya dos personas trabajando al mismo tiempo en el
                código y que, en la medida de lo posible, se sienten juntas. Una
                se encarga de escribir el código y la otra de supervisarlo en
                tiempo real. Al mismo tiempo, están constantemente
                intercambiando impresiones: debaten problemas, encuentran
                soluciones y desarrollan ideas creativas.
              </p>
              <p>
                Por lo general, a estos dos trabajadores se les asignan
                diferentes roles: el programador al que se le ha asignado el rol
                de piloto se encarga de escribir el código. El programador al
                que se le ha asignado el rol de copiloto se encarga de
                supervisar ese código. Una de las reglas del pair programming
                establece que estos dos roles se intercambien con regularidad (a
                intervalos cortos). De esta manera se evita una posible brecha
                jerárquica: se fomenta la igualdad entre ambos trabajadores y se
                consigue un intercambio fluido de roles.
              </p>
            </div>
            <img
              src="PR2.webp"
              alt="metod agiles"
              className="rounded-lg  my-auto "
            />
          </div>
          {/* izquierda */}
          <h2 className="text-white text-2xl font-bold my-5 text-center md:text-left">
            Simple Design
          </h2>
          <div className="grid md:grid-cols-2 gap-4 border-b-4 border-violet-600 py-5">
            <img
              src="simple.jpg"
              alt="metod agiles"
              className="rounded-lg  my-auto "
            />
            <div className="text-white space-y-5 my-auto">
              <p>
                El <span className="font-bold">diseño simple </span> se centra
                en mantener el código y la arquitectura lo más simple posible,
                evitando la complejidad innecesaria. Se rige por varios
                principios clave:
              </p>
              <ul className="list-decimal px-6 space-y-4 ">
                <ListItem
                  span={"Comprensión Clara: "}
                  info={
                    "El código debe ser fácil de entender para otros desarrolladores."
                  }
                />
                <ListItem
                  span={" Eliminación de Redundancias: "}
                  info={"No debe haber código duplicado."}
                />
                <ListItem
                  span={"Eficiencia: "}
                  info={
                    " El código debe ser eficiente y cumplir con los requisitos de rendimiento."
                  }
                />
                <ListItem
                  span={"Flexibilidad: "}
                  info={
                    "El diseño debe ser flexible para permitir cambios futuros sin necesidad de reestructuraciones importantes."
                  }
                />
              </ul>
            </div>
          </div>
          {/* DERECHA */}
          <h2 className="text-white text-2xl font-bold my-5 text-center md:text-left">
            Incremental design
          </h2>
          <div className="grid md:grid-cols-2 gap-4 border-b-4 border-violet-600 py-5">
            <div className="text-white space-y-5 my-auto">
              <p>
                El diseño incremental implica desarrollar el sistema en pequeños
                pasos, mejorando y extendiendo la funcionalidad gradualmente.
                Este enfoque se alinea estrechamente con la metodología ágil y
                permite una adaptación rápida a los cambios de requisitos y la
                retroalimentación.
              </p>
              <ul className="list-decimal px-6 space-y-4 ">
                <ListItem
                  span={"Pequeñas Iteraciones:  "}
                  info={
                    "Se desarrolla y entrega una pequeña parte funcional del sistema en cada iteración."
                  }
                />
                <ListItem
                  span={" Pruebas Continuas: "}
                  info={
                    "Se realizan pruebas en cada iteración para asegurar que el sistema funciona correctamente. "
                  }
                />
                <ListItem
                  span={"Refactorización: "}
                  info={
                    " Se mejora continuamente el código existente para mantenerlo limpio y manejable."
                  }
                />
                <ListItem
                  span={"Feedback y Ajustes: "}
                  info={
                    "Se obtiene feedback frecuente de los usuarios y se ajusta el diseño en consecuencia."
                  }
                />
              </ul>
            </div>
            <img
              src="PR2.webp"
              alt="metod agiles"
              className="rounded-lg  my-auto "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
