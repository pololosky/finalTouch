"use client";
import { saveUserData } from "@/utils/database";
import { UserButton, useUser } from "@clerk/nextjs";
import { List } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

const NavBar = () => {
  // Récupération des informations de l'utilisateur
  const { user } = useUser();
  const userName = user?.fullName;
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  // la fonction
  const handleSaveUser = async () => {
    if (userName && userEmail) {
      await saveUserData(userEmail, userName);
    }
  };
  // le useEffect
  useEffect(() => {
    handleSaveUser();
  }, [user]);

  return (
    <div className="xl:px-20 md:px-15 px-5 md:py-5 py-2">
      <div className="flex justify-between items-center">
        {/* gauche */}
        <div>
          <Link href={"/"}>
            <p className="md:text-4xl text-2xl font-bold italic">
              Final<span className="text-accent">Touch</span>
            </p>
          </Link>
        </div>
        {/* centre */}
        {/* <div>
          <Link href={"/test"} className="btn btn-accent">
            test
          </Link>
        </div> */}
        {/* droite */}
        <div>
          {user ? (
            <div className="flex justify-center items-center gap-3">
              <p className="xl:flex lg:flex md:flex hidden">{userName}</p>
              <UserButton />
            </div>
          ) : (
            <div>
              <div className="xl:flex lg:flex md:flex hidden justify-between items-center gap-3">
                <Link
                  className="btn rounded-lg xl:w-40 lg:w-40 md:w-40 sm:w-40 w-fit"
                  href={"/sign-in"}
                >
                  Sign In
                </Link>
                <Link
                  className="btn btn-accent rounded-lg xl:w-40 lg:w-40 md:w-40 sm:w-40 w-fit"
                  href={"/sign-up"}
                >
                  Sign Up
                </Link>
              </div>
              {/* les buttons */}
              <div className="xl:hidden lg:hidden md:hidden flex ">
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-accent rounded-lg m-1">
                    <List className="w-5" />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <Link href={"sign-in"}>Sign-in</Link>
                    </li>
                    <li>
                      <Link href={"sign-up"}>Sign-up</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default NavBar;
