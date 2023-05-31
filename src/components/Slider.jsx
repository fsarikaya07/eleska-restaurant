// import { useState } from 'react';

// const CarouselSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     'https://source.unsplash.com/collection/190727/1600x900',
//     'https://source.unsplash.com/collection/190727/1600x900',
//     'https://source.unsplash.com/collection/190727/1600x900',
//     'https://source.unsplash.com/collection/190727/1600x900',
//     'https://source.unsplash.com/collection/190727/1600x900',
//     "https://images.unsplash.com/photo-1471113082645-fde63c139087?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHwxOTA3Mjd8fHx8fHx8MTY4NTExMTc4Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   return (
//     <div className="relative">
//       <div className="carousel-wrapper">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`carousel-item absolute ${
//               index === currentIndex ? 'opacity-100' : 'opacity-0'
//             } transition-opacity duration-500`}
//           >
//             <img src={image} alt="Carousel Image" className="w-96" />
//             <div className="card-overlay">
//               <div className="card-content">
//                 <h5 className="card-title">Card Title</h5>
//               </div>
//             </div>
            
            
//           </div>
//         ))}
//       </div>
//       <div className="carousel-wrapper">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`carousel-item absolute ${
//               index === currentIndex ? 'opacity-100' : 'opacity-0'
//             } transition-opacity duration-500`}
//           >
//             <img src={image} alt="Carousel Image" className="w-96" />
//             <div className="card-overlay">
//               <div className="card-content">
//                 <h5 className="card-title">Card Title</h5>
//               </div>
//             </div>
            
            
//           </div>
//         ))}
//       </div>

//       <button
//         className="carousel-control-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition duration-300"
//         onClick={prevSlide}
//       >
//         <span className="carousel-control-icon text-gray-600">&lt;</span>
//       </button>

//       <button
//         className="carousel-control-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition duration-300"
//         onClick={nextSlide}
//       >
//         <span className="carousel-control-icon text-gray-600">&gt;</span>
//       </button>
//     </div>
//   );
// };

// export default CarouselSlider;
