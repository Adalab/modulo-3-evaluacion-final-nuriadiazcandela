import React from 'react';
import '../stylesheet/App.scss';

function CharacterCard(props) {
  return (
    <li className="card">
      <img
        className="card-img"
        src={props.character.image}
        alt={`Imagen de ${props.character.name}`}
      />
      <h3 className="card-title">{props.character.name}</h3>
      <p className="card-description">{props.character.specie}</p>
    </li>
  );
}

export default CharacterCard;
