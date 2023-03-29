import axios from "axios";

const Goal_API = "/api/v1/goals";

// Get Goal
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  try {
    const response = await axios.get(Goal_API, config);
    return response.data
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// Create Goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  try {
    const response = await axios.post(Goal_API, goalData, config);
    if (response.data) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// // Update Goal
// const updateGoal = async (goalData, id) => {
//   try {
//     const response = await axios.put(`${Goal_API}/${id}`, goalData);
//     if (response.data) {
//       return response.data;
//     }
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// };

// Delete Goal
const deleteGoal = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  try {
    const response = await axios.delete(`${Goal_API}/${id}`, config);
    if (response) {
      return response;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const goalService = {
  getGoals,
  createGoal,
  // updateGoal,
  deleteGoal,
};

export default goalService;
