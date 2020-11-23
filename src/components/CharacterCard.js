import React from 'react';
import '../stylesheet/App.scss';

function CharacterCard(props) {
  return (
    <li>
      <img src={props.character.image} alt={`Imagen de ${props.character.name}`} />
      <h4>{props.character.name}</h4>
      <p>{props.character.specie}</p>
    </li>
  );
}

export default CharacterCard;
