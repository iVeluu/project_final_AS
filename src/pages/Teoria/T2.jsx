import React from 'react'
import Title from '../../components/Title';
import ListItem from '../../components/ListItem';
import { Link } from 'react-router-dom';

export default function T1() {
  return (
    <div className="max-w-5xl mx-auto  ">
      <div className="grid grid-cols-2 p-6 gap-4">
        <a
          className="bg-blue-600 font-bold uppercase  rounded-lg text-white p-4 text-center w-full md:w-auto"
          href="https://github.com/iVeluu/ActInt2_22110228"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio
        </a>
        <a
          className="bg-blue-600 font-bold uppercase  rounded-lg text-white p-4 text-center w-full md:w-auto"
          href="https://aesthetic-crostata-8a5ed9.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Página Desplegada
        </a>
      </div>
      <section className="border-blue-600 border-4 p-6 rounded-lg m-4 space-y-6 ">
        <Title
          color={"blue"}
          info={
            "Planteamiento y diseño del software utilizando metodologías clásicas"
          }
        />
        <h2 className="text-white text-2xl text-center font-bold md:text-left">
          Fase I. Investigación preliminar
        </h2>
        <p className="text-white">
          <span className="font-bold">
            Descripción del proceso actual: {""}
          </span>{" "}
          El consultorio no cuenta con un sistema en el cual los pacientes
          puedan estar ingresados, y el registro de pacientes es hecho en una
          libreta con posibilidades de perder toda la información. En cada
          registro de los pacientes de veterinaria se coloca: nombre de la
          mascota, propietario, teléfono, fecha, hora de entrada y los síntomas
          de la mascota.
        </p>
        <h2 className="text-white text-2xl text-center font-bold md:text-left">
          Fase II. Determinación de los requerimientos del sistema.
        </h2>
        <ul className="list-decimal px-6 space-y-4 ">
          <ListItem
            span={"Requerimientos de entrada: "}
            info={
              "Se requiere un sistema que guarde todos los pacientes de un día facilitando la tarea."
            }
          />
          <ListItem
            span={"Requerimientos de almacenamiento: "}
            info={
              "La información será almacenada en una base de datos dentro del navegador debido al presupuesto del Consultorio"
            }
          />
          <ListItem
            span={"Requerimientos de Salida: "}
            info={
              "Generar reportes por medio de la pantalla guardando toda la información del paciente, además de eso se podrán actualizar los registros y eliminarlos."
            }
          />
        </ul>
        <h2 className="text-white text-2xl text-center font-bold md:text-left">
          Fase III. Diseño del Sistema.
        </h2>
        <p className="text-white">
          El sistema contara con un formulario en la parte izquierda de la
          pantalla en el cual podremos ingresar toda la información del paciente
          y en la parte derecha contaremos con un display el cual nos estará
          mostrando la información de los pacientes, además de eso habrán unos
          botones para editar la información del paciente o para borrarlo.
        </p>
        <h2 className="text-white text-2xl text-center font-bold md:text-left">
          Fase IV. Desarrollo del Software
        </h2>
        <div className="text-white font-bold space-y-5 text-2xl">
          <p>Interfaz: </p>
          <img src="T1.JPG" alt="interfaz " />
          <p>Si mandamos el formulario sin datos obtendremos una alerta: </p>
          <img src="T12.JPG" alt="interfaz error " />
          <p>
            Al mandar el formulario de manera correcta, veremos una alerta y
            aparecerá de lado derecho el paciente:{" "}
          </p>
          <img src="T13.JPG" alt="interfaz " />
          <p>
            Si queremos editar la información damos click en editar y nos
            aparecerá la información para modificar en el formulario:{" "}
          </p>
          <img src="T14.JPG" alt="interfaz " />
        </div>
        <h2 className="text-white text-2xl text-center font-bold md:text-left">
          Fase V. Pruebas del Sistema.
        </h2>
        <p className="text-white">
          Las pruebas se realizarán y se buscará cualquier posible error dentro
          del programa
        </p>
        <h2 className="text-white text-2xl text-center font-bold md:text-left">
          Fase VI. Mantenimiento
        </h2>
        <p className="text-white">
          Después de hacer el deploy se estarán incorporando actualizaciones y
          buscando cualquier error para solucionarlo.
        </p>
      </section>
    </div>
  );
}
