import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className=" container text-center w-full m-auto p-10">
            <h1 className=" text-center text-9xl">Error!!</h1>
            <p className="block text-lg">
                {" "}
                The Page you requested was not found
            </p>
            <Link
                className=" rounded bg-slate-700 p-2 block w-1/3 mx-auto"
                href={"/"}>
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
