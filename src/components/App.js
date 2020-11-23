import React, { useEffect, useState } from 'react';
import '../stylesheet/App.scss';
import getDataFromApi from '../services/getDataFromApi';
// import Header from './Header';
// import Filters from './Filters';
import CharacterList from './CharacterList';

const App = () => {
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hola</h1>
      {/* <Header></Header>
      <Filters></Filters> */}
      {/* <CharacterList characters={characters}></CharacterList> */}
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
