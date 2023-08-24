import Comics from "@components/Comics";
import Head from "next/head";

function comics() {
    return (
        <>
            <Head>
                <meta
                    http-equiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"></meta>
            </Head>
            <Comics />
        </>
    );
}

export default comics;
