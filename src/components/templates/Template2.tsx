import { TemplateProps } from "@/types/TemplatesProps";
import React from "react";
import {
  CircleFadingPlus,
  Facebook,
  Linkedin,
  Mail,
  MapPinCheck,
  MousePointer2,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

//
type AllTemplatesProps = {
  post: TemplateProps;
};

const Template2: React.FC<AllTemplatesProps> = ({ post }) => {
  return (
    <div className="flex gap-10 py-8 px-5 w-full">
      <div
        className={`${post.LogoImage === "" ? "hidden" : "flex"} pt-2 h-full`}
      >
        <img
          src={post.LogoImage === "" ? "/" : post.LogoImage}
          alt={"image"}
          width={130}
          height={130}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col w-2/3 gap-3">
        {/* textes */}
        <div>
          <h1 className="flex gap-2 xl:text-4xl lg:text-4xl md:text-2xl text-2xl text-gray-600 font-bold">
            {" "}
            {post.firstName} {post.Lastname}{" "}
          </h1>
          <div>
            <p className="flex gap-2 justify-start text-xl text-right text-green-700">
              {post.jobTitle} {post.company ? `at ${post.company}` : ""}
            </p>
            <p className="flex gap-2 justify-start text-xl text-right text-green-700">
              {post.Departement ? `Departement of ${post.Departement}` : ""}
            </p>
          </div>
        </div>
        <hr className="text-gray-500" />
        {/* les infos */}
        <div className="grid grid-cols-2 gap-x-15 gap-y-3">
          <div className={`flex`}>
            <div
              className={`${
                post.Officephone ? "flex gap-4 items-center" : "hidden"
              }`}
            >
              <Phone className="w-5" />
              <p className="flex gap-2 text-sm">
                {post.Officephone}
                <span className={`${post.MobilPhone ? "flex" : "hidden"}`}>
                  {" "}
                  {`/${post.MobilPhone}`}{" "}
                </span>
              </p>
            </div>
          </div>
          <div className={`flex`}>
            <div
              className={`${
                post.website ? "flex gap-4 items-center" : "hidden"
              }`}
            >
              <MousePointer2 className="w-5" />
              <p className="flex gap-2">{post.website}</p>
            </div>
          </div>
          <div className={`flex`}>
            <div
              className={`${post.email ? "flex gap-4 items-center" : "hidden"}`}
            >
              <Mail className="w-5" />
              <Link href={`mailto:${post.email}`}>{post.email}</Link>
            </div>
          </div>
          <div className={`flex`}>
            <div
              className={`${
                post.Adresse ? "flex gap-4 items-center" : "hidden"
              }`}
            >
              <MapPinCheck className="w-5" />
              <p className="flex gap-2">{post.Adresse}</p>
            </div>
          </div>
        </div>
        <hr className="text-gray-500" />
        <div>
          <div className="flex justify-start gap-2">
            {/* insta */}
            {post.Instagram ? (
              <Link
                href={post.Instagram}
                className="btn rounded-full p-2 text-white bg-green-700"
              >
                <CircleFadingPlus />
              </Link>
            ) : (
              ""
            )}
            {/* facebook */}
            {post.facebook ? (
              <Link
                href={post.facebook}
                className="btn rounded-full p-2 text-white bg-green-700"
              >
                <Facebook className="w-5" />
              </Link>
            ) : (
              ""
            )}
            {/* twitter */}
            {post.twitter ? (
              <Link
                href={post.twitter}
                className="btn rounded-full p-2 text-white bg-green-700"
              >
                <Twitter className="w-5" />
              </Link>
            ) : (
              ""
            )}
            {/* LinkedIn */}
            {post.LinkedIn ? (
              <Link
                href={post.LinkedIn}
                className="btn rounded-full p-2 text-white bg-green-700"
              >
                <Linkedin className="w-5" />
              </Link>
            ) : (
              ""
            )}
            {/* WhatsApp */}
            {post.WhatsApp ? (
              <Link
                href={post.WhatsApp}
                className="btn rounded-full p-2 text-white bg-green-700"
              >
                <CircleFadingPlus />
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
