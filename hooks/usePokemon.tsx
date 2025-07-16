import { useEffect, useState } from 'react';

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  id?: number;
}

export const usePokemon = ({ id = 1 }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemonById = async (id: number) => {
    setIsLoading(true);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    setPokemon({
      id: id,
      name: data.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  return {
    //Props
    pokemon,
    isLoading,

    //Computed
    formattedId: id.toString().padStart(3, '0')
  };
};
