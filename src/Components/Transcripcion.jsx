import React from "react";

const Transcripcion = ({ data }) => {
  return (
    <div className="my-8">
      <h2 className="text-white text-4xl font-bold mb-6">Transcripción</h2>
      <textarea
        className="overflow-y-auto whitespace-pre-wrap resize-none bg-[#292643] text-white border-2"
        cols="120"
        rows="10"
        defaultValue={data.transcripcion.replaceAll("<br>", "\n")}
      ></textarea>
    </div>
  );
};

export default Transcripcion;
