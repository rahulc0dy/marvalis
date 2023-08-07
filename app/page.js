import Characters from "@/components/Characters";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className=" w-2/3 m-auto justify-center flex flex-col bg-neutral-900 text-slate-100 p-5 gap-2 homepage-main">
            <h1 className=" font-black text-9xl text-center">MARVALIS</h1>
            <p className=" text-left font-light text-red-100 text-lg">
                Welcome to Marvalis, your ultimate portal into the boundless and
                exhilarating universe of Marvel Comics! Immerse yourself in a
                captivating realm where iconic characters leap off the pages and
                into your imagination, where epic stories unfold with every
                turn, and where the extraordinary becomes the norm. Dive deep
                into the colorful tapestry of Marvel&apos;s rich history, where
                characters with incredible powers and human struggles come
                together in a symphony of action, drama, and heroism. Uncover
                the origins of beloved heroes like Spider-Man, Iron Man, and the
                X-Men, as well as the enigmatic villains who challenge them at
                every step. Marvalis isn&apos;t just a website; it&apos;s a
                doorway into the thrilling sagas that have defined generations.
                Explore the cosmic battles that span galaxies, the street-level
                heroics that keep city streets safe, and the mind-bending
                alternate realities that push the boundaries of imagination.
                From the cosmic majesty of the Infinity Gauntlet saga to the
                gritty realism of Daredevil&apos;s Hell&apos;s Kitchen, Marvalis
                has it all. Delve into exclusive character profiles that delve
                into their strengths, weaknesses, and pivotal moments. Discover
                the intricate web of interconnected stories that make up the
                Marvel Universe, where events in one series can have a ripple
                effect across the entire spectrum. Immerse yourself in the
                artistry of the comics, from the dynamic panels that capture
                explosive battles to the emotionally charged moments that tug at
                your heartstrings. Whether you&apos;re a seasoned Marvel veteran
                or a curious newcomer, Marvalis offers something for everyone.
                Immerse yourself in the tales of bravery, sacrifice, and
                personal growth that have captivated audiences for decades. Join
                us on a journey through the pages of Marvel history and get
                ready to experience the extraordinary in ways you&apos;ve never
                imagined. Your adventure begins here, at Marvalis!
            </p>
            <div className="flex w-full gap-1 justify-evenly bg-zinc-950 p-3 ">
                <Link
                    href="/characters"
                    className=" text-red-500 font-semibold uppercase text-lg drop-shadow-[1px_1px_3px_rgba(200,200,200,.5)]">
                    Characters
                </Link>
                <Link
                    href="/comics"
                    className=" text-red-500 font-semibold uppercase text-lg drop-shadow-[1px_1px_3px_rgba(200,200,200,.5)]">
                    Comics
                </Link>
                <Link
                    href="/series"
                    className=" text-red-500 font-semibold uppercase text-lg drop-shadow-[1px_1px_3px_rgba(200,200,200,.5)]">
                    Series
                </Link>
                <Link
                    href="/stories"
                    className=" text-red-500 font-semibold uppercase text-lg drop-shadow-[1px_1px_3px_rgba(200,200,200,.5)]">
                    Stories
                </Link>
            </div>
        </main>
    );
}
