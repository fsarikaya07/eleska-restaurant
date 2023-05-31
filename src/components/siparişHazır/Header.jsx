import React from "react";
import resim1 from "../../assets/img.jpg";
import resim2 from "../../assets/img1.jpg";

const Header = () => {
  return (
    <section>
      <div className="flex flex-col justify-center mx-auto max-w-7xl">
        <div className=" flex justify-center   p-6 ">
          <div className=" p-6 w-1/2 flex justify-center">
            <img
              src={resim1}
              alt=""
              className="resim  rounded-full w-96 justify-end "
            />
          </div>

          <div className="px-10 w-1/2 text-justify p-6 ">
            <div className=" font-bold font-sans">
              <h2 className="text-4xl und">Siparişin Hazır</h2>
            </div>
            <div className="">
              <p className="w-96 mt-4 text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, esse!
              </p>
            </div>
          </div>
        </div>

        {/* *********alt kısım**************** */}

        <div className=" flex justify-center h-80">
          <div className="bg-red-600 flex justify-between relative h-1/2 w-full">
            <div className="w-1/2 flex  justify-center"></div>

            <div className="px-10 w-1/2 text-justify -mt-52 ">
              <div className=" font-bold font-sans mt-6">
                <h2 className="text-xl w-96 mb-3">
                  Dürüm im Fladenbrot mit Kalbfleisch
                </h2>
              </div>
              <div className="">
                <img
                  src={resim2}
                  alt=""
                  className="w-96 h-96 object-cover mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
