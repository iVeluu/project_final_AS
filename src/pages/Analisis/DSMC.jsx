import ListItem from "../../components/ListItem";
import Title from "../../components/Title";

export default function DSMC() {
  return (
    <div className="max-w-6xl mx-auto mt-10 ">
      <section className="border-violet-700 border-4 p-6 rounded-lg m-4 space-y-6">
        <Title info={"Diseño del software utilizando metodologías clásicas"} />
        <h2 className="text-white text-2xl font-bold text-center">
          ¿Qué son las metodologías de desarrollo de software?
        </h2>
        <div className="grid md:grid-cols-2 border-b-4 border-violet-600 p-4 space-y-4">
          <div>
            <p className="text-white mb-4">
              Una metodología de desarrollo de software es un conjunto de
              prácticas, técnicas y herramientas utilizadas por los equipos de
              desarrollo de software para planificar, diseñar, construir, probar
              y entregar software de alta calidad de manera eficiente y
              efectiva.
            </p>
            <p className="text-white mb-4">
              Estas metodologías establecen una estructura para el ciclo de vida
              del software, que incluye la definición de requisitos, el diseño,
              la codificación, la prueba, la implementación y el mantenimiento.
              También establecen roles y responsabilidades para los miembros del
              equipo, procesos para la gestión de proyectos, la comunicación y
              el seguimiento del progreso.
            </p>
          </div>
          <img
            src="I3.jpg"
            alt="imagen metodologias"
            className="h-52 mx-auto "
          />
        </div>

        <div className="grid md:grid-cols-3 p-4 gap-5 border-b-4 border-violet-600">
          <div>
            <h2 className="text-center text-white font-bold">
              Método Waterfall o Cascada
            </h2>
            <div className="text-white space-y-4 mt-5">
              <p>
                Esta metodología facilita organizar las actividades del proyecto
                verticalmente (de arriba hacia abajo) para ejecutar de forma
                secuencial cada avance evitando pasar a la siguiente si la misma
                no está concluida satisfactoriamente.
              </p>
              <p>
                Incluye fases de análisis de requisitos, diseño del sistema,
                diseño del programa, modificación de programa, diseño de
                pruebas, finalizando con las fases de codificación y
                mantenimiento del software.
              </p>
              <img
                src="El_modelo_de_desarrollo_en_cascada.svg.png"
                alt="sdasdsa"
                className="mx-auto"
              />
            </div>
          </div>
          <div>
            <h2 className="text-center text-white font-bold">
              Método de Prototipos
            </h2>
            <div className="text-white space-y-4 mt-5">
              <p>
                Se basa en la creación de un borrador del software sin importar
                los detalles donde los usuarios puedan dar un feedback más
                directo al interactuar con la aplicación en esta fase.
              </p>
              <p>
                Este método permite verificar los posibles fallos técnicos, así
                como la inclusión de mejoras según el uso de los usuarios al ser
                bastante interactivo, aunque esto implica un costo adicional en
                el presupuesto que debe ser considerado seriamente.
              </p>
              <img
                src="modelo-de-prototipos-en-ingenieria-de-software-Photoroom.png"
                alt="modelo prototipos"
                className="mx-auto"
              />
            </div>
          </div>
          <div>
            <h2 className="text-center text-white font-bold">
              Método Incremental
            </h2>
            <div className="text-white space-y-4 mt-5">
              <p>
                Es parecido al de cascada por el trabajo en fases, pero este se
                diferencia porque en cada etapa se le va agregando un
                aplicabilidad o función.
              </p>
              <p>
                Bajo este esquema se puede notar significativamente la mejora
                que vayas realizando en el desarrollo de software y
                adicionalmente te permite ir verificando el funcionamiento de
                esos procesos antes de finalizar el programa.
              </p>
              <img
                src="ModeloIncremental_grafica.jpg"
                alt="modelo incremental"
              />
            </div>
          </div>
        </div>

        <div className="md:max-w-2xl max-w-6xl mx-auto md:border-x-4 md:border-violet-600 mt-5 ">
          <div className="mx-5 space-y-5">
            <h2 className="text-white text-2xl font-bold text-center ">
              Diseño de la capa de dominio.
            </h2>
            <p className="text-white">
              Es el componente de la arquitectura responsable de representar los
              conceptos del negocio, la información sobre la situación del
              negocio y las reglas del negocio. El estado que refleja la
              situación de la empresa a través de su sistema digital se controla
              y utiliza aquí, aunque los detalles técnicos de su almacenamiento
              se delegan en la infraestructura.
            </p>
            <p className="text-white">
              En definitiva, es el componente que implementa los flujos de
              trabajo o producción de la compañía a través de un lenguaje muy
              próximo al empresarial.
            </p>
            <h2 className="text-white text-2xl font-bold text-center ">
              Domain Model.
            </h2>
            <p className="text-white">
              <span className="font-bold">DESCRIPCION - {""}</span>Un modelo de
              objetos del dominio que incorpora tanto comportamiento como datos.
            </p>
            <p className="text-white">
              Un Domain Model crea una red de objetos interconectados, donde
              cada objeto representa a un concepto significativo, ya sea tan
              grande como una corporación o tan pequeño como un ítem de una
              factura.
            </p>
            <img src="DM1.jpg" alt="Imagen Domain Model" />
            <h2 className="text-white text-2xl font-bold text-center ">
              Transaction Script.
            </h2>
            <p className="text-white">
              <span className="font-bold">DESCRIPCION - {""}</span>Organiza la
              lógica de negocio por procedimiento, donde cada procedimiento
              maneja un único pedido desde la capa de presentación.
            </p>
            <ul className="list-disc px-6 space-y-4">
              <ListItem
                info={
                  "Un Transaction Script organiza cada transacción de negocio (funcionalidad) en un único procedimiento, haciendo las llamadas pertinentes a la capa de acceso a datos."
                }
              />
              <ListItem
                info={
                  "Cada transacción de negocio tendrá su propio Transaction Script, aunque sub-tareas comunes pueden ser aisladas en sub-procedimientos."
                }
              />
            </ul>
            <img src="TS1.jpg" alt="Imagen transcipt  Model" />
            <h2 className="text-white text-2xl font-bold text-center ">
              Patrones de diseño de la capa de dominio.
            </h2>
            <p className="text-white">
              Los patrones de diseño de la capa de dominio son estrategias
              arquitectónicas utilizadas para estructurar y gestionar la lógica
              de negocio y las reglas de negocio en un sistema de software.
              Estos patrones ayudan a mantener el código organizado, modular y
              fácilmente mantenible.
            </p>
            <h2 className="text-white text-2xl font-bold text-center ">
              Uso de servicios software.
            </h2>
            <p className="text-white">
              El uso de servicios de software implica la utilización de
              componentes de software que proporcionan funcionalidades
              específicas a través de interfaces bien definidas. Estos servicios
              pueden ser internos o externos y se comunican mediante protocolos
              estándar.
            </p>
            <h2 className="text-white text-2xl font-bold text-center ">
              Diseño de la capa de presentación.
            </h2>
            <p className="text-white">
              Es sencillamente la interfaz de usuario final. A grandes rasgos,
              se encarga de mostrar la información al usuario, interpretar sus
              órdenes y desencadenar las acciones de negocio pertinentes a
              través de su comunicación al resto de capas intervinientes.
            </p>
            <p className="text-white">
              Cabe destacar en este punto que, en ocasiones y con mucha
              asiduidad, se identifica al usuario o actor externo con un ser
              humano. Nada más lejos de la realidad. El usuario final puede ser
              cualquier otra entidad: una máquina, un dispositivo IoT, otro
              sistema informático, etc. Es un punto a tener muy en cuenta de
              cara al diseño de esta capa.
            </p>
            <img src="CP1.png" alt="Capa de presentacion interna imagen" />

            <h2 className="text-white text-2xl font-bold text-center ">
              Diseño externo de un sistema software.
            </h2>
            <p className="text-white">
              El diseño externo de un sistema de software se refiere a cómo el
              sistema interactúa con los usuarios y otros sistemas externos.
              Esto incluye la definición de interfaces, protocolos de
              comunicación, y otros elementos que establecen la forma en que el
              sistema se presenta y opera externamente.
            </p>
            <h2 className="text-white text-2xl font-bold text-center ">
              Diseño interno de la capa de presentación.
            </h2>
            <p className="text-white">
              El diseño interno de la capa de presentación se centra en la
              estructura y organización de los componentes que permiten la
              interacción entre los usuarios y el sistema. Este diseño debe
              garantizar una experiencia de usuario fluida, intuitiva y
              eficiente, además de facilitar el desarrollo y mantenimiento del
              software.
            </p>
            <h2 className="text-white text-2xl font-bold text-center ">
              Diseño de la capa de datos.
            </h2>
            <img src="CD1..JPG" className="mx-auto" alt="" />
            <h2 className="text-white text-2xl font-bold text-center ">
              Tecnología de bases de datos relacionales.
            </h2>
            <p className="text-white">
              Las bases de datos relacionales suelen usar tablas con datos
              organizados en filas (que contienen entidades) y columnas (que
              contienen atributos de entidad). Este proceso se conoce como
              normalización. Cada fila contiene un identificador único o una
              clave que une las tablas para establecer una relación.
            </p>
            <h2 className="text-white text-2xl font-bold text-center ">
              Persistencia en Bases de Datos
            </h2>
            <p className="text-white">
              La persistencia de la base de datos se refiere a los datos o
              metadatos guardados durante la ejecución de una integración.
              Puedes habilitar o inhabilitar la persistencia de la base de datos
              para la integración mediante la opción Persistencia de bases de
              datos en la barra de herramientas de Diseñador de integración.
            </p>
            <p className="text-white">
              Inhabilitar la persistencia de la base de datos mejora la latencia
              de integración general y reduce la generación de registros de
              eventos adicionales que incluyen detalles de ejecución de la
              integración, como los parámetros de solicitud, los parámetros de
              respuesta y la ejecución de tareas de la integración.
            </p>
            <h2 className="text-white text-2xl font-bold text-center ">
              Diseño directo de la persistencia.
            </h2>
            <p className="text-white">
              El diseño directo de la persistencia en bases de datos se refiere
              a cómo los datos se almacenan y recuperan de una base de datos de
              manera eficiente y estructurada. Este diseño debe asegurar la
              integridad, consistencia, y rendimiento del almacenamiento de
              datos.
            </p>
            <img src="P1.png" alt="Persistencia Imagen" className="mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
 