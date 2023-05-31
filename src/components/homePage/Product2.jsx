// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import Card from "./Card";
// import { useState } from "react";
// const Product2 = () => {
//   const scrollLeft = () => {
//     document.getElementById("content").scrollLeft -= 224;
//   };

//   const scrollRight = () => {
//     document.getElementById("content").scrollLeft += 224;
//   };
//   const images = [
//     "https://source.unsplash.com/1600x900/?beach",
//     "https://source.unsplash.com/1600x900/?cat",
//     "https://source.unsplash.com/1600x900/?dog",
//     "https://source.unsplash.com/1600x900/?lego",
//     "https://source.unsplash.com/1600x900/?textures&patterns",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const back = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   const next = () => {
//     if (currentIndex < images.length - 1) {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     } else if (currentIndex <= images.length) {
//       setCurrentIndex(images.length - currentIndex);
//     }
//   };

//   return (
//     <article className="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl">
//       <div className="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
//         <span>{currentIndex + 1}</span>/<span>{images.length}</span>
//       </div>

//       {images.map((image, index) => (
//         <figure
//           key={index}
//           className={`h-96 ${currentIndex === index ? "" : "hidden"}`}
//         >
//           <img
//             src={image}
//             alt="Image"
//             className="absolute inset-0 z-10 h-full w-full object-cover opacity-70"
//           />
//           <figcaption className="absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light text-sm text-center tracking-widest leading-snug bg-gray-300 bg-opacity-25">
//             Any kind of content here! Primum in nostrane potestate est, quid
//             meminerimus? Nulla erit controversia. Vestri haec verecundius, illi
//             fortasse constantius.
//           </figcaption>
//         </figure>
//       ))}

//       <button
//         onClick={back}
//         className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
//       >
//         <svg
//           className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2.5}
//             d="M15 19l-7-7 7-7"
//           ></path>
//         </svg>
//       </button>

//       <button
//         onClick={next}
//         className="absolute right-14 top-1/2 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
//       >
//         <svg
//           className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2.5}
//             d="M9 5l7 7-7 7"
//           ></path>
//         </svg>
//       </button>
//     </article>
//   );
// };

// export default Product2;
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Card from "./Card";

const Product2 = () => {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 224;
  };

  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 224;
  };
  
  return (
    <div className="container mx-auto mt-10 relative ">
      <div className="w-screen absolute right-0">
            <div className="h-24 bg-red-500 w-1/2"></div>
        </div>
      <div className="clear-both relative h-12"></div>

      <div className=" relative mx-auto z-10 max-w-4xl ">
        <div className="flex items-center absolute left-0 top-1/2 z-40 overflow-x-hidden">
          <button
            onClick={scrollLeft}
            className="bg-black rounded-full p-2 text-white w-8 h-8 flex justify-center items-center opacity-70 hover:opacity-100 duration-500"
          >
            <FiChevronLeft />
          </button>
        </div>
        <div
          id="content"
          className="carousel flex gap-5 scroll-smooth overflow-x-auto"
        >
          <div>
            <Card />
          </div>

          <div>
            <Card />
          </div>

          <div>
            <Card />
          </div>

          <div>
            <Card />
          </div>

          <div>
            <Card />
          </div>

          <div>
            <Card />
          </div>

          <div>
            <Card />
          </div>

          <div>
            <Card />
          </div>

          <div>
            <Card />
          </div>

          <div>
            <Card />
          </div>
        </div>

        <div className="flex items-center absolute right-0 top-1/2 z-40">
          <button
            onClick={scrollRight}
            className="bg-black rounded-full p-2 text-white w-8 h-8 flex justify-center items-center opacity-70 hover:opacity-100 duration-500"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className="flex w-screen relative -right-0 -mt-10 z-0 justify-end">
        <div className="h-24 bg-red-500  space-x-reverse w-1/2 "></div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Product2;
