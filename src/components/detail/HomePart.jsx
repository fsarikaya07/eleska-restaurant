import React from 'react'
import Meal from "../../assets/meal2.jpg"

const HomePart = () => {
  return (
    <div className='w-3/4 mx-auto h-3/4 mt-10 mb-10 flex flex-col items-center'>
   
    <div className=" flex items-center justify-center">

      <div className="px-4 w-56 h-96 mx-4 -mt-28">
      <h1 className="text-2xl font-bold mb-2">Lasagna Al Forno</h1>
      <p className="text-gray-500 mb-8">Buraya yemeğin içindekiler eklenecek.</p>
      <h1 className="text-2xl font-bold mb-2">Cannelloni</h1>
      <p className="text-gray-500 mb-8">Sample Text. Click to select the text box. Click again or double click to start editing the text.</p>
      <h1 className="text-2xl font-bold mb-2">Tiramisu</h1>
      <p className="text-gray-500 mb-8">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
      </div>

    <div className="w-72 ">
         <img
          className='w-full rounded-xl h-[500px]'
          src={Meal}
          alt="Pizza"

          />
    </div>
       

     <div className="w-56 px-4 h-96 mx-4 -mt-28">
      <h1 className="text-2xl font-bold mb-2">Baklava</h1>
      <p className="text-gray-500 mb-6">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
      <h1 className="text-2xl font-bold mb-2">Pide Mit Mozeralla</h1>
      <p className="text-gray-500 mb-6">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
      <h1 className="text-2xl font-bold mb-2">Pide Mit Sucuk</h1>
      <p className="text-gray-500 mb-6">Sample text. Click to select the text box. Click again or double click to start editing the text.
        Hello world!!!
        Deneme tekrar 
      </p>
    </div>
</div>


      <div className="mb-4 text-center w-96 mt-10">
        <h1 className="text-2xl font-bold mb-2">Pide Mit Spinat und Ei</h1>
        <p className="text-gray-500">
          Sample Text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>
      </div>

    </div>
  )
}

export default HomePart


