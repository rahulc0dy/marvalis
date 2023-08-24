"use client";

import { useState, useEffect } from "react";
import Card from "./ComicCard";
import URL from "./URLGen";

function Comics() {
    const [comics, setComics] = useState([]);
    const [offset, setOffset] = useState(0);
    const comicslist = async (offset = 0) => {
        const res = await fetch(URL("comics", offset));
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const getComics = async () => {
            const comicsFromServer = await comicslist(offset);
            setComics(comicsFromServer.data.results);
        };
        getComics();
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
            <h1 className=" text-2xl uppercase text-center">Comics</h1>
            <div className="w-full grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 gap-3">
                {comics.map((comic) => (
                    <Card key={comic.id} comic={comic} />
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

export default Comics;
