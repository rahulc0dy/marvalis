//next component to search data from marvel api using url manipulation only

import React from "react";

const searchurl = (type, id) => {
    const public_key = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
    const private_key = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
    const timestamp = Date.now();
    const hash = md5(timestamp + private_key + public_key);
    return `https://gateway.marvel.com/v1/public/${type}/${id}?limit=50&ts=${timestamp}&apikey=${public_key}&hash=${hash}`;
};

export const CharacterSearch = () => {
    return <div>Search</div>;
};
export const ComicSearch = () => {
    return <div>Search</div>;
};
export const StorySearch = () => {
    return <div>Search</div>;
};
export const SeriesSearch = () => {
    return <div>Search</div>;
};
