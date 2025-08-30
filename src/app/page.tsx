import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <div className="xl:px-20 md:px-15 px-5 xl:mt-10 lg:mt-20 sm:mt-10 mt-15">
        <div className="flex justify-between">
          {/* les text et le boutton*/}
          <div className="xl:w-1/2 lg:w-full md:w-full w-full flex flex-col gap-10">
            {/* le message */}
            <div className="flex flex-col gap-5 md:z-20">
              <h1 className="up xl:text-6xl lg:text-6xl md:text-4xl text-2xl xl:text-left lg:text-center md:text-center sm:text-center text-center md:block">
                generate professional <span className="text-accent">Gmail</span>{" "}
                and <span className="text-accent">outlook</span> signatures
              </h1>
              <p className="up xl:text-xl lg:text-xl md:text-lg text-md xl:text-left lg:text-center md:text-center sm:text-center text-left">
                Create your free electronic signature with our easy-to-use
                signature generator
              </p>
            </div>
            {/* le call to action */}
            <div>
              <Link
                href={"/generator"}
                className="zoom text-xl btn btn-accent xl:px-5 lg:px-5 md:px-3 px-3 py-7 xl:w-1/2 lg:w-full md:w-full w-full rounded-lg"
              >
                Generate my signature
              </Link>
            </div>
          </div>
          {/* les images */}
          <div className="relative md:flex hidden">
            <Image
              src={"/sign1.jpg"}
              className="rounded-xl zoom fixed xl:flex lg:hidden md:hidden right-50 bottom-100"
              width={500}
              height={500}
              alt={""}
            ></Image>
            <Image
              src={"/sign2.jpg"}
              className="rounded-xl zoom fixed xl:flex lg:hidden md:hidden right-30 bottom-30"
              width={500}
              height={500}
              alt={""}
            ></Image>
            <Image
              src={"/sign3.jpg"}
              className="rounded-xl zoom fixed xl:flex lg:hidden md:hidden right-5 bottom-70"
              width={500}
              height={500}
              alt={""}
            ></Image>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
