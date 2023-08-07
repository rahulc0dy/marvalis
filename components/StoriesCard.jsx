import React from "react";
import Link from "next/link";
import Image from "next/image";

function Card({ stories }) {
    return (
        <div className="container p-3 bg-zinc-950 hover:scale-105 hover:shadow hover:shadow-slate-900 transition-transform hover:bg-zinc-900">
            <h2 className="block pb-1 pt-1 text-lg font-bold">
                {stories.title}
            </h2>

            <p className="line-clamp-3 text-ellipsis text-slate-500">
                {stories.description
                    ? stories.description
                    : "No description available"}
            </p>
            <div className="container w-full flex mt-1 text-neutral-500 font-light">
                <Link
                    className=" w-1/3"
                    href={"/" + stories.name + "/storiess"}>
                    Characters: {stories.characters.available}
                </Link>
                <Link className="w-1/3" href="#">
                    Comics: {stories.comics.available}
                </Link>
                <Link className="w-1/3" href="#">
                    Series: {stories.series.available}
                </Link>
            </div>
        </div>
    );
}

export default Card;
