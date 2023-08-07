"use client";

import { useState, useEffect } from "react";
import Card from "./ComicCard";

function Series() {
    const [series, setSeries] = useState([]);
    const serieslist = async () => {
        const res = await fetch(
            ` https://gateway.marvel.com/v1/public/series?limit=50&apikey=a8ed3540d87893181e081f06fb2362fb`
        );
        const data = await res.json();

        return data;
    };

    useEffect(() => {
        const getSeries = async () => {
            const seriesFromServer = await serieslist();
            setSeries(seriesFromServer.data.results);
        };
        getSeries();
    }, []);

    return (
        <>
            <h1 className=" text-2xl uppercase text-center">Series</h1>
            <div className="w-full grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 gap-3">
                {series.map((comic) => (
                    <Card key={comic.id} comic={comic} />
                ))}
            </div>
        </>
    );
}

export default Series;
