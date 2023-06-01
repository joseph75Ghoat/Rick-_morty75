import React from "react";
//dentro del div que creo aprovechando boostrap para crear lineas o filas para los personajes
// el aray de apps de character lo vamos a recibir aqui
// usando de nuevo el poder del bopostrap con su tarjeta
const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
            <div className="card" style={{minWidth: "300px"}}> 
            <img src={item.image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p> location: {item.location.name}</p>
                <p> species: {item.species}</p>
                <p> gender: {item.gender}</p>
                <p> status: {item.status}</p>
            </div>
            </div>
        </div>
    
      ))}
    </div>
  );
};

export default Characters;
