import React from 'react';
import '../stylesheet/CharacterCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CharacterCard(props) {
  return (
    <li className="card">
      <Link className="link" to={`/character-detail/${props.character.id}`}>
        <img
          className="card--img"
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
        />
        <h3 className="card--title">{props.character.name}</h3>
        <p className="card--description">{props.character.specie}</p>
      </Link>
    </li>
  );
}
CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  specie: PropTypes.string,
  image: PropTypes.string,
};

export default CharacterCard;
