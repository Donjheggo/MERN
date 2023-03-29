import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateGoal } from "../features/goals/goalSlice";


const GoalItem = (props) => {
  const dispatch = useDispatch()
  const [text, setText] = useState(props.text)

  const handleChange = (e) => {
    const {value} = e.target
    setText(value)
  }

  const editSubmit = (e, id) => {
    e.preventDefault()
    // try{
    //   dispatch(updateGoal(id))
    // }catch(err){
    //   toast.error(err)
    // }
  }

  const formattedDate = new Date(props.date).toLocaleString()
  return (
    <div className="card col-lg-4 col-md-4 col-sm-12 shadow">
      <div className="card-header">{formattedDate}</div>
      <div className="card-body">{props.text}</div>
      <div className="card-footer">
        <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editModal">
          Edit
        </button>
        <button className="ms-2 btn btn-warning" onClick={props.delete}>
          Delete
        </button>
      </div>

    {/* MODAL */}
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={(e) => editSubmit(e, props.id)}>
              <div className="modal-body">
                <input name="text" className="form-control" value={text} onChange={handleChange}/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button className="btn btn-primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    {/* ENDMODAL */}

    </div>
  );
};

export default GoalItem;
