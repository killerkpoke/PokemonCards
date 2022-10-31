interface Pokemon {
  id: null;
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<object>;
  moves: Array<object>;
  stats: Array<object>;
  
}

export default Pokemon;

