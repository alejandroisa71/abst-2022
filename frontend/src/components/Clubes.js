import React from "react";
import Club from "./Club";

import imagen1 from "../assets/aguilaresBasquet.jpeg";
import imagen2 from "../assets/azucarera.png";
import imagen3 from "../assets/cfc.png";

const clubes = [
  {
    id: 1,
    title: "Aguilares Basquet",
    image: imagen1,
    // text: "Ubicado en Aguilares",
    url: "https://youtube.com",
  },
  {
    id: 2,
    title: "Azucarera",
    image: imagen2,
    url: "https://youtube.com",
  },
  {
    id: 3,
    title: "Concepción Futbol Club",
    image: imagen3,
    url: "https://youtube.com",
  },
  {
    id: 3,
    title: "Concepción Futbol Club",
    image: imagen3,
    url: "https://youtube.com",
  },
];

function Clubes() {
  return (
    <div className=" container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {clubes.map(({ id, title, image, url, text }) => (
          <div className="col-md-4" key={id}>
            <Club title={title} imageSource={image} url={url} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clubes;
