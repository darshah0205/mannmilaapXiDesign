import axios from "axios";
import { url } from "./url";

export const getOneUserDetails = async (userEmail) => {
  try {
    const user = await axios.get(url + `/users/all?email=${userEmail}`);
    return user;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getAllUsers = async () => {
  try {
    const user = await axios.get(url + `/users/all`);
    return user;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getCurrentUserToken = async () => {
  if (localStorage.getItem("mannMilaapUserToken")) {
    const returnedToken = localStorage.getItem("mannMilaapUserToken");
    return returnedToken;
  } else return false;
};

export const getCurrentUserDetails = async () => {
  try {
    const userToken = await getCurrentUserToken();
    if (userToken) {
      const user = await axios.post(url + `/authorize`, {
        token: userToken,
      });
      console.log(user);
      return user;
    } else return false;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const logOut = async () => {
  localStorage.removeItem("mannMilaapUserToken");
};
