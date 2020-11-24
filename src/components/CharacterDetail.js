import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/App.scss';

const CharacterDetail = (props) => {
  return (
    <div>
      <Link to="/">
        <button>Volver al listado</button>
      </Link>
      <div>
        <div>
          <img src={props.image} />
          <section>
            <header>
              <h2>{props.name}</h2>
            </header>
            <ul>
              <li>Especie:{props.specie}</li>
              <li>Planeta de origen:{props.planet}</li>
              <li>Aparece en: {props.episodes} episodios</li>
              <li>Estatus: {props.status}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
