"use client"
// import axios from "axios";
import {useEffect, useState, } from "react";
import { api } from "../../services/api";

export default function Home() {

  const [character, setCharacter] = useState([])  

  useEffect(()=>{
    api.get("/personagens").then((response) => {
  
      setCharacter(response.data);
    });
  },[])

  const addPerson = () => {
    const personName = document.getElementById("PersonName") as HTMLInputElement;
    const personStatus = document.getElementById("PersonStatus") as HTMLInputElement;

    const newPerson = {
      name: personName.value,
      status: personStatus.value,
    }

    if (personName.value == "" || personStatus.value == ""){
      alert("Please enter a neme and age")
    } else {
      api.post("/personagens", newPerson).then((reponse) =>{
        setCharacter([...character,response.data])
      })
    }
  };




  return (
    <>
    <h1 className=" flex justify-center margin-top-10 mt-10 text-xl">Rick and Morty - API</h1>

    <main className="grid grid-cols-5 min-h-screen  items-center justify-between p-24 gap-10">
   
      {character.map((personagem: any) => {
          return (
            <ul key={personagem.id}>
              <li className="text-xl text-amber-900">{personagem.name}</li>
              <li>{personagem.species}</li>
              <li>{personagem.status} <button className="bg-blue-100">save</button></li>
            </ul>
            
          )
        })
      }
    </main>
    </>
  );
}
 