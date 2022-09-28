import React from 'react';

const Activity = ({ activity }) => {
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: '100%', height: '100%' }}>
        <img src={activity.img} fluid className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{activity.activityName}</h5>
          <p className="card-text">Time required: {activity.timeRequired}</p>
          <a href="#" className="btn btn-success w-100">
            Add to list
          </a>
        </div>
      </div>
    </div>
  );
};

export default Activity;
