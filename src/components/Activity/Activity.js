import React from 'react';

const Activity = ({ activity, handleAddToList }) => {
  const { img, activityName, timeRequired } = activity;

  return (
    <div className="col-md-4">
      <div className="card" style={{ width: '100%', height: '100%' }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{activityName}</h5>
          <p className="card-text fw-semibold">
            Time required: {timeRequired}hrs
          </p>
          <a
            href="#"
            className="btn btn-success w-100"
            onClick={() => {
              handleAddToList(timeRequired);
            }}
          >
            Add to list
          </a>
        </div>
      </div>
    </div>
  );
};

export default Activity;
