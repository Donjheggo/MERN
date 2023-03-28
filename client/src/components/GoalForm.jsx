import React from 'react'

const GoalForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <input name="text" type="text" className='goal-input rounded' placeholder='text'/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default GoalForm;