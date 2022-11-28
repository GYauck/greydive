import React from "react";

const Header = ({ data }) => {
  return (
    <div>
      <h1 className="text-white text-5xl pt-12 font-bold">{data.cliente}</h1>
      <h1 className="text-white text-5xl pt-12 font-bold">
        Test: Test de usabilidad en el sitio web
      </h1>
    </div>
  );
};

export default Header;
