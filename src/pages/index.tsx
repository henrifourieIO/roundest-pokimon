import type { NextPage } from "next";
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const hello = trpc.useQuery(['hello', { text: 'client' }]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center align-middle">
      <div>
        <h1 className="text-center text-xl">What is the roundest Pokimon?</h1>
        <small>{hello.data?.greeting}</small>
      </div>
      <div className="container flex flex-row justify-center align-middle mx-auto gap-10 mt-10 max-w-2xl">
        <div className="bg-red-600 p-10 rounded-xl"></div>
        <div className="text-center flex flex-col justify-center">vs</div>
        <div className="bg-red-600 p-10 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Home;
