// import React, { useState } from "react";
// import "../../styles.css";

// const Orbit = ({ radius }) => {
//   const menu = [
//     { title: "Pizza 1 asdasdasdasdasdasddasdasdasdasd" },
//     { title: "Pizza 2" },
//     { title: "Pizza Usta Pizza" },
//     { title: "Pizza 4" },
//     { title: "Pizza 5" },
//     { title: "Pizza 6" },
//     { title: "Pizza 7" },
//     { title: "Pizza 8" },
//   ];

//   const [orbits] = useState(
//     Array.from({ length: menu.length }, (_, index) => {
//       const angle = (index / (menu.length - 1)) * Math.PI;
//       const x = Math.cos(angle) * radius * 1.38;
//       const y = Math.sin(angle) * radius * 1.4;
//       const menuItem = index % menu.length;
//       return { x, y, menuItem };
//     })
//   );

//   return (

//     <div className="min-h-screen self-center">
//       <div className="orbit-container ">
//         <div className=" relative  right-[510px] h-[510px] w-[1100px] rounded-full  ">
//           <img
//             className="circle-container left-0  mx-auto rounded-full"
//             src="https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/ykvmayiswebsite26.webp"
//             alt="imic"
//           />
//         </div>
//         <div className="relative -bottom-16 ">
//           {orbits.map((orbit, index) => (
//             <div
//               key={index}
//               className={setClassName(menu, index)}
//               style={{ bottom: orbit.y, right: orbit.x }}
//             >
//               <div className="">
//                 <p className="w-44 ">{menu[orbit.menuItem].title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orbit;
import React, { useState } from "react";
import "../../styles.css";
import pizza from "../../assets/pizza1.jpg";
import Popup from "reactjs-popup";
import PizzaIngredients from "./DropDown";
import Dropdown from "./DropDown";
import Modal from "./Modal";

const Orbit = ({ radius }) => {
  const menu = [
    { title: "Pizza 1" },
    { title: "Pizza 2" },
    { title: "Pizza 3" },
    { title: "Pizza 4" },
    { title: "Pizza 5" },
    { title: "Pizza 6" },
    { title: "Pizza 7" },
    { title: "Pizza 8" },
    { title: "Pizza 9" },
    { title: "Pizza 10" },
    { title: "Pizza 11" },
    
  ];

  const [orbits] = useState(() =>
    Array.from({ length: menu.length }, (_, index) => {
      const angle = (index / (menu.length - 1)) * Math.PI;
      const x = Math.cos(angle) * radius * 1.18;
      const y = Math.sin(angle) * radius * 1.1;
      const menuItem = index % menu.length;
      return { x, y, menuItem };
    })
  );

  const getOrbitClassName = (index) => {
    const isLeftOrbit = index < menu.length / 2;
    return isLeftOrbit
      ? "orbit flex flex-row-reverse pr-6 text-right"
      : "orbit flex flex-row pl-6";
  };

  return (
    <div className=" h-[80vh] self-center ml-[50%]">
      <div className="orbit-container">
        <div className="pizza-bg relative right-[510px] h-[510px] w-[1100px] rounded-full">
          <img
            className="w-96 circle-container left-0 mx-auto  w- rounded-full"
            src={pizza}
            alt="imic"
          />
          <div className="relative -bottom-16 ">
            {orbits.map((orbit, index) => (
              <div
                key={index}
                className={getOrbitClassName(index)}
                style={{
                  bottom: orbit.y,
                  right: orbit.x,
                  marginRight: 540,
                  marginBottom: 150,
                }}
              >
                <div className="hover:text-xl hover:cursor-pointer">
                  <Popup
                    trigger={
                      <p className="w-44">{menu[orbit.menuItem].title}</p>
                    }
                    position="center center"
                    
                  >
                  
                    {/* <Dropdown/> */}
                    <Modal menu={menu[orbit.menuItem].title} />

                  
                  </Popup>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orbit;
