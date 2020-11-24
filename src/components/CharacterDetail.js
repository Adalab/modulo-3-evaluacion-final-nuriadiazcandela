import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/App.scss';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  return (
    <div className="detail-container" key={props.id}>
      <div className="button-container">
        <Link to="/">
          <button className="btn">Volver</button>
        </Link>
      </div>
      <section className="card-detail">
        <img
          className="card-img-detail"
          src={props.image}
          alt={props.name}
          title={`Imagen de ${props.name}`}
        />
        <h2 className="char-name">{props.name}</h2>
        <ul className="description">
          <li>Especie: {props.species}.</li>
          <li>Planeta de origen: {props.origin}.</li>
          <li>Aparece en: {props.episodes} episodios.</li>
          <li>Estatus: {props.status}.</li>
        </ul>
      </section>
    </div>
  );
};
CharacterDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  episodes: PropTypes.number,
};

export default CharacterDetail;
