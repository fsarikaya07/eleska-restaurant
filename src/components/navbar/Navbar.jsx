import { Link } from "react-router-dom";

import { GiShoppingCart } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import "../../styles.css";

const Navbar = () => {
  const sideBarMenü = ["Menü", "Hakkında", "Giriş yap", "Üye Ol", "İletişim"]; 
  
  return (
    <>
      <nav className="fixed p-7 top-0 z-50 w-full bg-[#E12A32] border-b border-gray-200 flex-wrap">
        <div className=" flex-wrap ">
          <div className="flex items-center justify-between flex-wrap gap-x-2 gap-y-2   ">
            <div className="flex items-center justify-start gap-x-6 ">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-1 text-sm text-white rounded-lg hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden "
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>

              <div className="flex w-full ">
                <a href="">
                  {/* <img
                  src="https://w7.pngwing.com/pngs/472/743/png-transparent-chef-s-uniform-hat-toque-lady-chef-chef-s-uniform-hat-toque.png"
                  className="h-8 w-full  "
                  alt="FlowBite Logo"
                /> */}
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                    DOLGE VİTA
                  </span>
                </a>
              </div>
            </div>

            <div className="xs:w-[8rem] sm:w-[9rem] md:w-[15rem] relative down-icon text-white text-2xl">
              <CiLocationOn className="absolute xs:left-0 sm:left-1 top-1 text-2xl text-white  " />

              <select
                id="underline_select"
                className="block py-1 w-full text-md  bg-transparent border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-gray-400 peer text-center "
              >
                <option selected className="text-black ">
                  
                  Ev Adresim
                </option>
                <option value="FR" className="text-black ">
                  İş Adresim
                </option>
                <option value="US" className="text-black ">
                  Diğer
                </option>
              </select>
            </div>

            <div className="flex items-center">
              <div className="flex gap-6 items-center">
                <div className="sm:hidden lg:flex gap-6 text-white text-2xl  ">
                  {sideBarMenü.map((items)=>(
                      <Link>{items}</Link>
                  ))}
                
                  
                </div>
                
                <div className=" relative text-white  " role="button">                  
                  <GiShoppingCart className="text-3xl" />
                  <span className="absolute bottom-5 left-6 text-[0.75rem] font-thin">
                    0
                  </span>
                </div>
                <div className="xs:hidden lg:block">
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 "
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className=" z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow "
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 " role="none">
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate "
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[55px]"></div>
      <aside
        id="logo-sidebar"
        className="bg-[#E12A32] lg:hidden fixed top-10
         z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-gray-200  "
        aria-label="Sidebar"
      >
        <div className="  h-full px-3  overflow-y-auto bg-[#E12A32]">
          <ul className="space-y-2 font-medium ">
            {sideBarMenü.map((e)=>( <li>
              <a
                href="#"
                className="flex items-center p-2 text-white  rounded-lg hover:bg-gray-100   hover:text-[#E12A32]"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">{e}</span>
              </a>
            </li>))}
           
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
