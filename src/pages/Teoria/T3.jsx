import React from 'react'
import Title from '../../components/Title';
import ListItem from '../../components/ListItem';

export default function T3() {
  return (
    <div className="max-w-5xl mx-auto  ">
      <div className="grid grid-cols-2 p-6 gap-4">
        <a
          className="bg-blue-600 font-bold uppercase  rounded-lg text-white p-4 text-center w-full md:w-auto"
          href="https://github.com/iVeluu/ActInt3_22110228/tree/master"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio
        </a>
        <a
          className="bg-blue-600 font-bold uppercase  rounded-lg text-white p-4 text-center w-full md:w-auto"
          href="https://stately-madeleine-8fd0db.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Página Desplegada
        </a>
      </div>
      <section className="border-blue-600 border-4 p-6 rounded-lg m-4 space-y-6 text-white text-2xl">
        <Title
          color={"blue"}
          info={
            "Planteamiento y diseño del software utilizando metodologías ágiles."
          }
        />
        <h2 className="text-headers text-2xl text-center font-bold md:text-left">
          Fase I. Crear el Product Backlog
        </h2>
        <p>
          Aquí desarrollaremos todas las historios de usuario para convertirlas
          en lo que encontraremos dentro de la aplicación:
        </p>
        <ul className="list-decimal px-6 space-y-4">
          <ListItem
            info={
              "Al momento de seleccionar algo del menú se mostrará en la parte derecha de la página, mostrando precio, cantidad, nombre y un botón para eliminar el producto."
            }
          />
          <ListItem
            info={
              "Después de agregar algo del menú se busca que se muestre un formulario para la propina, ver el total, subtotal y por último un botón para guardar la orden que reiniciará la ventana. "
            }
          />
          <ListItem
            info={
              "Cada que se cambie algo de la orden se debe actualizar toda la información relacionada en la página. "
            }
          />
          <ListItem
            info={
              "Si no tenemos nada en la orden se dejará de mostrar la parte de la derecha y se mostrará un mensaje. "
            }
          />
        </ul>
        <h2 className="text-white text-2xl text-center font-bold md:text-left">
          Scrum Team
        </h2>
        <p>
          Deberíamos tener un Scrum Team ya para este momento pero me encuentro
          solo así que solo mostraré por que roles esta compuesto en un caso
          real.
        </p>
        <ul className="list-disc px-6 space-y-4">
          <ListItem
            span={"Product Owner: "}
            info={
              "Alejandro Velázquez Luna (responsable de definir los requisitos y priorizar el trabajo)."
            }
          />
          <ListItem
            span={"Scrum Master: "}
            info={
              "Víctor Ríos (Facilita las reuniones y asegura que el equipo siga las prácticas de Scrum). "
            }
          />
          <ListItem
            span={"Equipo de Desarrollo: "}
            info={
              "Santiago Romero, Diego Luna, Luis Altamirano  (Desarrolladores, testers, diseñadores, etc., que trabajan en la implementación del sistema). "
            }
          />
        </ul>
        <h2 className="text-headers text-2xl text-center font-bold md:text-left">
          Fase II. Planificación del Sprint
        </h2>
        <p>
          • Seleccionar las Historias de Usuario: Como nuestro proyecto no es
          tan extenso se puede trabajar en todas las tareas del backlog todas
          contienen la misma prioridad
        </p>
        <p>
          • Definir Objetivos del Sprint: Al finar del sprint se espera haber
          desarrollado la tarea seleccionada de una buena manera en tiempo y
          forma.
        </p>
        <h2 className="text-headers text-2xl text-center font-bold md:text-left">
          Fase III. Daily Stand-ups
        </h2>
        <p>
          • El equipo presenta el incremento del producto (trabajo completado) a
          los stakeholders.
        </p>
        <p>• Recoge feedback y ajusta el Product Backlog si es necesario.</p>
        <p>
          • Adem ás de eso los integrantes responden las siguientes preguntas
          ¿Qué hice ayer?, ¿Qué haré hoy? y ¿Tengo algún impedimento al realizar
          mi tarea?
        </p>
        <h2 className="text-headers text-2xl text-center font-bold md:text-left">
          Fase IV. Revisión del Sprint
        </h2>
        <p>
          Al final del Sprint, el equipo presenta el incremento del producto al
          Product Owner y a los stakeholders para recibir feedback.
        </p>
        <h2 className="text-green-600 text-2xl text-center font-bold md:text-left ">
          Actividades realizadas
        </h2>
        <p>• Gestor de propinas</p>
        <p>• Aumento y decremento de productos en orden</p>
        <p>• Diseño de página</p>
        <p>• Gestor de totales ( subtotal, propina y total)</p>
        <h2 className="text-green-600  text-2xl text-center font-bold md:text-left">
          Feedback
        </h2>
        <p>
          Aquí pondriamos el feedback importante que recibimos y si solicitaron
          un cambio aquí se pondría.
        </p>
        <h2 className="text-headers text-2xl text-center font-bold md:text-left">
          Fase V. Retrospectiva del Sprint
        </h2>
        <p>
          Aquí colocariamos toda la reflexión sobre el sprint pasado un ejemplo
          sería:
        </p>
        <p>
          Como Product Owner puedo sacar la conclusión de que en este sprint se
          realizaron las tareas acordadas de una buena manera. Contamos con
          buenas practicas dentro de nuestro proyecto y logramos tener un buen
          feedback de parte del cliente.{" "}
        </p>
        <p className="text-tomato font-bold text-center">FIN DEL SPRINT</p>
        <p>
          Si nuestro proyecto fuera más extenso ajustaríamos el backlog con el
          feedback recibido e identificaríamos las áreas de oportunidad que
          tenemos dentro del sistema para mejorarlo
        </p>
        <h2 className="text-headers text-2xl text-center font-bold md:text-left">
          Página Principal
        </h2>
        <img src="AG1.JPG" alt="imagen main" />
        <h2 className="text-headers text-2xl text-center font-bold md:text-left">
          Después de agregar un produto
        </h2>
        <img src="AG2.JPG" alt="imagen main" />
        <h2 className="text-headers text-2xl text-center font-bold md:text-left">
          Si el producto ya esta en la orden se actualizara la cantidad
        </h2>
        <img src="ag3.JPG" alt="imagen main" className="mx-auto" />
        <h2 className="text-headers text-2xl text-center font-bold md:text-left">
          Si damos click en guardar orden se reinicia toda la orden
        </h2>
        <img src="AG1.JPG" alt="imagen main" />
      </section>
    </div>
  );
}
