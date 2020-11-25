import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/CharacterDetail.scss';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  return (
    <div className="character-detail" key={props.id}>
      <div className="character-detail__btncontainer">
        <Link to="/">
          <button className="character-detail__btn">Volver</button>
        </Link>
      </div>
      <div className="character-detail__imgcontainer">
        <img
          className="character-detail__imgcontainer--img"
          src={props.image}
          alt={props.name}
          title={`Imagen de ${props.name}`}
        />
        <div className="character-detail__container">
          <h2 className="detail__name">{props.name}</h2>
          <ul className="detail__description">
            <li>Especie: {props.species}.</li>
            <li>Planeta de origen: {props.origin}.</li>
            <li>Aparece en: {props.episodes} episodios.</li>
            <li>Estatus: {props.status}.</li>
          </ul>
        </div>
      </div>
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
