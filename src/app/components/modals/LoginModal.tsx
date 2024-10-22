"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modals";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const content = (
    <>
      {/* <h2 className="mb-6 text-2xl">Welcome to Djangobnb, Please login</h2> */}
      <form className="space-y-4 ">
        <input
          placeholder="Your email address"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <input
          placeholder="Your password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The error message
        </div>
        <CustomButton label="submit" onClick={() => console.log("test")} />
      </form>
    </>
  );
  return (
    <div>
      <Modal
        isOpen={loginModal.isOpen}
        close={loginModal.close}
        label="Log in"
        content={content}
      />
    </div>
  );
};

export default LoginModal;
