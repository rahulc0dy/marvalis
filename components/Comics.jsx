"use client";

import { useState, useEffect } from "react";
import Card from "./ComicCard";
import URL from "./URLGen";

function Comics() {
    const [comics, setComics] = useState([]);
    const comicslist = async () => {
        const res = await fetch(URL("comics"));
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const getComics = async () => {
            const comicsFromServer = await comicslist();
            setComics(comicsFromServer.data.results);
        };
        getComics();
    }, []);

    return (
        <>
            <h1 className=" text-2xl uppercase text-center">Comics</h1>
            <div className="w-full grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 gap-3">
                {comics.map((comic) => (
                    <Card key={comic.id} comic={comic} />
                ))}
            </div>
        </>
    );
}

export default Comics;
