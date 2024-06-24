import axios from "axios";
import { url } from "./url";

export const getAllGroups = async () => {
  try {
    const groups = await axios.get(url + "/groups/all?select=name");
    console.log(groups);
    if (groups) return groups;
    else return false;
  } catch (error) {
    return false;
  }
};

export const getGroupMembersByID = async (groupID) => {
  try {
    const groups = await axios.get(url + `/groups/all?_id=${groupID}`);
    console.log(groups);
    if (groups) return groups;
    else return false;
  } catch (error) {
    return false;
  }
};
