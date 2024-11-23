import React from 'react'

interface Props{
    message:string
}
const PreCatch = ({message}:Props) => {
  return (
    <h1 className="text-center text-lg lg:text-[26px] my-4 tracking-wider">
     {message}
    </h1>
  );
}

export default PreCatch