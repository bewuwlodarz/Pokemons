using System.Text.Json;
using WebApi.Infrastructure;
using WebApi.Models;

namespace WebApi.Services;

public class PokemonService
{
    private readonly IPokemonRepository _pokemonRepository;
    private const int DefaultPageSize = 25;

    public PokemonService(IPokemonRepository pokemonRepository)
    {
        _pokemonRepository = pokemonRepository;
    }

    public List<Pokemon> GetAllPokemons() => _pokemonRepository.GetAllPokemons();

    public Pokemon GetPokemonByNumber(int number) => _pokemonRepository.GetPokemonByNumber(number);

    public List<Pokemon> GetAllPokemons(int pageSize = DefaultPageSize, int pageNumber = 1)
    {
        if (pageSize <= 0)
            throw new ArgumentException("Page size must be greater than zero.", nameof(pageSize));

        var allPokemons = _pokemonRepository.GetAllPokemons();
        var startIndex = (pageNumber - 1) * pageSize;
        return allPokemons.Skip(startIndex).Take(pageSize).ToList();
    }
}