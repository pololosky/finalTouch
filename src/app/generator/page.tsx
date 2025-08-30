import CreateSignature from "@/components/CreateSignature";
import Wrapper from "@/components/Wrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <div className="2xl:px-20 xl:px-15 lg:px-15 md:px-15 sm:px-5 px-5">
        <div>
          <CreateSignature />
        </div>
      </div>
    </Wrapper>
  );
};

export default page;
