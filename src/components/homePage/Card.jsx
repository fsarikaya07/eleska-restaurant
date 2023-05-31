import React from "react";

const Card = () => {
  return (
    <div className="main-page-product group ">
      <div className="bg-black h-56 z-20 m-3 w-[184px]  group-hover:opacity-20 group-hover:scale-105 duration-500">
        <img
          src="img/186.jpg"
          className="group-hover:scale-105 duration-500 bg-white"
          alt=""
        />

        {/* <h5 className="text-xl font-medium leading-tight  absolute bottom-8 text-white group-hover:mb-2 duration-500 z-30 ">
          Product - 1 - Title
        </h5> */}
      </div>
    </div>
  );
};

export default Card;
