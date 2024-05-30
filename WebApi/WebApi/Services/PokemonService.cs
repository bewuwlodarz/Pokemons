using System.Text.Json;
using WebApi.Models;

namespace WebApi.Services;

public class PokemonService
{
    private readonly List<Pokemon>? _pokemons;
    private const int DefaultPageSize = 25;

    public PokemonService()
    {
        var jsonData = File.ReadAllText("pokemon.json");
        _pokemons = JsonSerializer.Deserialize<List<Pokemon>>(jsonData,
            new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
        if (_pokemons != null)
        {
            PopulateEvolutionNumbers();
        }
    }

    public List<Pokemon>? GetAllPokemons() => _pokemons;

    public Pokemon GetPokemonByNumber(int number) => _pokemons.FirstOrDefault(p => p.Number == number);

    public List<Pokemon> GetAllPokemons(int pageSize = DefaultPageSize, int pageNumber = 1)
    {
        if (pageSize <= 0)
            throw new ArgumentException("Page size must be greater than zero.", nameof(pageSize));

        var startIndex = (pageNumber - 1) * pageSize;
        return _pokemons.Skip(startIndex).Take(pageSize).ToList();
    }

    private void PopulateEvolutionNumbers()
    {
        foreach (var pokemon in _pokemons)
        {
            if (pokemon.Evolution != null)
            {
                if (!string.IsNullOrEmpty(pokemon.Evolution.From))
                {
                    var fromPokemon = _pokemons.FirstOrDefault(p =>
                        p.Name.Equals(pokemon.Evolution.From, StringComparison.OrdinalIgnoreCase));
                    if (fromPokemon != null)
                    {
                        pokemon.Evolution.FromNumber = fromPokemon.Number;
                    }
                }

                if (pokemon.Evolution.To != null && pokemon.Evolution.To.Any())
                {
                    pokemon.Evolution.ToNumber = new List<int>();
                    foreach (var toName in pokemon.Evolution.To)
                    {
                        var toPokemon = _pokemons.FirstOrDefault(p =>
                            p.Name.Equals(toName, StringComparison.OrdinalIgnoreCase));
                        if (toPokemon != null)
                        {
                            pokemon.Evolution.ToNumber.Add(toPokemon.Number);
                        }
                    }
                }
            }
        }
    }
}