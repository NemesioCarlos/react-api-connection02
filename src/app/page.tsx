"use client"
import axios from "axios";
import {useState } from "react";

export default function Home() {

  
  const [character, setCharacter] = useState([])  

  axios.get("https://rickandmortyapi.com/api/character").then((response) => {
    const respostaApi = response.data.results;
    setCharacter(respostaApi);
  });

  return (
    <>
    <h1 className=" flex justify-center margin-top-10 mt-10 text-xl">Rick and Morty - API</h1>

    <main className="grid grid-cols-5 min-h-screen  items-center justify-between p-24 gap-10">
   
      {character.map((personagem: any) => {
          return (
            <ul key={personagem.id}>
              <li className="text-xl text-amber-900">{personagem.name}</li>
              <li>{personagem.species}</li>
              <li>{personagem.status}</li>
              <li>{personagem.origin.name}</li>
              <li>{personagem.location.name}</li>
            </ul>
          )
        })
      }
    </main>
    </>
  );
}
 