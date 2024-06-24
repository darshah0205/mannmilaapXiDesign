import React, { useEffect, useState } from "react";
import { getCurrentUserDetails, logOut } from "../../../utils/userDetails";

const Landing = () => {
  const [userInfo, setUserInfo] = useState(false);

  const getDetails = async () => {
    try {
      const user = await getCurrentUserDetails();
      if (!user) {
        window.location.href = "/login";
      } else {
        setUserInfo(user.data.user);
      }
    } catch (error) {
      console.log(error);
      logOut();
      window.location.href = "/login";
    }
  };

  useEffect(() => {
    getDetails();
  }, []);
  return <div>{JSON.stringify(userInfo)}</div>;
};

export default Landing;
