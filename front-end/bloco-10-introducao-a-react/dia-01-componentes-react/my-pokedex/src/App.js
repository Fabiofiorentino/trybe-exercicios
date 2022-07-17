import './App.css';
import pokemons from './data';

//const { name, type, averageWeight: { value , measurementUnit }, image} = pokemons;

function App() {
  return (
    <div className="App">
      <ul>{
        pokemons.map((pokemon) => {
          return <div key={pokemon.id}>
            {pokemon.name}
            <br></br>
            {pokemon.type}
            <br></br>
            averageWeight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}
            {pokemon.image}
          </div>
        })}
      </ul>
    </div>
  );
}

export default App;
