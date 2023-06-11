import { BsFacebook, BsSnapchat } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4c5035b808msh2c4561117b25e2ep1676d3jsna94c55ac4428",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    fetch("https://moviesdatabase.p.rapidapi.com/titles", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return setMovies(response.results);
      })
      // console.log({movies.results})
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container px-4 mx-auto max-w-screen">
      <div className="my-4 text-white">
        <nav>
          <ul className="flex bg-slate-800 py-4 rounded-[56px]">
            <li className="px-8 cursor-pointer hover:text-zinc-400">Home</li>
            <li className="px-8 cursor-pointer hover:text-zinc-400">
              New Release
            </li>
            <li className="px-8 cursor-pointer hover:text-zinc-400">
              Subscription
            </li>
            <li className="px-8 cursor-pointer hover:text-zinc-400">
              Contact us
            </li>
          </ul>
        </nav>
      </div>
      <div className=" bg-black h-54 text-white grid justify-items-center rounded-[36px]">
        <img src="./heading1.jpg" alt="headinf logo" />
      </div>
      <div className="text-justify py-4">
        <h1 className="px-6 py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, unde?
          Earum maxime aperiam mollitia veniam. Consectetur nostrum accusamus,
          saepe ipsam deleniti numquam, sapiente esse aut repellat ducimus sunt
          assumenda perferendis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusantium deleniti accusamus consectetur optio
          odio soluta aut, sunt vitae dolorum voluptatibus laudantium expedita
          neque impedit quibusdam sed voluptatem eum assumenda corporis. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsum
          numquam aspernatur non dolorem adipisci. Incidunt doloribus hic
          quibusdam natus necessitatibus minus facilis nulla eum, velit atque
          perferendis, minima neque.
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-flow-cols gap-4">
        {movies?.map((movie) => (
          <Card key={movie?.id} movie={movie} />
        ))}
        ;
      </div>
      <div className="bg-black w-full h-130 p-8  my-4 rounded-[40px]">
        <h1 className="text-center text-[40px] text-white font-bold">
          Check Out The Best Plans From
        </h1>
        <h1 className="py-4 text-center text-red-600 text-[40px] font-bold">
          FILMCENTER
        </h1>
        {/* <img src="./heading1.jpg" alt="logo"/> */}
        <div className="flex">
          <div className="w-1/6 mx-12 h-1/2 bg-zinc-900 rounded-3xl">
            <h1 className="pt-4 my-4 text-[40px] text-red-600 text-center ">
              Rs.99
            </h1>
            <ol className="list-disc list-inside p-4">
              <li className="text-left text-white">Valid For 30 Days</li>
              <li className="text-left text-white">Unlimited Movies</li>
              <li className="text-left text-white">Full HD Quality</li>
              <li className="text-left text-white">Hollywood + Bollywood</li>
            </ol>
          </div>
          <div className="w-1/6 mx-12 h-1/2 bg-zinc-900 rounded-3xl">
            <h1 className="pt-4 my-4 text-[40px] text-red-600 text-center">
              Rs.199
            </h1>
            <ol className="list-disc list-inside p-4">
              <li className="text-left text-white">Valid For 3 Months</li>
              <li className="text-left text-white">Unlimited Movies</li>
              <li className="text-left text-white">Full HD Quality</li>
              <li className="text-left text-white">Hollywood + Bollywood</li>
            </ol>
          </div>
          <div className="w-1/6 mx-12 h-1/2 bg-zinc-900 rounded-3xl">
            <h1 className="pt-4 my-4 text-[40px] text-red-600 text-center">
              Rs.399
            </h1>
            <ol className="list-disc list-inside p-4">
              <li className="text-left text-white">Valid For 6 Months</li>
              <li className="text-left text-white">Unlimited Movies</li>
              <li className="text-left text-white">Full HD Quality</li>
              <li className="text-left text-white">Hollywood + Bollywood</li>
            </ol>
          </div>
          <div className="w-1/6 mx-12 h-1/2 bg-zinc-900 rounded-3xl">
            <h1 className="pt-4 my-4 text-[40px] text-red-600 text-center">
              Rs.599
            </h1>
            <ol className="list-disc list-inside p-4">
              <li className="text-left text-white">Valid For 12 Months</li>
              <li className="text-left text-white">Unlimited Movies</li>
              <li className="text-left text-white">Full HD Quality</li>
              <li className="text-left text-white">Hollywood + Bollywood</li>
            </ol>
          </div>
        </div>
      </div>
      <footer className="flex justify-between w-full items-end mt-4 py-4">
        <h1 className="text-[20px] flex">© 2023 Filmcenter</h1>
        <h3 className="flex ">
          <button><BsFacebook size={34} color="blue" /></button>
          <button><AiFillInstagram size={34} color="red" /></button>
          <button><AiOutlineTwitter size={34} color="skyblue" /></button>
          <button><AiFillYoutube size={34} color="red" /></button>
          <button><BsSnapchat size={34} color="yellow" /></button>
        </h3>
      </footer>
    </div>
  );
}

export default App;
