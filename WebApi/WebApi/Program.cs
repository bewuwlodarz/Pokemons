using WebApi.Infrastructure;
using WebApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<IPokemonRepository, PokemonRepository>();
builder.Services.AddSingleton<PokemonService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

var pokemonService = app.Services.GetRequiredService<PokemonService>();

app.MapGet("/api/pokemons", () => pokemonService.GetAllPokemons());

app.MapGet("/api/pokemon/{number:int}", (int number) =>
{
    var pokemon = pokemonService.GetPokemonByNumber(number);
    return pokemon != null ? Results.Ok(pokemon) : Results.NotFound();
});
app.MapGet("/api/pokemon", (int? pageSize, int? pageNumber) =>
{
    var pokemons = pokemonService.GetAllPokemons(pageSize ?? 25, pageNumber ?? 1);
    return Results.Ok(pokemons);
});

app.Run();