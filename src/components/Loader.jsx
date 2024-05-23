import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary z-[100]">
      <div className="flex gap-5 text-6xl font-semibold sm:text-4xl">
        <h1 className="text-secondary b">Bijoy</h1>
        <h1 className="text-tertiary c">Chowdhury</h1>
      </div>
    </div>
  );
};

export default Loader;
