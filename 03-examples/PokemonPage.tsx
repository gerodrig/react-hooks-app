import { usePokemon } from '../hooks/usePokemon';
import { useCounter } from '../hooks/useCounter';

export const PokemonPage = () => {
  const { increment, decrement, counter } = useCounter();
  const { pokemon, isLoading, formattedId } = usePokemon({ id: counter });

  if (isLoading) {
    return (
      <div className="bg-gradient flex flex-col items-center">
        <h1 className="text-2xl font-thin text-white">Pokémon</h1>
        <h3 className="text-xl font-bold text-white">Loading...</h3>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="bg-gradient flex flex-col items-center">
        <h1 className="text-2xl font-thin text-white">Pokémon</h1>
        <h3 className="text-xl font-bold text-white">No encontrado</h3>
      </div>
    );
  }

  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">
        #{formattedId} {pokemon?.name}
      </h3>
      <img src={pokemon?.imageUrl} alt="" />

      <div className="flex gap-2">
        <button
          onClick={decrement}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Previous
        </button>

        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};
