import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheet/App.scss';
import getDataFromApi from '../services/getDataFromApi';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import nofound from '../images/404.png';
import PropTypes from 'prop-types';
import Footer from './Footer';

const App = () => {
  //Estados
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');

  //Gestionar API
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  //Manejadora del input
  const handleFilter = (filterName) => {
    setFilterName(filterName);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const renderCharacter = (props) => {
    const routeCharacterId = parseInt(props.match.params.characterId);
    const foundCharacter = characters.find((character) => {
      return routeCharacterId === character.id;
    });

    if (foundCharacter) {
      return (
        <CharacterDetail
          image={foundCharacter.image}
          name={foundCharacter.name}
          status={foundCharacter.status}
          species={foundCharacter.specie}
          origin={foundCharacter.planet}
          episodes={foundCharacter.episodes.length}
        ></CharacterDetail>
      );
    } else {
      return (
        <div className="nofound">
          <h2>El personaje que buscas no existe</h2>
          <img className="imgnofound" src={nofound} alt="no found" />
        </div>
      );
    }
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters handleFilter={handleFilter} filterName={filterName} />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route path="/character-detail/:characterId" render={renderCharacter}></Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  filteredCharacters: PropTypes.array,
};
export default App;
