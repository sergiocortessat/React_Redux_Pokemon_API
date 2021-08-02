/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from 'axios';

const allPokemonURL = 'https://pokeapi.co/api/v2/pokemon?limit=898&offset=0';

const URL = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json';

const fetchPokemons = async (searchTerm = '', generation = '', type = '') => {
  try {
    const { data } = await axios.get(allPokemonURL);

    const superheroes = data.sort(() => Math.random() - 0.5);

    const strippedSuperheroes = superheroes.map((superhero) => {
      const {
        name, powerstats,
        appearance: { gender, race },
        biography: { fullName, firstAppearance, publisher },
        work: { occupation }, images: { lg: image },
      } = superhero;

      const strippedSuperhero = {
        name, powerstats, gender, race, fullName, firstAppearance, publisher, occupation, image,
      };

      return strippedSuperhero;
    });

    const searchedSuperheroes = strippedSuperheroes
      .filter((superHero) => superHero.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

    const filteredSuperheroes = searchedSuperheroes
      .filter((superHero) => superHero.gender.includes(gender));
    if (!searchTerm) {
      return filteredSuperheroes.slice(0, 5);
    }
    return filteredSuperheroes;
  } catch (error) {
    console.log(error);
  }
};

export default fetchHeroes;
