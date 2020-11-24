import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheet/App.scss';
import getDataFromApi from '../services/getDataFromApi';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
      // console.log(characters);
    });
  }, []);

  const handleFilter = (filterName) => {
    setFilterName(filterName);
    // console.log(filterName);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(filterName.toUpperCase());
  });

  // console.log(filteredCharacters);

  const renderCharacter = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);
    console.log(props.match.params.id);
    console.log(characters);
    const foundCharacter = characters.find((character) => {
      return routeCharacterId === parseInt(character.id);
    });
    console.log(foundCharacter);

    if (foundCharacter) {
      return (
        <CharacterDetail
          id={foundCharacter.id}
          image={foundCharacter.image}
          name={foundCharacter.name}
          status={foundCharacter.status}
          specie={foundCharacter.species}
          // planet={foundCharacter.origin.name}
          episodes={foundCharacter.epidose}
          type={foundCharacter.type}
        ></CharacterDetail>
      );
    } else {
      return <p>Personaje no encontrado</p>;
    }
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters handleFilter={handleFilter} />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route path="/character-detail/:id" component={renderCharacter}></Route>
      </Switch>
    </div>
  );
};

export default App;
