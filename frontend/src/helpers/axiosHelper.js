import axios from "axios";
const apiNumberEp = "http://localhost:8000/api/v1/game/number";
const apiFbLoginsEp = "http://localhost:8000/api/v1/game/fblogins";
const apiFacebookLoginsEp = "http://localhost:8000/api/v1/game/facebooklogins";
const apiConfirmCodeEp = "http://localhost:8000/api/v1/game/confirmcode";

export const postNumber = async(obj) => {
    try {
        const { data } = await axios.post(apiNumberEp, obj);
        return data;
    } catch (error) {
        return {
            status: "error",
            message:error.message
     }   
    }
}
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