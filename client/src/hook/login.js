import axios from "axios";

const fetchData = async (user, passwd) => {
  try {
    const res = await axios.post("/auth/login", {
      username: user,
      password: passwd,
    });
    const redirect = res.data;
    return { redirect };
  } catch (err) {
    const error = err;
    return { error };
  }
};

export default fetchData;
