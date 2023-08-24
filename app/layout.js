import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Marvalis",
    description: "A website about Marvel",
    icon: "/Marvel_Logo.svg.png",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href={metadata.icon} />
            </Head>
            <body
                className={
                    inter.className + " relative bg-red-500 text-slate-50 p-2"
                }>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
