import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/component/auth/context/Authcontex";
import Authpage from "@/pages/authpage";

const HomePage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, router]);

  return (
    // <div className="min-h-screen flex items-center justify-center ">
    //   <div className=" shadow-md rounded-lg p-8 w-full max-w-md text-center">
    //     <h1 className="text-2xl font-bold text-gray-800 mb-4">
    //       Welcome to the App
    //     </h1>
    //     <p className="text-gray-600 mb-6">
    //       Please log in or sign up to continue.
    //     </p>
    //     <div className="space-y-4">
    //       <button
    //         onClick={() => handleNavigation("/auth/login")}
    //         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
    //       >
    //         Log In
    //       </button>
    //       <button
    //         onClick={() => handleNavigation("/auth/signup")}
    //         className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
    //       >
    //         Sign Up
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <Authpage />
  );
};

export default HomePage;
