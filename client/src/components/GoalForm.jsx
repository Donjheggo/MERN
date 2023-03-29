import React from 'react'

const GoalForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input name="text" type="text" className='goal-input rounded form-control w-25' placeholder='Add Goal'/>
      <button className='btn btn-primary w-25 mt-2' type='submit'>Submit</button>
    </form>
  )
}

export default GoalForm;