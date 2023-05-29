import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { CopyBlock, dracula } from "react-code-blocks";
import Centered from "@/components/general/contact/Centered";
import { useEffect, useState } from "react";
import Layout from "@/components/common/Layout";
import { componentList as list } from "@/lib/data";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col items-center px-6 mb-20">
          <h1 className="text-center text-[50px] text-slate-700">Components</h1>
          {/*   <h2 className="text-center">{page.description1}</h2> */}
        </div>
        <div className="w-11/12 grid grid-cols-3  md:grid-cols-4 gap-4">
          {list.map((page) => (
            <Link href={"/" + page.slug}>
              <div className="relative rounded-md h-20 flex items-center justify-center bg-gradient-to-r from-purple-100 via-white to-purple-100  hover:from-pink-100 hover:via-slate-50 hover:to-blue-100 transition-all duration-200 hover:scale-105">
                <h2 className="text-center">{page.heading}</h2>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    </>
  );
}
