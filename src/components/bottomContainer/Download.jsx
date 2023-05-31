import React from "react";
import QrCode from "../../assets/qrcode.png";
const Download = () => {
  return (
    <div className="flex justify-center items-center smx:flex-col">
      <div className="px-12 w-1/2">
        <p className="font-bold text-2xl">
          Uygulamamızı yükleyerek kolay ve hızlı sipariş verebilirsiniz.
        </p>
      </div>
      <div className="w-1/2">
        <div className="flex justify-center my-10 smx:flex-col">
          <div className="flex items-center border  rounded-lg px-4 py-2 w-52 mx-2 bg-black mdx:mb-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
              className="w-7 md:w-8"
            />
            <div className="text-left ml-3">
              <p className="text-xs text-white">Download on </p>
              <p className="text-sm mdx:text-xs mdx:p-1 text-white">
                {" "}
                Google Play Store{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center border  rounded-lg px-4 py-2 w-44 mx-2 bg-black">
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
              className="w-7 md:w-8"
            />
            <div className="text-left ml-3">
              <p className="text-xs text-white">Download on </p>
              <p className="text-sm md:text-base text-white"> Apple Store </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  mb-2">
          <img src={QrCode} alt="QrCode" />
        </div>
      </div>
    </div>
  );
};

export default Download;
