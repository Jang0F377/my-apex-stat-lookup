import Head from "next/head";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const [selectValue, setSelectValue] = useState("PS4");
  const [gamertag, setGamertag] = useState("");
  const router = useRouter();

  const resetState = () => {
    setSelectValue("PS4");
    setGamertag("");
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  const handleSubmit = async (system: string, tag: string) => {
    await router
      .push({
        pathname: `/player/${gamertag}`,
        query: {
          system: system,
          gamertag: tag,
        },
      })
      .then(() => resetState());
  };

  return (
    <div className="z-0">
      <Head>
        <title>Apex Legends Lookup</title>
        <link rel="icon" href="/apex-logo.webp" />
      </Head>
      <section className="text-center my-auto text-black ">
        <h1 className="text-3xl mt-5 lg:text-5xl lg:mt-8 p-1 ">Welcome</h1>
        <h3 className="text-xl  lg:text-2xl lg:m-1 p-1">to the</h3>
        <img
          src="/apex-bg-removebg-preview.webp"
          className="lg:max-w-7xl my-2 md:my-0 mx-auto border-y-2 xl:border-y-4 border-black"
          alt={"ERR"}
        />
        <h2 className="text-2xl mt-1 lg:mt-2 lg:text-4xl">Stat Lookup!</h2>
      </section>
      <section className="lg:max-w-2xl p-1 m-1 mt-2 mx-auto">
        <div className="mx-1 md:mx-2">
          <label
            htmlFor="system"
            className="block text-sm md:text-lg font-medium text-black"
          >
            System
          </label>
          <select
            id="system"
            name="system"
            className="mt-1 block pl-3 pr-10 py-2 md:text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="Playstation"
            onChange={(event) => handleChange(event)}
          >
            <option value="PS4">Playstation</option>
            <option value="X1">Xbox</option>
            <option value="PC">PC</option>
          </select>
        </div>
        <div className="mx-1 md:mx-2">
          <label
            htmlFor="gamertag"
            className="block text-sm md:text-lg font-medium text-black mt-1"
          >
            Gamertag
          </label>
          <input
            className="flex w-full md:text-base focus:ring-indigo-500 focus:border-indigo-500 rounded sm:text-sm border-gray-300"
            type={"text"}
            name="gamertag"
            id="gamertag"
            autoComplete="true"
            value={gamertag}
            onChange={(e) => setGamertag(e.target.value)}
          />
        </div>
        <div className="mx-1 md:mx-2">
          <button
            type={"button"}
            onClick={() => handleSubmit(selectValue, gamertag)}
            className="w-full  mt-4  py-1.5 lg:px-4 lg:py-2 rounded-xl bg-muted-dark-red text-white text-lg hover:text-black "
          >
            Search
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
