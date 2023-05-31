// // const Products = () => {
// //   return (
// //     <div className="container mx-auto mt-10 relative">

// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import Card from "./Card";
// import React from "react";

// const Products = () => {
//   return (
//     <div className="container mx-auto mt-10 relative">
//       <div className="w-screen absolute right-0">
//         <div className="h-24 bg-red-500 w-1/2"></div>
//       </div>
//       <div className="clear-both relative h-12"></div>

//       <div className=" relative mx-auto z-10 max-w-4xl ">
//         <div className="flex items-center absolute left-0 top-1/2 z-40">
//           <button
//             onClick={scrollLeft}
//             className="bg-black rounded-full p-2 text-white w-8 h-8 flex justify-center items-center opacity-70 hover:opacity-100 duration-500"
//           >
//             <FiChevronLeft />
//           </button>
//         </div>
//         <div
//           id="content"
//           className="carousel flex gap-5 scroll-smooth overflow-x-auto"
//         >
//           <div>
//             <Card />
//           </div>

//           <div>
//             <Card />
//           </div>

//           <div>
//             <Card />
//           </div>

//           <div>
//             <Card />
//           </div>

//           <div>
//             <Card />
//           </div>

//           <div>
//             <Card />
//           </div>

//           <div>
//             <Card />
//           </div>

//           <div>
//             <Card />
//           </div>

//           <div>
//             <Card />
//           </div>

//           <div>
//             <Card />
//           </div>
//         </div>

//         <div className="flex items-center absolute right-0 top-1/2 z-40">
//           <button
//             onClick={scrollRight}
//             className="bg-black rounded-full p-2 text-white w-8 h-8 flex justify-center items-center opacity-70 hover:opacity-100 duration-500"
//           >
//             <FiChevronRight />
//           </button>
//         </div>
//       </div>

//       <div className="flex w-screen relative -right-0 -mt-10 z-0 justify-end">
//         <div className="h-24 bg-red-500  space-x-reverse w-1/2 "></div>
//       </div>
//       <br />
//       <br />
//     </div>
//   );
// };

// export default Products;

// //         <div className="w-screen absolute right-0">
// //             <div className="h-24 bg-red-500 w-1/2"></div>
// //         </div>
// //         <div className="clear-both relative h-12"></div>

// //     <div className="relative flex flex-wrap justify-center gap-5 z-10">
// //         <div className="main-page-product group">
// //           <img
// //             src="img/186.jpg"
// //             className=""
// //             alt=""
// //           />
// //           <h5 className="text-2xl font-medium leading-tight  absolute bottom-4 text-white group-hover:mb-2 duration-500  ">
// //             Product - 1
// //           </h5>
// //         </div>

// //         <div className="main-page-product group">
// //           <img
// //             src="img/186.jpg"
// //             className=""
// //             alt=""
// //           />
// //           <h5 className="text-2xl font-medium leading-tight  absolute bottom-4 text-white group-hover:mb-2 duration-500  ">
// //             Product - 1
// //           </h5>
// //         </div>

// //         <div  className="main-page-product group">
// //           <img
// //             src="img/186.jpg"
// //             className=""
// //             alt=""
// //           />
// //           <h5 className="text-2xl font-medium leading-tight  absolute bottom-4 text-white group-hover:mb-2 duration-500  ">
// //             Product - 1
// //           </h5>
// //         </div>

// //         <div className="main-page-product group">
// //           <img
// //             src="img/186.jpg"
// //             className=""
// //             alt=""
// //           />
// //           <h5 className="text-2xl font-medium leading-tight  absolute bottom-4 text-white group-hover:mb-2 duration-500  ">
// //             Product - 1
// //           </h5>
// //         </div>
// //       </div>

// //       <div className="flex w-screen relative -right-0 -mt-10 z-0 justify-end">
// //             <div className="h-24 bg-red-500  space-x-reverse w-1/2">

// //             </div>
// //         </div>
// //       <br />
// //       <br />
// //     </div>
// //   );
// // };
const Products = () => {
  return (
    <div className="container mx-auto mt-10 relative">
      
        <div className="w-screen absolute right-0">
            <div className="h-24 bg-red-500 w-1/2"></div>
        </div>
        <div className="clear-both relative h-12"></div>

    <div className="relative flex flex-wrap justify-center gap-5 z-10">
        <div className="main-page-product group">
          <img
            src="img/186.jpg"
            className=""
            alt=""
          />
          <h5 class="text-2xl font-medium leading-tight  absolute bottom-4 text-white group-hover:mb-2 duration-500  ">
            Product - 1
          </h5>
        </div>

        <div className="main-page-product group">
          <img
            src="img/186.jpg"
            className=""
            alt=""
          />
          <h5 class="text-2xl font-medium leading-tight  absolute bottom-4 text-white group-hover:mb-2 duration-500  ">
            Product - 1
          </h5>
        </div>

        <div  className="main-page-product group">
          <img
            src="img/186.jpg"
            className=""
            alt=""
          />
          <h5 class="text-2xl font-medium leading-tight  absolute bottom-4 text-white group-hover:mb-2 duration-500  ">
            Product - 1
          </h5>
        </div>

        <div className="main-page-product group">
          <img
            src="img/186.jpg"
            className=""
            alt=""
          />
          <h5 class="text-2xl font-medium leading-tight  absolute bottom-4 text-white group-hover:mb-2 duration-500  ">
            Product - 1
          </h5>
        </div>
      </div>

      <div className="flex w-screen relative -right-0 -mt-10 z-0 justify-end">
            <div className="h-24 bg-red-500  space-x-reverse w-1/2">

            </div>
        </div>
      <br />
      <br />
    </div>
  );
};

export default Products;
