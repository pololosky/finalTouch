import CreateSignature from "@/components/CreateSignature";
import Wrapper from "@/components/Wrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <div className="md:px-20 px-5">
        <div>
          <CreateSignature />
        </div>
      </div>
    </Wrapper>
  );
};

export default page;
