import { TemplateProps } from "@/types/TemplatesProps";
import { CircleFadingPlus, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

//
type AllTemplatesProps = {
  post: TemplateProps;
};

const Template3: React.FC<AllTemplatesProps> = ({ post }) => {
  return (
    <div className="flex justify-between items-center px-10 py-5 w-full">
      <div className="flex flex-col h-full gap-5 ">
        {/* les infos */}
        <div>
          <p className={`${post.jobTitle ? "flex text-sm" : "hidden"}`}>
            {" "}
            {post.jobTitle}{" "}
          </p>
          <h1 className="text-3xl">
            <span className={`${post.firstName ? "flex" : "hidden"}`}>
              {post.firstName}
            </span>
            <span className={`${post.Lastname ? "flex font-bold" : "hidden"}`}>
              {post.Lastname}
            </span>
          </h1>
          <p className={`${post.Departement ? "flex text-sm" : "hidden"}`}>
            {" "}
            Departement of {post.Departement}
          </p>
        </div>
        {/* the links */}
        <div className="flex gap-1 items-center">
          {/* insta */}
          {post.Instagram ? (
            <Link
              href={post.Instagram}
              className="btn rounded-full p-0 text-white"
            >
              <i className="ri-instagram-line bg-yellow-400 px-2 py-1.5 rounded-[50%]"></i>
            </Link>
          ) : (
            ""
          )}
          {/* facebook */}
          {post.facebook ? (
            <Link
              href={post.facebook}
              className="btn rounded-full p-0 text-white"
            >
              <i className="ri-facebook-fill bg-yellow-400 px-2 py-1.5 rounded-[50%]"></i>
            </Link>
          ) : (
            ""
          )}
          {/* twitter */}
          {post.twitter ? (
            <Link
              href={post.twitter}
              className="btn rounded-full p-0 text-white"
            >
              <i className="ri-twitter-fill bg-yellow-400 px-2 py-1.5 rounded-[50%]"></i>
            </Link>
          ) : (
            ""
          )}
          {/* LinkedIn */}
          {post.LinkedIn ? (
            <Link
              href={post.LinkedIn}
              className="btn rounded-full p-0 text-white"
            >
              <i className="ri-linkedin-fill bg-yellow-400 px-2 py-1.5 rounded-[50%]"></i>
            </Link>
          ) : (
            ""
          )}
          {/* WhatsApp */}
          {post.WhatsApp ? (
            <Link
              href={post.WhatsApp}
              className="btn rounded-full p-0 text-white"
            >
              <i className="ri-whatsapp-line bg-yellow-400 px-2 py-1.5 rounded-[50%]"></i>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      {/*  */}
      <div className="h-38">
        <div
          className={` ${
            post.PersonnalImage === ""
              ? "hidden"
              : "flex p-3 rounded-[50%] h-full bg-yellow-400"
          }`}
        >
          <img
            src={post.PersonnalImage === "" ? "/" : post.PersonnalImage}
            alt={"image"}
            width={120}
            height={120}
            className="rounded-[50%]"
          />
        </div>
      </div>
      {/* adresse */}
      <div className="">
        <div className={`${post.Adresse ? "flex flex-col" : "hidden"}`}>
          <p className="text-sm">Address : </p>
          <p className="text-sm">{post.Adresse}</p>
        </div>
        <hr className="h-1 w-full text-yellow-400 bg-yellow-400" />
        <div>
          <p className="text-sm flex gap-1">
            Tel :{" "}
            <span className={`${post.MobilPhone ? "flex" : "hidden"}`}>
              {post.MobilPhone}
            </span>
            <span className={`${post.Officephone ? "flex" : "hidden"}`}>
              / {post.Officephone}
            </span>
          </p>
          <p className={`${post.email ? "flex text-sm" : "hidden"}`}>
            Email : {post.email}
          </p>
          <p className={`${post.website ? "flex text-sm gap-1" : "hidden"}`}>
            website :{" "}
            <Link href={post.website} className="underline">
              {post.website}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template3;
