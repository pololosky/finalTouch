import Link from "next/link";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center flex-col">
        <Image src={"/notFound.svg"} height={300} width={300} alt="not-found" />
        <h1 className="text-3xl mt-3 mb-3 font-bold">Page not found</h1>
        <Link
          href={"/"}
          className="btn btn-accent rounded-lg w-full text-2xl font-bold"
        >
          Return
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
