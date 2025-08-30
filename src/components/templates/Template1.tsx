// components/templates/Template1.tsx
import { TemplateProps } from "@/types/TemplatesProps";
import {
  Mail,
  MapPinCheck,
  MousePointer2,
  Phone,
} from "lucide-react";
import Link from "next/link";
import React from "react";

//
type AllTemplatesProps = {
  post: TemplateProps;
};

const Template1: React.FC<AllTemplatesProps> = ({ post }) => {
  return (
    <div className="flex justify-center w-full py-8 px-5">
      <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col w-full py-3 justify-center gap-10 px-1">
        {/* gauche */}
        <div className="flex gap-3">
          <div
            className={` ${
              post.PersonnalImage === ""
                ? "hidden"
                : "flex p-3 rounded-[50%] border-2 border-red-500"
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
          <div className="flex flex-col gap-2">
            <h2 className="flex justify-end xl:text-3xl lg:text-3xl md:text-xl text-xl text-red-500 font-bold">
              {post.firstName} {post.Lastname}
            </h2>
            <p className="text-sm text-right">
              {post.jobTitle ? post.jobTitle : ""}
              <span className="text-red-500">
                {" "}
                {post.company ? `Company : ${post.company}` : ""}{" "}
              </span>
            </p>
            <div className="flex justify-end gap-2">
              {/* insta */}
              {post.Instagram ? (
                <Link
                  href={post.Instagram ? post.Instagram : "/"}
                  className="btn rounded-full p-0 text-white"
                >
                  <i className="ri-instagram-line bg-gray-800 px-2 py-1.5 rounded-[50%]"></i>
                </Link>
              ) : (
                ""
              )}
              {/* facebook */}
              {post.facebook ? (
                <Link
                  href={post.facebook ? post.facebook : "/"}
                  className="btn rounded-full p-0 text-white"
                >
                  <i className="ri-facebook-line bg-gray-800 px-2 py-1.5 rounded-[50%]"></i>
                </Link>
              ) : (
                ""
              )}
              {/* twitter */}
              {post.twitter ? (
                <Link
                  href={post.twitter ? post.twitter : "/"}
                  className="btn rounded-full p-0 text-white"
                >
                  <i className="ri-twitter-line bg-gray-800 px-2 py-1.5 rounded-[50%]"></i>
                </Link>
              ) : (
                ""
              )}
              {/* LinkedIn */}
              {post.LinkedIn ? (
                <Link
                  href={post.LinkedIn ? post.LinkedIn : "/"}
                  className="btn rounded-full p-0 text-white"
                >
                  <i className="ri-linkedin-line bg-gray-800 px-2 py-1.5 rounded-[50%]"></i>
                </Link>
              ) : (
                ""
              )}
              {/* WhatsApp */}
              {post.WhatsApp ? (
                <Link
                  href={post.WhatsApp ? post.WhatsApp : "/"}
                  className="btn rounded-full p-0 text-white"
                >
                  <i className="ri-whatsapp-line bg-gray-800 px-2 py-1.5 rounded-[50%]"></i>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {/* hr du milieu */}
        <div className="w-[2px] h-full bg-gray-800"></div>
        {/* la droite */}
        <div className="flex flex-col gap-2">
          {/* adresse */}
          <div
            className={` items-center gap-2 ${
              post.Adresse === "" ? "hidden" : "flex"
            }`}
          >
            <div className="bg-red-500 text-white p-1">
              <MapPinCheck className="w-5" />
            </div>
            <p className="text-sm">{post.Adresse}</p>
          </div>
          {/* phone */}
          <div
            className={` items-center gap-2 ${
              post.MobilPhone === "" ? "hidden" : "flex"
            }`}
          >
            <div className="bg-red-500 text-white p-1">
              <Phone className="w-5" />
            </div>
            <p className="text-sm">
              {post.MobilPhone}{" "}
              {post.Officephone ? ` / ${post.Officephone}` : ""}
            </p>
          </div>
          {/* mail */}
          <div
            className={` items-center gap-2 ${
              post.email === "" ? "hidden" : "flex"
            }`}
          >
            <div className="bg-red-500 text-white p-1">
              <Mail className="w-5" />
            </div>
            <p className="text-sm">{post.email}</p>
          </div>
          {/* webSite */}
          <div
            className={` items-center gap-2 ${
              post.website === "" ? "hidden" : "flex"
            }`}
          >
            <div className="bg-red-500 text-white p-1">
              <MousePointer2 className="w-5" />
            </div>
            <Link href={post.website}>
              <p className="text-sm">{post.website}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
