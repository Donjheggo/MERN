import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Loader from "../components/Loader";

import { createGoal, getGoals, reset } from "../features/goals/goalSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(
    (state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { text } = Object.fromEntries(formData.entries());
    try {
      dispatch(createGoal({ user, text: text }));
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleEdit = async () => {
    console.log("edit")
  }

  const handleDelete = async () => {
    console.log("delete")
  }

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getGoals());
    return () => {
      dispatch(reset);
    };
  }, [user, navigate, isError, message, dispatch]);

  const goalElements = 
    goals.length 
    ? (goals.map((goal) => (
          <GoalItem 
            key={goal._id}
            text={goal.text}
            date={goal.createdAt}
            edit={handleEdit}
            delete={handleDelete}
          />
        ))
      ) 
    : (<p>No goals added</p>);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h3 className="text-center">Goals Dashboard</h3>
      <div>
        <GoalForm handleSubmit={handleSubmit} />
        <div className="row container-fluid mt-3">
          {goalElements}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
