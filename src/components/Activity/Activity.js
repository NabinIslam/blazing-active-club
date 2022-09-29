import React from 'react';

const Activity = ({ activity, handleAddToList }) => {
  const { img, activityName, timeRequired } = activity;

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
      <div className="card shadow" style={{ width: '100%', height: '100%' }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{activityName}</h5>
          <p className="card-text fw-semibold">
            Time required: {timeRequired}hrs
          </p>
          <button
            className="btn btn-success w-100"
            onClick={() => {
              handleAddToList(timeRequired);
            }}
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
