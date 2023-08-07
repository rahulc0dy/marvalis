"use client";

import { useState, useEffect } from "react";
import Card from "./CharacterCard";

function Characters() {
    const [characters, setCharacters] = useState([]);
    const characterlist = async () => {
        const res = await fetch(
            ` https://gateway.marvel.com/v1/public/characters?limit=50&apikey=a8ed3540d87893181e081f06fb2362fb`
        );
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const getCharacters = async () => {
            const charactersFromServer = await characterlist();
            setCharacters(charactersFromServer.data.results);
        };
        getCharacters();
    }, []);

    return (
        <>
            <h1 className=" text-2xl uppercase text-center">Characters</h1>
            <div className="w-full grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 gap-3">
                {characters.map((character) => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
        </>
    );
}

export default Characters;
