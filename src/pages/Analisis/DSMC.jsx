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

        <div className="grid md:grid-cols-3 p-4 gap-5">
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
              <img src="ModeloIncremental_grafica.jpg" alt="modelo incremental" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 