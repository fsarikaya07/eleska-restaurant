const Steps = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex gap-2 flex-col md:flex-row mx-10 lg:mx-20 xl:mx-56">
        <div class="flex flex-col basis-1/3 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
         
          <div class="p-6">
            <img className="w-12 mx-auto " src="img/login.png" alt="" />
            <h5 class="mb-2 pt-4 text-xl font-medium leading-tight text-gray-800 ">
              Üye Giriş Yap
            </h5>
            <p class="mb-4 ">
              Üyelik Oluştur veya oturumunu aç.
            </p>
            
          </div>
         
        </div>

        <div class="flex flex-col basis-1/3 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
         
          <div class="p-6">
          <img className="w-12 mx-auto" src="img/online-shopping.png" alt="" />
            <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800  pt-4">
              Siparişini Oluştur
            </h5>
            <p class="mb-4 text-base text-gray-800">
              En lezzetli yiyecekler arasında seçtiklerini sepetine ekle. Siparişini tamamlamadan önce kampanyalara göz atmayı unutma!
            </p>
            
          </div>
         
        </div>

        <div class="flex flex-col basis-1/3 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
         
          <div class="p-6">
          <img className="w-12 mx-auto" src="img/order.png" alt="" />
            <h5 class="mb-2 text-xl font-medium leading-tight text-gray-800  pt-4">
              Tek Tıkla Kapında
            </h5>
            <p class="mb-4 text-base text-gray-800">
              Sparişini en kısa sürede teslim etmek için yola çıkıyoruz.
            </p>
            
          </div>
         
        </div>


     
      </div>
    </div>
  );
};

export default Steps;
