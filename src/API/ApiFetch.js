/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from 'axios';

const allPokemonURL = 'https://pokeapi.co/api/v2/pokemon?limit=898&offset=0';
const allPokemonURL2 = 'https://app.pokemon-api.xyz/pokemon/all';

const fetchPokemons = async (searchTerm = '', generation = '', type = '', pokeId = '') => {
  try {
    const { data } = await axios.get(allPokemonURL2);

    const strippedPokemons = data.map((pokemon) => {
      const {
        id, species, description,
        base,
        evolution: { next },
        name: { english, japanese },
        hires,
        profile,
        sprite,
        thumbnail,
        type,
      } = pokemon;
      let HP = '';
      base ? HP = base.HP : HP;

      // console.log(HP);
      // // const { HP } = pokemon.base;

      const stripped = {
        id, species, description, next, english, japanese, profile, sprite, thumbnail, hires, type, HP,
      };

      return stripped;
    });

    // const searchedSuperheroes = strippedSuperheroes
    //   .filter((superHero) => superHero.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

    // const filteredSuperheroes = searchedSuperheroes
    //   .filter((superHero) => superHero.gender.includes(gender));
    // if (!searchTerm) {
    //   return filteredSuperheroes.slice(0, 5);
    // }
    // return filteredSuperheroes;
    // console.log(results[400]);
    console.log(strippedPokemons);
    return strippedPokemons;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPokemons;
