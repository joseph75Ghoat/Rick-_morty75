import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";


function App() {
  //al inicio estara vacia y despus recibe valor de api
  const [characters, setcharacters] = useState([]);

  const [info, setinfo] = useState({});

  const urlinicial = "https://rickandmortyapi.com/api/character";
  //Esta funcion se encarga de la llamada de red

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setcharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onAnterior = () => {
    fetchCharacters(info.prev);
  };

  const onSiguiente = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(urlinicial);
  }, []);

  return (
    <>
      <Navbar brand="c115 rick and mortys" />

      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onAnterior={onAnterior}
          onSiguiente={onSiguiente}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onAnterior={onAnterior}
          onSiguiente={onSiguiente}
        />
      </div>
    </>
  );
}

export default App;
