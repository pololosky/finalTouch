import React from "react";

const loading = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center flex-col">
        <h1 className="text-3xl mt-3 mb-3 font-bold">Chargement de la page</h1>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    </div>
  );
};

export default loading;
