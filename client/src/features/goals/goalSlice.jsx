import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get user Goals
export const getGoals = createAsyncThunk(
    "goals/getAll", 
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await goalService.getGoals(token);
        } catch (err) {
            const message =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();
            return thunkAPI.rejectWithValue(message);
        }
});

// Create user Goal
export const createGoal = createAsyncThunk(
  "goal/create",
    async (goalData, thunkAPI) => {
        try {
          const token = thunkAPI.getState().auth.user.token
          return await goalService.createGoal(goalData, token);
        } catch (err) {
        const message =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();
        return thunkAPI.rejectWithValue(message);
        }
  }
);

// // Update Goal
// export const updateGoal = createAsyncThunk(
//     "goal/update", 
//     async (goalData, goal_id, thunkAPI) => {
//         try {
//             return await goalService.updateGoal(goalData, goal_id)
//         } catch (err) {
//             const message =
//             (err.response && err.response.data && err.response.data.message) ||
//             err.message ||
//             err.toString();
//         return thunkAPI.rejectWithValue(message);
//         }
// });


// // Delete Goal
// export const deleteGoal = createAsyncThunk(
//     "goal/delete", 
//     async (goal_id, thunkAPI) => {
//   try {
//     return await goalService.deleteGoal(goal_id)
//   } catch (err) {
//     const message =
//             (err.response && err.response.data && err.response.data.message) ||
//             err.message ||
//             err.toString();
//         return thunkAPI.rejectWithValue(message);
//   }
// });


export const goalSlice = createSlice({
    name: "goals",
    initialState,
    reducers: {
      reset: (state) => initialState
    },
    extraReducers: (builder) => {
      builder
        .addCase(getGoals.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getGoals.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.goals = action.payload;
        })
        .addCase(getGoals.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })

        .addCase(createGoal.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(createGoal.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.goals.push(action.payload);
        })
        .addCase(createGoal.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })

        // .addCase(updateGoal.pending, (state) => {
        //     state.isLoading = true;
        // })
        // .addCase(updateGoal.fulfilled, (state, action) => {
        //   state.isLoading = false;
        //   state.isSuccess = true;
        //   state.goals = action.payload;
        // })
        // .addCase(updateGoal.rejected, (state, action) => {
        //   state.isLoading = false;
        //   state.isError = true;
        //   state.message = action.payload;
        // })

        // .addCase(deleteGoal.pending, (state) => {
        //   state.isLoading = true;
        // })
        // .addCase(deleteGoal.fulfilled, (state, action) => {
        //   state.isLoading = false;
        //   state.isSuccess = true;
        //   state.goals.pop(action.payload);
        // })
        // .addCase(deleteGoal.rejected, (state, action) => {
        //   state.isLoading = false;
        //   state.isError = true;
        //   state.message = action.payload;
        // })  
    },
  });
  
  export const { reset } = goalSlice.actions;
  export default goalSlice.reducer;