import React, {useEffect} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import GoalForm from '../components/GoalForm';
import Loader from "../components/Loader";

import { createGoal } from "../features/goals/goalSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {text} = Object.fromEntries(
      formData.entries()
    );
    console.log(user, text)
    try{
      dispatch(createGoal({user, text: text}))
    }catch(err){
      toast.error(err.message);
    }
  }

  useEffect( () => {
    if(!user){
      navigate("/login") 
    }
  }, [user, navigate])


  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className='heading text-center'>
        <p>Welcome {user && user.name}</p>
        <p>Goals Dashboard</p>
        <div>
          <GoalForm handleSubmit={handleSubmit} />
        </div>
      </section>
    </>
  )
}

export default Dashboard