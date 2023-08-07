import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-between p-2 bg-red-500 text-slate-200 align-middle items-center sticky top-0">
            <h1 className=" uppercase text-slate-50 font-black text-5xl">
                Marvalis
            </h1>
            <div className="flex justify-evenly w-1/5 text-lg">
                <Link href="/characters" className=" shadow-stone-900">
                    Characters
                </Link>
                <Link href="/comics">Comics</Link>
                <Link href="/series">Series</Link>
                <Link href="/stories">Stories</Link>
            </div>
            <Link
                href="/search"
                className=" p-2 hover:scale-105 transition border-separate bg-stone-800 rounded">
                Search
            </Link>
        </nav>
    );
};

export default Navbar;
