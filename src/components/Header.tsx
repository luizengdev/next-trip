"use client";

import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const { status, data } = useSession();

  const handleLoginClick = () => signIn();

  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  const handleMyTripsClick = () => {
    setMenuIsOpen(false);
    window.location.href = "/my-trips";
  };

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" width={50} height={50} alt="Logo" />
          <h1 className="text-primary text-xl font-semibold">Next Trip</h1>
        </div>
      </Link>

      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3 relative">
          <AiOutlineMenu
            size={16}
            onClick={handleMenuClick}
            className="cursor-pointer"
          />

          <Image
            height={35}
            width={35}
            src={data.user.image!}
            alt={data.user.name!}
            className="rounded-full shadow-md"
          />

          {menuIsOpen && (
            <div className="z-50 absolute top-14 left-0 w-full h-[110px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <Link href="/my-trips" onClick={() => setMenuIsOpen(false)}>
                <button className="text-primaryDarker hover:text-primary text-xs font-semibold pb-2">
                  Minhas viagens
                </button>
              </Link>
              <Link href="/my-favorites" onClick={() => setMenuIsOpen(false)}>
                <button className="text-primaryDarker hover:text-primary text-xs font-semibold pt-1 pb-2 border-y border-grayLighter border-solid">
                  Favoritos
                </button>
              </Link>

              <button
                className="text-primaryDarker hover:text-primary text-xs font-semibold pt-1"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
