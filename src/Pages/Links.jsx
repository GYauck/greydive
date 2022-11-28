import React from "react";
import { Link } from "react-router-dom";
import db from "../utils/db.json";

const Links = () => {
  return (
    <div>
      {db.map((link, i) => (
        <Link to={link.cliente} key={i}>
          <h1 className="text-white text-4xl">{link.cliente}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Links;
