import axios from 'axios';

const allPokemonURL2 = 'https://app.pokemon-api.xyz/pokemon/all';

const fetchPokemons = async () => {
  try {
    const { data } = await axios.get(allPokemonURL2);

    const strippedPokemons = data.map((pokemon) => {
      const {
        id, species, description,
        base,
        evolution,
        name: { english, japanese },
        hires,
        profile: { height, weight, ability },
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

      const stripped = {
        id,
        species,
        description,
        evolution,
        english,
        japanese,
        height,
        weight,
        ability,
        sprite,
        thumbnail,
        hires,
        type,
        HP,
        Attack,
        Defense,
        SpecialAttack,
        SpecialDefense,
        Speed,
      };

      return stripped;
    });
    return strippedPokemons;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default fetchPokemons;
