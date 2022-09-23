import Head from "next/head";
import { Button } from "../components/button/button";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div className="homeBackground">
      <Head>
        <title>Playnetz || Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="flex flex-col w-full max-w-[1440px] h-full">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-full lg:w-[65%] h-[35rem] gap-6 justify-center items-center ">
              <h2 className="text-5xl font-bold text-center w-full max-w-[34.5rem]">
                Entertainment is fun Get your 2nd month free
              </h2>
              <form className="w-full md:w-[65%] lg:w-[70%]">
                <div className="flex flex-col md:flex-row w-full gap-4 md:gap-0 items-center justify-center">
                  <input
                    className="w-full md:w-[75%] px-4 py-3 rounded-md md:rounded-l-md outline-none placeholder-neutral-600 text-[#33A4D8] font-medium"
                    placeholder="search your favourite movies"
                  />
                  <Button className={"-ml-0 md:-ml-5 py-[0.8rem] rounded-l-none w-full md:w-auto"}>
                    Let’s Have Fun
                  </Button>
                </div>
              </form>
              <div>
                <p className="text-center">Stream anywhere. Abort anytime</p>
              </div>
            </div>
            <div className="absolute bottom-0 mb-4 p-4">
              <p className="text-center">
                Ready to Stream? Or Be the producer. Enter your email to reclaim
                your membership
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
