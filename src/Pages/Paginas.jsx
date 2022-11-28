import React from "react";
import db from "../utils/db.json";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import MediaPlayer from "../Components/MediaPlayer";
import Tareas from "../Components/Tareas";
import Transcripcion from "../Components/Transcripcion";

const Paginas = () => {
  const params = useParams();

  return (
    <div className="w-full h-screen">
      <div className="mx-36">
        {db.map((data, i) =>
          data.cliente === params.cliente ? (
            <div key={i}>
              <Header data={data} />
              <MediaPlayer data={data} />
              <Transcripcion data={data} />
              <Tareas data={data} />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default Paginas;
