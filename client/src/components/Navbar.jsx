import { useEffect, useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="icons8-blockchain-200.png" alt="Block Logo" w={40} h={40} />
        <span>BlocDev SecOps</span>
      </Link>
    {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* Change Hamburger Icon */}
          <div className="flex flex-col gap-[5.4px]">
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open && "rotate-45"
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${
                open && "opacity-0"
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open && "-rotate-45"
              }`}
            ></div>
          </div>
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen bg-[#e3e3e3] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          {/* <Link to="/" onClick={()=>setOpen(false)}>Home</Link> */}
          <Link to="/posts?sort=trending" onClick={()=>setOpen(false)}>Trending</Link>
          <Link to="/posts?sort=popular" onClick={()=>setOpen(false)}>Most Popular</Link>
          <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
          {/* <Link to="/login" onClick={()=>setOpen(false)}>
            <button className="bg-black hover:bg-transparent text-white font-semibold hover:text-white py-2 px-3 border border-gray-600 hover:border-transparent rounded-full">
              Login
            </button>
          </Link> */}
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        {/* <Link to="/">Home</Link> */}
        <Link to="/posts?sort=trending">Trending</Link>
        <Link to="/posts?sort=popular">Most Popular</Link>
        <Link to="/about">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-3 border border-gray-600 hover:border-transparent rounded-full">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;