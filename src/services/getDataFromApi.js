const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.results);

      return data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          specie: character.species,
          planet: character.origin.name,
          episodes: character.episode,
          status: character.status,
          type: character.type,
        };
      });
    });
};
export default getDataFromApi;
