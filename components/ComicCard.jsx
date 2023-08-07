import React from "react";
import Link from "next/link";
import Image from "next/image";

function Card({ comic }) {
    return (
        <div className="container p-3 bg-zinc-950 hover:scale-105 hover:shadow hover:shadow-slate-900 transition-transform hover:bg-zinc-900">
            <Image
                className="w-full aspect-square rounded-none"
                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                width={200}
                height={200}
            />
            <h2 className="block pb-1 pt-1 text-lg font-bold">{comic.title}</h2>

            <p className="line-clamp-3 text-ellipsis text-slate-500">
                {comic.description
                    ? comic.description
                    : "No description available"}
            </p>
            <div className="container w-full flex mt-1 text-neutral-500 font-light">
                <Link className=" w-1/3" href={"/" + comic.name + "/comics"}>
                    Characters: {comic.characters.available}
                </Link>
                <Link className="w-1/3" href="#">
                    Events: {comic.events.available}
                </Link>
                <Link className="w-1/3" href="#">
                    Stories: {comic.stories.available}
                </Link>
            </div>
        </div>
    );
}

export default Card;
