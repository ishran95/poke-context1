import React, { useState, useEffect,useContext } from "react";
import { UserContext } from "../App.js";
export default function Home() {
  const [id, setid] = useState(150);
  const [pokemon, setPokemon] = useState(null);
  const { isLogged } = useContext(UserContext);
  function getPokemon() {
    setid(randomNumber());
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((res) => setPokemon(res));
  }, [id]);

  function randomNumber() {
    return Math.floor(Math.random() * 151) + 1;
  }

  console.log(pokemon);
  if (isLogged) {
    return (
      <div className="containerInfosHome">
        <div className="container-img-pokemon">
          <img
            className="img-pokemon"
            src={pokemon?.sprites.front_default}
            alt={pokemon?.name}
          />
          <p>{pokemon?.name}</p>
          <p>{pokemon?.height}</p>
          <p>{pokemon?.weight}</p>  
          {pokemon?.types.map((type) => (
            <p key={type.type.name}>{type.type.name}</p>
          ))}
          <button onClick={() => getPokemon()}>random</button>
        </div>
      </div>
    );
  } else {
    return <h1>welcome to poke-contexte</h1>;
  }
}
