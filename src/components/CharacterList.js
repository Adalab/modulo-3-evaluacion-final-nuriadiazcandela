import React from 'react';
import CharacterCard from './CharacterCard.js';

const CharacterList = (props) => {
  const characterElement = props.characters.map((character, index) => {
    return <CharacterCard key={character.id} character={character} />;
  });
  return (
    <div>
      <ul className="cards">{characterElement}</ul>
    </div>
  );
};

export default CharacterList;
