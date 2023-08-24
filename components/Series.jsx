"use client";

import { useState, useEffect } from "react";
import Card from "./ComicCard";
import URL from "./URLGen";

function Series() {
    const [series, setSeries] = useState([]);
    const [offset, setOffset] = useState(0);

    const serieslist = async () => {
        const res = await fetch(URL("series", offset));
        const data = await res.json();

        return data;
    };

    useEffect(() => {
        const getSeries = async () => {
            const seriesFromServer = await serieslist();
            setSeries(seriesFromServer.data.results);
        };
        getSeries();
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
            <h1 className=" text-2xl uppercase text-center">Series</h1>
            <div className="w-full grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 gap-3">
                {series.map((comic) => (
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

export default Series;
