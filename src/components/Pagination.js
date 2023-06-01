import React from "react";

const Pagination = ({ prev, next, onAnterior, onSiguiente }) => {
  const handleAnterior = () => {
    onAnterior();
  };

  const handleElsiguiente = () => {
    onSiguiente();
  };

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" style={{ background: 'red', color: 'black' }} onClick={handleAnterior}>
              Anterior
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" style={{ background: 'green', color: 'black' }} onClick={handleElsiguiente}>
              Siguiente
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
