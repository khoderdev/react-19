// import React, { useState } from "react";

// function Home() {
//   const [name, setName] = useState("Ahmid")

//   const handleClick1 = () => {
//     setName('Tonai')

//   }

//   const handleClick2 = () => {
//     setName('Ahmid')
//   }

//   function Grids( props ) {
//     return (
//       <div className="flex flex-col items-center justify-evenly w-full h-52 lg:w-64 rounded-lg gap-4 border-2 !border-white-bg dark:!border-black-bg bg-white-contents dark:bg-black-contents">
//         <div className='flex gap-5'>
//           <button onClick={handleClick1} className="btn-main-normal text-black-text dark:text-white-text !font-medium bg-red-pri">{props.name}</button>
//           <button onClick={handleClick2} className="btn-main-normal text-black-text dark:text-white-text !font-medium bg-blue-sec">{props.name}</button>
//         </div>
//         <span className="text-3xl font-medium">{name}</span>
//       </div>
//     )
//   }

//   return (
//     <>
//       <h3 className="text-center text-3xl">
//         Home
//       </h3>
//       <div className="grid grid-cols-1 w-full justify-items-center md:grid-cols-3 gap-4 p-6">
//         <Grids name={name} />
//         <Grids name={name} />
//         <Grids name={name} />
//         <Grids name={name} />
//         <Grids name={name} />
//       </div>
//     </>
//   )
// }

// export default Home;
import React, { useState } from "react";

function Home() {
  const [names, setNames] = useState(["Ahmid", "Ahmid", "Ahmid", "Ahmid", "Ahmid", "Ahmid", "Ahmid", "Ahmid", "Ahmid", "Ahmid", "Ahmid", "Ahmid"]);

  const handleClick1 = (index) => {
    const updatedNames = [...names];
    updatedNames[index] = 'Tonai';
    setNames(updatedNames);
  };

  const handleClick2 = (index) => {
    const updatedNames = [...names];
    updatedNames[index] = 'Ahmid';
    setNames(updatedNames);
  };

  function Grids({ name, index }) {
    return (
      <div className="flex flex-col items-center justify-evenly w-full h-52 lg:w-64 rounded-lg gap-4 border-2 border-white-bg dark:border-black-bg bg-white-contents dark:bg-black-contents">
        <span className="text-[2.5rem] text-green-pri font-semibold">{name}</span>
        <div className='flex gap-5'>
          <button onClick={() => handleClick1(index)} className="btn-main-normal text-black-text dark:text-white-text font-medium bg-red-pri">{name}</button>
          <button onClick={() => handleClick2(index)} className="btn-main-normal text-black-text dark:text-white-text font-medium bg-blue-sec">{name}</button>
        </div>

      </div>
    );
  }

  return (
    <>
      <h3 className="text-center text-3xl font-medium">
        Home
      </h3>
      <div className="grid grid-cols-1 w-full justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8 p-6">
        {names.map((name, index) => (
          <Grids key={index} name={name} index={index} />
        ))}
      </div>
    </>
  );
}

export default Home;
