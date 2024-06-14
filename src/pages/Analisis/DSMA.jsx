import Title from "../../components/Title";

export default function DSMA() {
  return (
    <div className="max-w-6xl mx-auto mt-10 ">
      <section className="border-violet-700 border-4 p-6 rounded-lg m-4 space-y-6">
        <Title info={"Diseño de software utilizando metodologías ágiles."} />
        <div className="flex flex-col">
          <h2 className="text-white text-2xl font-bold my-5 ">
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
          <h2 className="text-white text-2xl font-bold my-5 text-right">SCRUM</h2>
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
          <h2 className="text-white text-2xl font-bold my-5">
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
          <h2 className="text-white text-2xl font-bold my-5 text-right">Kanban</h2>
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
        </div>
      </section>
    </div>
  );
}
