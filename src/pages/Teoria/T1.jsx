import React from 'react'
import Title from '../../components/Title'
import ListItem from '../../components/ListItem';

export default function T2() {
  return (
    <div className="max-w-3xl mx-auto mt-10 ">
      <div className="grid grid-cols-2 p-6 gap-4">
        <a
          className="bg-blue-600 font-bold uppercase  rounded-lg text-white p-4 text-center w-full md:w-auto"
          href="https://github.com/iVeluu/ActInt1_22110228"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio
        </a>
        <a
          className="bg-blue-600 font-bold uppercase  rounded-lg text-white p-4 text-center w-full md:w-auto"
          href="https://66711916559a9baf399472cd--inspiring-basbousa-22e9e4.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Página Desplegada
        </a>
      </div>
      <section className="border-blue-600 border-4 p-6 rounded-lg m-4 space-y-6 text-white">
        <Title
          color={"blue"}
          info={
            "Planteamiento y diseño del software utilizando arquitecturas en capas y orientada a objetos"
          }
        />
        <h2 className=" text-2xl text-center font-bold md:text-left">
          Programa a realizar
        </h2>
        <p>
          En el siguiente programa se busca imitar una aplicación de
          'To-Do-List', esto se refiere a que vamos a ser capaces de colocar
          tareas y marcalas como pendientes o terminadas. Se busca que estás
          puedan ser eliminadas y que puedan ser actualizadas.
        </p>
        <p>
          Usaremos clases y MVC para satisfacer la arquitectura en capas y
          orientada a objetos.
        </p>
        <p>Las capas de nuestro programa trabajan de la siguiente manera: </p>
        <ul className="list-disc px-6 space-y-4">
          <ListItem
            span={"Modelo: "}
            info={
              "La clase TodoList maneja la lógica de la lista de tareas, incluyendo agregar, eliminar y marcar como completadas las tareas."
            }
          />
          <ListItem
            span={"Vista: "}
            info={
              "La clase TodoView maneja la actualización de la interfaz de usuario y los eventos de los botones."
            }
          />
          <ListItem
            span={"Controlador: "}
            info={
              "Se encarga de manejar la interacción entre la vista y el modelo. Escucha los eventos de los formularios y botones, y actualiza el modelo y la vista en consecuencia."
            }
          />
        </ul>
        <h2 className=" text-2xl text-center font-bold md:text-left">
          Programa en acción
        </h2>
        <p className="font-bold text-2xl">Menú</p>
        <img
          src="S2.JPG"
          alt="menu"
          className="border-white border-4 rounded-lg"
        />
        <p className="font-bold text-2xl">Agregamos un pendiente</p>
        <img
          src="S3.JPG"
          alt="menu"
          className="border-white border-4 rounded-lg"
        />
        <p className="font-bold text-2xl">Editamos un pendiente</p>
        <img
          src="S4.JPG"
          alt="menu"
          className="border-white border-4 rounded-lg"
        />
        <p className="font-bold text-2xl">Ya editado</p>
        <img
          src="S5.JPG"
          alt="menu"
          className="border-white border-4 rounded-lg"
        />
        <p className="font-bold text-2xl">
          Marcamos como terminado la segunda tarea
        </p>
        <img
          src="S6.JPG"
          alt="menu"
          className="border-white border-4 rounded-lg"
        />
        <p className="font-bold text-2xl">Eliminamos la segunda tarea</p>
        <img
          src="S7.JPG"
          alt="menu"
          className="border-white border-4 rounded-lg"
        />
      </section>
    </div>
  );
}
