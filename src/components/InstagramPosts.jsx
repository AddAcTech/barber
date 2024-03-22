import React from "react";

function InstagramPosts() {
  return (
    <div className="w-fit md:border rounded-md mx-auto my-4">
      <p className="text-red-600 font-bold text-3xl text-center">
        Siguenos en Instagram!
      </p>
      <div className="flex flex-wrap justify-center gap-2 p-4">
        <div className="bg-[#202020] w-[200px] h-[200px] rounded-md"></div>
        <div className="bg-[#202020] w-[200px] h-[200px] rounded-md"></div>
        <div className="bg-[#202020] w-[200px] h-[200px] rounded-md"></div>
      </div>
      <div className="bg-red-600 w-10 h-10 mx-auto"></div>
    </div>
  );
}

export default InstagramPosts;
