import React, { useEffect, useState } from 'react';
import '../stylesheet/App.scss';
import getDataFromApi from '../services/getDataFromApi';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
      console.log(characters);
    });
  }, []);

  const handleFilter = (filterName) => {
    setFilterName(filterName);
    console.log(filterName);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(filterName.toUpperCase());
  });

  console.log(filteredCharacters);
  return (
    <div className="App">
      <Header />
      <Filters handleFilter={handleFilter} />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
};

export default App;

// import React from 'react';
// import { Route, Switch } from 'react-router-dom';

// class App extends React.Component {
//   // ...
//   render() {
//     return (
//       <div>
//         {/* ... */}
//         <main>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//           </Switch>
//         </main>
//       </div>
//     );
//   }
// }
