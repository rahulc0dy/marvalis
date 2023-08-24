"use client";

import { useState, useEffect } from "react";
import Card from "./CharacterCard";
import URL from "./URLGen";

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [offset, setOffset] = useState(0);
    const characterlist = async () => {
        const res = await fetch(URL("characters", offset));
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const getCharacters = async () => {
            const charactersFromServer = await characterlist();
            setCharacters(charactersFromServer.data.results);
        };
        getCharacters();
    }, [offset]);

    const handleNextClick = async () => {
        const newOffset = offset + 50;
        setOffset(newOffset); // Update the offset state
    };
    const handlePreviousClick = async () => {
        const newOffset = offset > 50 ? offset - 50 : 0;
        setOffset(newOffset); // Update the offset state
    };

    return (
        <>
            <h1 className=" text-2xl uppercase text-center">Characters</h1>
            <div className="w-full grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 gap-3">
                {characters.map((character) => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
            <div className=" container w-full flex gap-5 justify-center items-center my-5">
                <button
                    className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={handlePreviousClick}>
                    Previous
                </button>
                <button
                    className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={handleNextClick}>
                    Next
                </button>
            </div>
        </>
    );
}

export default Characters;
