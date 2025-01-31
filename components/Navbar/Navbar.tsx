"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { signOutUser } from "@/lib/actions/user.actions";
import { useUser } from "@/context/UserContext";
const Navbar = () => {
  const { user } = useUser();

  const [loading, setLoading] = useState(true);

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className=" ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/#" className="flex items-center rtl:space-x-reverse">
          <Box
            fontSize={{
              xs: "18px",
              sm: "24px",
              md: "24px",
              lg: "24px",
              xl: "24px",
            }}
            fontWeight="600"
            color="#222222"
          >
            <span className="self-center font-semibold space-nowrap dark:text-black ">
              Crib.
            </span>
          </Box>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-  md:dark:bg--900 ">
            {/* Other menu items */}
            <li>{user ? user.fullName : "Not Signed In"}</li>
            <li>
              <a
                href="#"
                className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text- md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            {/* Other navigation items */}

            <li>
              <a
                href="/sign-in"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text- md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text- md:dark:hover:bg-transparent"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/sign-up"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text- md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text- md:dark:hover:bg-transparent"
              >
                Sign-Up
              </a>
            </li>
            <li>
              <a
                href="/sign-up"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text- md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text- md:dark:hover:bg-transparent"
              >
                <button onClick={handleSignOut}>Sign Out</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
