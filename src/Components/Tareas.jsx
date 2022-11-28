import React from "react";

const Tareas = ({ data }) => {
  return (
    <div className="w-[35%]">
      <h1 className="text-white text-3xl font-bold">Tareas</h1>

      <h2 className="text-white text-1xl">Escenario: {data.escenario}</h2>
      <hr />
      {data.preguntas.map((tarea, i) => (
        <div key={i} className="mx-8 my-8 pl-8  text-white">
          Tarea {i + 1}:
          <br />
          <p className="whitespace-pre-wrap">
            {tarea.texto.replaceAll(new RegExp("\\\\n", "g"), "\n")}
          </p>
          <br />
          <p className="text-orange-600">
            Duracion de la tarea: {tarea.tiempo}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Tareas;
