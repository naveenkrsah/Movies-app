import React from "react";

const Card = ({ movie }) => {
  const invalidImageURL =
    "https://media.istockphoto.com/id/1355176914/photo/movie-theater-during-the-screening-of-an-animated-movie.jpg?s=1024x1024&w=is&k=20&c=YAcystHcKQGDnJr_cJDmmPc9tCSX7_vHNloaMKn74-8=";
  return (
    <div className=" container bg-black text-neutral-200 rounded-[20px] ">
      <h1 className="text-center text-[20px] pt-6">{movie?.titleText?.text} ({movie?.releaseYear?.year})</h1>
      <div className="h-48 w-full overflow-hidden">
        <img
          src={movie?.primaryImage?.url || invalidImageURL}
          alt="Movie poster"
        />
      </div>
      <h1 className="text-center text-[20px] pb-6">{movie?.primaryImage?.caption?.plainText}</h1>
    </div>
  );
};

export default Card;
