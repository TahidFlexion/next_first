import { useRouter } from "next/router";
import React from "react";

function all() {
  const router = useRouter();

  const handleShallow = () => {
    router.replace("/about", undefined, { shallow: true });
  };
  return (
    <div className="text-center pt-10">
      <p className="text-3xl font-bold text-center py-5">pages functions</p>
      <p>getServerSideProps</p>
      <button
        className="bg-teal-600 p-2 px-4 rounded-md text-white"
        onClick={handleShallow}
      >
        Click
      </button>
    </div>
  );
}

export default all;
