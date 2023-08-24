import md5 from "md5";

const URL = (type) => {
    const public_key = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
    const private_key = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
    const timestamp = Date.now();
    const hash = md5(timestamp + private_key + public_key);
    return `https://gateway.marvel.com/v1/public/${type}?limit=50&ts=${timestamp}&apikey=${public_key}&hash=${hash}`;
};

export default URL;
