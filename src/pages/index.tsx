import type { NextPage } from "next";
import { getOptionsForVote } from "../utils/getRandomPokimon";
import { trpc } from "../utils/trpc";
import { Suspense, useEffect, useState } from "react";

const Home = () => {
  const [options, setOptions] = useState<number[]>([0, 0])

  useEffect(() => {
    return setOptions(getOptionsForVote());
  }, [])

  return (
    <div className="h-screen w-screen flex flex-col justify-center align-middle">
      <div>
        <h1 className="text-center text-xl">What is the roundest Pokimon?</h1>
      </div>
      <div className="container flex flex-row justify-center align-middle mx-auto gap-10 mt-10 max-w-2xl">
        <div className="bg-red-600 p-10 rounded-xl">{options[0]}</div>
        <div className="text-center flex flex-col justify-center">vs</div>

        <div className="bg-red-600 p-10 rounded-xl">{options[1]}</div>
      </div>
    </div>
  );
};

export default Home;
