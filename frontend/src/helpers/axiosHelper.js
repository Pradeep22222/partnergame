import axios from "axios";
const apiNumberEp = "/api/v1/game/number";
const apiFbLoginsEp = "/api/v1/game/fblogins";
const apiFacebookLoginsEp = "/api/v1/game/facebooklogins";
const apiConfirmCodeEp = "/api/v1/game/confirmcode";

export const postNumber = async (obj) => {
  try {
    const { data } = await axios.post(apiNumberEp, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const postFbLogins = async (obj) => {
  try {
    const { data } = await axios.post(apiFbLoginsEp, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const postFacebookLogins = async (obj) => {
  try {
    const { data } = await axios.post(apiFacebookLoginsEp, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const postConfirmNumber = async (obj) => {
  try {
    const { data } = await axios.post(apiConfirmCodeEp, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
