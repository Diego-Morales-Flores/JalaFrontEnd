import { React, useState, useEffect } from "react";
import './Table.css';
export default function Table(props) {
    const [myArray, setMyArray] = useState([]);
    function GetData(){
      setMyArray([
        {
          pokemon : "Charmander",
          type : "Fire"
        },
        {
          pokemon : "Caterpie",
          type : "Bug"
        },
        {
          pokemon : "Squirtle",
          type : "Water"
        },
        {
          pokemon : "Butterfree",
          type : "Bug"
        },
        {
          pokemon : "Rattata",
          type : "Normal"
        },
        {
          pokemon : "Ekans",
          type : "Poison"
        },
        {
          pokemon : "Pikachu",
          type : "Electric"
        },
        {
          pokemon : "Clefairy",
          type : "Fairy"
        }
      ])
    }
    
    useEffect(() => {
      const timer = setTimeout(() => {
        GetData();
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

    const pokemons = myArray.map((item) =>
    <h2 className="Text">{item.pokemon}</h2>
    );
    const types = myArray.map((item) =>
    <h2 className="Text">{item.type}</h2>
    );
  return (
      <div className='Table'>
        <div className="Column">
          <h1 className="Titles">Pokemons</h1>
          {pokemons}</div>
        <div className="Column">
          <h1 className="Titles">Types</h1>
          {types}</div>
      </div>
  )
}
