import React from "react";

const GoalItem = (props) => {
const formattedDate = new Date(props.date).toLocaleString()
  return (
    <div className="card col-lg-4 col-md-4 col-sm-12 shadow">
      <div className="card-header">{formattedDate}</div>
      <div className="card-body">{props.text}</div>
      <div className="card-footer">
        <button className="btn btn-secondary" onClick={props.edit}>
          Edit
        </button>
        <button className="ms-2 btn btn-warning" onClick={props.delete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default GoalItem;
