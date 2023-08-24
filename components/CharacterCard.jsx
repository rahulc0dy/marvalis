import React from "react";
import Link from "next/link";
import Image from "next/image";

function Card({ character }) {
    return (
        <div className="container p-3 bg-zinc-950 hover:scale-105 hover:shadow hover:shadow-slate-900 transition-transform hover:bg-zinc-900">
            <Image
                className="w-full aspect-square rounded-none"
                src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                }
                width={200}
                height={200}
            />
            <h2 className="block pb-1 pt-1 text-lg font-bold">
                <Link href={"/characters/" + character.id}>
                    {character.name}
                </Link>
            </h2>

            <p className="line-clamp-3 text-ellipsis text-slate-500">
                {character.description
                    ? character.description
                    : "No description available"}
            </p>
            <div className="container w-full flex mt-1 text-neutral-500 font-light">
                <Link
                    className=" w-1/3"
                    href={"/" + character.name + "/comics"}>
                    Comics: {character.comics.available}
                </Link>
                <Link className="w-1/3" href="#">
                    Series: {character.series.available}
                </Link>
                <Link className="w-1/3" href="#">
                    Stories: {character.series.available}
                </Link>
            </div>
        </div>
    );
}

export default Card;
