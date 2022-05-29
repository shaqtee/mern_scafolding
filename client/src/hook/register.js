import axios from "axios";

const pullData = async ({ username, password, email }) => {
  try {
    const res = await axios.post("/auth/register", {
      username,
      password,
      email,
    });
    //console.log(res);
    return { res };
  } catch (error) {
    return { error };
  }
};

export default pullData;
