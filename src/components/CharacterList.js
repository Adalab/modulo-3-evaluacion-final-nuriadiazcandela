import React from 'react';
import CharacterCard from './CharacterCard.js';
import PropTypes from 'prop-types';
import image from '../images/logoverde.png';

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return (
      <div>
        <p>No se encuentran resultados</p>
        <img src={image} alt="No hay resultados" title="No hay resultados" />
      </div>
    );
  }
  const characterElement = props.characters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        character={character}
        name={character.name}
        species={character.species}
        image={character.image}
      />
    );
  });
  return (
    <div className="list-container">
      <ul className="cards">{characterElement}</ul>
    </div>
  );
};
CharacterList.propTypes = {
  characters: PropTypes.array,
};
export default CharacterList;
