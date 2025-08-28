"use client";
import { saveUserData } from "@/utils/database";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, {useEffect } from "react";

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
    <div className="md:px-15 px-5 md:py-5 py-2">
      <div className="flex justify-between">
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
              <p>{userName}</p>
              <UserButton />
            </div>
          ) : (
            <div className="flex justify-between items-center gap-3">
              <Link className="btn rounded-lg w-40" href={"/sign-in"}>
                Sign In
              </Link>
              <Link
                className="btn btn-accent rounded-lg w-40"
                href={"/sign-up"}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default NavBar;
