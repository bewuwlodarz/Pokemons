using System.Text.Json;
using WebApi.Models;

namespace WebApi.Infrastructure;

public class PokemonRepository : IPokemonRepository
{
    private readonly List<Pokemon> _pokemons;

    public PokemonRepository()
    {
        var jsonData = File.ReadAllText("pokemon.json");
        _pokemons = JsonSerializer.Deserialize<List<Pokemon>>(jsonData,
            new JsonSerializerOptions { PropertyNameCaseInsensitive = true })!;
        if (_pokemons != null)
        {
            PopulateEvolutionNumbers();
        }
    }

    public List<Pokemon> GetAllPokemons() => _pokemons;

    public Pokemon GetPokemonByNumber(int number) => _pokemons.FirstOrDefault(p => p.Number == number);

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