import LogInForm from "@/component/auth/loginform";
import SignUpForm from "@/component/auth/signupform";
import { useState } from "react";

export default function Home() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative flex h-screen bg-gradient-to-r from-teal-400 to-teal-600">
      <div
        className={`absolute inset-y-0 ${
          isSignIn ? "left-0" : "right-0"
        } w-1/2 flex items-center justify-center bg-white shadow-xl transition-all duration-700 ease-in-out`}
      >
        <h2 className="text-4xl font-bold text-teal-600">
          {isSignIn ? "Welcome to Login" : "Welcome to Signup"}
        </h2>
      </div>
      <div
        className={`absolute inset-y-0 ${
          isSignIn ? "right-0" : "left-0"
        } w-1/2 flex items-center justify-center bg-white shadow-xl transition-all duration-700 ease-in-out`}
      >
        <div>
          {isSignIn ? (
            <>
              <LogInForm toggle={toggle} />
            </>
          ) : (
            <>
              <SignUpForm toggle={toggle} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
