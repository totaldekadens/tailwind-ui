import Head from "next/head";
import { useRouter } from "next/router";
import { componentList as list } from "@/lib/data";
import Wrapper from "@/components/common/Wrapper";
import Layout from "@/components/common/Layout";

export default function Pages() {
  const router = useRouter();
  const param = router.query.pages;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {list.map((page, i) => {
          if (param && param[0] == page.slug) {
            return (
              <div className="w-full" key={i}>
                <div className="flex flex-col items-center gap-3 px-6">
                  <h1 className="text-center text-[50px] text-slate-700">
                    {page.heading}
                  </h1>
                  <h2 className="text-center">{page.description1}</h2>
                  <h2 className="text-center">{page.description2}</h2>
                </div>
                {page.components.map((comp, i) => {
                  return (
                    <Wrapper key={i} title={comp.title}>
                      <comp.component />
                    </Wrapper>
                  );
                })}
              </div>
            );
          }
        })}
      </Layout>
    </>
  );
}
