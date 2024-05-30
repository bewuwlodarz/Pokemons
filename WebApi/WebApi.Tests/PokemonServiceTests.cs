using System.Text.Json;
using WebApi.Models;
using WebApi.Services;

public class PokemonServiceTests
{
    private List<Pokemon> _mockPokemons;

    public PokemonServiceTests()
    {
        _mockPokemons = new List<Pokemon>
        {
            new Pokemon { Number = 1, Name = "Bulbasaur", Generation = "Generation I", Height = 0.7, Weight = 6.9, Types = new List<string>{"Grass", "Poison"}, Moves = new List<string>{"razor-wind", "swords-dance", "cut", "bind"}, Abilities = new List<string>{"overgrow", "chlorophyll"}, Evolution = new Evolution { From = null, To = new List<string>{"ivysaur"} }, Image = "https://example.com/bulbasaur.png" },
            new Pokemon { Number = 2, Name = "Ivysaur", Generation = "Generation I", Height = 1.0, Weight = 13.0, Types = new List<string>{"Grass", "Poison"}, Moves = new List<string>{"razor-wind", "swords-dance", "cut", "bind"}, Abilities = new List<string>{"overgrow", "chlorophyll"}, Evolution = new Evolution { From = "bulbasaur", To = new List<string>{"venusaur"} }, Image = "https://example.com/ivysaur.png" }
        };
    }

    [Fact]
    public void GetAllPokemons_ReturnsAllPokemons()
    {
        // Arrange
        var jsonData = JsonSerializer.Serialize(_mockPokemons);
        File.WriteAllText("pokemon.json", jsonData);
        var service = new PokemonService();

        // Act
        var result = service.GetAllPokemons();

        // Assert
        Assert.Equal(2, result.Count);
        Assert.Equal("Bulbasaur", result[0].Name);
    }

    [Fact]
    public void GetPokemonByNumber_ReturnsCorrectPokemon()
    {
        // Arrange
        var jsonData = JsonSerializer.Serialize(_mockPokemons);
        File.WriteAllText("pokemon.json", jsonData);
        var service = new PokemonService();

        // Act
        var result = service.GetPokemonByNumber(1);

        // Assert
        Assert.NotNull(result);
        Assert.Equal("Bulbasaur", result.Name);
    }

    [Fact]
    public void GetPokemonByNumber_ReturnsNullForInvalidNumber()
    {
        // Arrange
        var jsonData = JsonSerializer.Serialize(_mockPokemons);
        File.WriteAllText("pokemon.json", jsonData);
        var service = new PokemonService();

        // Act
        var result = service.GetPokemonByNumber(999);

        // Assert
        Assert.Null(result);
    }
}