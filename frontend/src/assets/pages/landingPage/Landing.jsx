import React, { useEffect, useState } from "react";
import { getCurrentUserDetails, logOut } from "../../../utils/userDetails";
import { Link } from "react-router-dom";

const Landing = () => {
  const [userInfo, setUserInfo] = useState(false);

  // const getDetails = async () => {
  //   try {
  //     const user = await getCurrentUserDetails();
  //     if (!user) {
  //       window.location.href = "/login";
  //     } else {
  //       setUserInfo(user.data.user);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     logOut();
  //     window.location.href = "/login";
  //   }
  // };

  // useEffect(() => {
  //   getDetails();
  // }, []);

  return (
    <div className="h-[calc(100vh-70px)] p-4 flex flex-col items-center gap-5">
      <h1 className="text-3xl font-bold text-center">
        Welcome to <span className="text-[var(--orange)]">MannMilaap</span>
      </h1>
      <div className="instructions border-2 border-solid border-black rounded-2xl text-white overflow-hidden">
        <h1 className="bg-gray-500 rounded-t-xl p-4 font-bold text-center text-xl">
          This is a guide for the users
        </h1>
        <div className="p-4 bg-gray-800">
          <ul className="space-y-4">
            <li>If you are a new user, click on <Link to={"/register"} className="underline text-[var(--orange)]">Register</Link></li>
            <li>
              Once successfully registered, you will be provided with a password
            </li>
            <li>
              You can <Link to={"/login"} className="underline text-[var(--orange)]">login</Link> to your account using your registered email and
              provided password
            </li>
            <li>
              Changes to your profile can be made from the profile section
            </li>
            <li className="text-[var(--orange)]">Incase of forgetting the password, contact the admin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
