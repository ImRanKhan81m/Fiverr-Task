import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../../Asset/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWishlist, setIsOpenWishlist] = useState(false);
  const natigate = useNavigate();

  // const [isOpen, setIsOpen] = React.useState(false);
  // use for open cart drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* ------top small menu------------------ */}
      <div className="py-2 hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-2  mid-container mx-auto text-xs  px-2">
          <div>
            <p>Please Call us to check the Stock before Placing the order!</p>
          </div>
          <div>
            <ul className="flex justify-end gap-2">
              <li>
                <a
                  href="#"
                  className="px-8 inline-block border-r-2 border-slate-300"
                >
                  Call: 09678-300400
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-8 inline-block border-r-2 border-slate-300"
                >
                  FB Page
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-8 inline-block border-r-2 border-slate-300"
                >
                  FB Group{" "}
                </a>
              </li>
              <li>
                <a href="#" className="pl-8 inline-block">
                  Pay Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* --------------------main navbar------------------------ */}
      <div className="sticky top-0 z-[15]">
        <div className="bg-primary ">
          <div className="navbar mid-container mx-auto">
            <div className="navbar-start  hidden lg:flex w-[25%]">
              <div className="w-16 overflow-hidden py-2">
                <img
                    src={logo}
                    alt="logo"
                  className="rounded-full object-cover"
                  onClick={() => { natigate("/")}}
                  />
              </div>
              <h1 className="ml-2 text-xl font-bold text-white">E-Commerce</h1>
            </div>
            {/* ------serachbar center-------- */}
            <div className="navbar-center block lg:flex justify-center items-center lg:w-[55%] w-full">
              <div className="form-control w-full">
                <div className="input-group input-group-md">
                  <input
                    type="text"
                    placeholder="I am looking for...."
                    className="input input-bordered input-md block w-full h-10"
                    style={{ outline: "none" }}
                  />
                  <button className="btn btn-square btn-sm bg-white border-none hover:bg-secondary h-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="navbar-end text-end w-[20%] lg:block hidden">
              <div className="flex justify-end gap-3">
                {/* --------------wishilist--------------------------- */}
                <div className="dropdown dropdown-end">
                  <label
                    
                    tabIndex={0}
                    className="btn btn-ghost btn-circle hover:bg-primary"
                  >
                    <div className="indicator">
                      <AiOutlineHeart className="text-white" size={28} />
                      <span className="badge badge-sm indicator-item">
                        0
                      </span>
                    </div>
                  </label>
                </div>
                {/* -------------------------cart box----------------------- */}
                <div className="dropdown dropdown-end ">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle hover:bg-primary"
                    onClick={toggleDrawer}
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">
                        0
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    
    </>
  );
};

export default Navbar;
