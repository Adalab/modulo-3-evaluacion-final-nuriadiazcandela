import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/CharacterDetail.scss';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  console.log(props);
  return (
    <div className="card-detail" key={props.id}>
      <Link to="/">
        <button className="btn">Volver</button>
      </Link>
      <div>
        <div className="card_detail">
          <img className="card-img-detail" src={props.image} alt={props.name} />
          <h2>{props.name}</h2>
          <section>
            <ul className="description">
              <li>Especie:{props.species}</li>
              <li>Planeta de origen:{props.origin}</li>
              <li>Aparece en: {props.episodes} episodios</li>
              <li>Estatus: {props.status}</li>
            </ul>
          </section>
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
