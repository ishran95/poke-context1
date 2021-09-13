import React, { useState,useEffect } from 'react'
function randomNumber() {
  return Math.floor(Math.random() * 151) + 1
}

export default function Home() {
  const [id,setid]=useState(150)
  const [pokemon,setPokemon]=useState(null)

  function getPokemon(){
    setid(randomNumber())
  }

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(res => setPokemon(res))
  }, [id])
        
    
    
    console.log(pokemon)
    return (
        <div>
          <h1>Home</h1>
          <p>{pokemon?.name}</p>
          <p>{pokemon?.height}</p>
          <p>{pokemon?.weight}</p>
          {pokemon?.types.map(type => (
                        <p key={type.type.name}>{type.type.name}</p>
                    ))}
                    <button onClick={() => getPokemon()}>random</button>
        </div>
    )
}
