import React from 'react';
import '../stylesheet/App.scss';
import { Link } from 'react-router-dom';

function CharacterCard(props) {
  return (
    <li className="card">
      <Link className="link" to={`/character-detail/${props.character.id}`}>
        <img
          className="card-img"
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
        />
        <h3 className="card-title">{props.character.name}</h3>
        <p className="card-description">{props.character.specie}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
