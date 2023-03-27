import axios from "axios";

const Register_API = "http://127.0.0.1:3001/api/v1/users/register";

// Register user
const register = async (userData) => {
  const response = await axios.post(Register_API, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
};

export default authService;
