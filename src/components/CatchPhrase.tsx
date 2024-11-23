import React from "react";

interface Props {
  phrase: string;
}
const CatchPhrase = ({ phrase }: Props) => {
  return (
    <h3 className="bg-clip-text bg-gradient-to-r from-pink-700 via-purple-600 to-sky-600 text-transparent text-center text-2xl lg:text-4xl  font-semibold p-2">
      {phrase}
    </h3>
  );
};

export default CatchPhrase;
