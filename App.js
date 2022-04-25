import React, { useState, useEffect } from "react";
import './index.css'
import axios from "axios";

export default function App() {
  const [num, setNum] = useState(1);
  const [pokemon, setPokemon] = useState();
  const [moves, setMoves] = useState();
  const [height,setheight] = useState();
 
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setPokemon(res.data.forms[0].name);
      setMoves(res.data.moves.length);
      setheight(res.data.height);
     
    }
    getData();
  });
  return (
    <div className="App">
      <h1>You Choose Number: <span className="num">{num}</span>  </h1>
      <input
        type="text"
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      />

      <h2>You Select  <span className="oneLine">{pokemon}</span>  pokemon</h2>
      <h3>Total Moves = <span className="twoLine">{moves}</span> </h3>
      <h3>Height=  <span className="threeLine">{height}</span> </h3>
     
    </div>
  );
}