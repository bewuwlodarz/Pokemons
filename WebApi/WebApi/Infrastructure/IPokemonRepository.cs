using WebApi.Models;

namespace WebApi.Infrastructure;

public interface IPokemonRepository
{
    List<Pokemon> GetAllPokemons();
    Pokemon GetPokemonByNumber(int number);
}