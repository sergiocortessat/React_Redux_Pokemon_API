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
        evolution,
        name: { english, japanese },
        hires,
        profile: { height, weight },
        sprite,
        thumbnail,
        type,
      } = pokemon;
      const HP = base ? base.HP : 'Unavailable';
      const Attack = base ? base.Attack : 'Unavailable';
      const Defense = base ? base.Defense : 'Unavailable';
      const SpecialAttack = base ? base['Sp. Attack'] : 'Unavailable';
      const SpecialDefense = base ? base['Sp. Defense'] : 'Unavailable';
      const Speed = base ? base.Speed : 'Unavailable';

      // console.log(HP);
      // // const { HP } = pokemon.base;

      const stripped = {
        id, species, description, evolution, english, japanese, height, weight, sprite, thumbnail, hires, type, HP, Attack, Defense, SpecialAttack, SpecialDefense, Speed,
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
