import React, { useState } from "react";
import Button from "./Button";

const LoginModal = ({ closeModal }: { closeModal: () => void }) => {
  const [isSignup, setIsSignup] = useState(false);
  const setSignup = () => setIsSignup(true);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white px-8 py-9 rounded-2xl sm:w-1/2 md:w-1/3 lg:w-1/4 border-2 border-black shadow-custom">
        <div className="flex items-center justify-between">
          {isSignup ? (
            <h2 className="text-2xl mb-4 bold">Sign up</h2>
          ) : (
            <h2 className="text-2xl mb-4 bold">Log in</h2>
          )}

          <button onClick={closeModal} className="mb-4">
            <img src="../../public/close.svg" alt="close button" />
          </button>
        </div>
        <form>
          <div className="mb-2 rounded-lg">
            <label className="text-xs font-semibold">User Name</label>
            <input
              type="username"
              className="w-full px-4 py-2 border-1.5 border-black rounded-lg text-sm h-[50px]"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label className="text-xs font-semibold">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border-1.5 border-black rounded-lg text-sm h-[50px]"
              placeholder="Enter your password"
            />
          </div>
          <Button className="w-full mt-4" variant="pink">
            {isSignup ? "Sign up" : "Log In"}
          </Button>
        </form>
        {isSignup ? (
          ""
        ) : (
          <div className="flex justify-center mt-4 gap-3">
            <p className="font-semibold">No account yet?</p>
            <button
              onClick={setSignup}
              className="font-semibold text-custom-right-blue hover:text-custom-dark-blue"
            >
              Create one
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
