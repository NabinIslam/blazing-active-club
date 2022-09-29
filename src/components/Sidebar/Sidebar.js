import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DisplayPicture from '../../images/profile picture.jpg';

const Sidebar = ({ activityTime }) => {
  console.log(activityTime);
  let totalActivityTime = 0;
  for (const currentTime of activityTime) {
    totalActivityTime = totalActivityTime + parseFloat(currentTime);
  }

  const pauses = [
    { id: 1, time: 1 },
    { id: 2, time: 2 },
    { id: 3, time: 3 },
    { id: 4, time: 4 },
  ];

  const [breakTime, setBreakTime] = useState(0);

  const handleBreakTime = pauseTime => {
    setBreakTime(pauseTime);
    localStorage.setItem('break-time', pauseTime);
  };

  const notify = () => toast("Congratulation you're done");

  return (
    <div className="bg-muted h-100 p-5" style={{ background: '#f5f5f5' }}>
      <div className="row bg-white p-4 mb-4 rounded-5 shadow">
        <div className="d-flex align-items-center">
          <img src={DisplayPicture} width={70} height={70} alt="" />
          <div className="ms-3 d-flex flex-column justify-content-center">
            <h3>Nabin Islam</h3>
            <p>
              <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> Dhaka,
              Bangladesh
            </p>
          </div>
        </div>
      </div>
      <div className="row bg-white p-4 rounded-5 shadow">
        <div className="col text-center">
          <h3>49kg</h3>
          <p>Weight</p>
        </div>
        <div className="col text-center">
          <h3>5.9</h3>
          <p>Height</p>
        </div>
        <div className="col text-center">
          <h3>23yrs</h3>
          <p>Age</p>
        </div>
      </div>
      <h4 className="mt-3">Add a break</h4>
      <div className="row text-center bg-white p-4 rounded-5 shadow">
        {pauses.map(pause => (
          <div className="col" key={pause.id}>
            <button
              className="btn btn-primary border-0 rounded-5 p-2 shadow"
              onClick={() => {
                handleBreakTime(pause.time);
              }}
            >
              {pause.time}hrs
            </button>
          </div>
        ))}
      </div>
      <h4 className="mt-3">Activity Details</h4>
      <div className="d-flex align-items-center justify-content-between p-4 bg-white rounded-5 my-4 shadow">
        <h5>Activity time</h5>
        <h5 className="fw-light">{totalActivityTime}hrs</h5>
      </div>
      <div className="d-flex align-items-center justify-content-between p-4 bg-white rounded-5 my-4 shadow">
        <h5>Break time</h5>
        <h5 className="fw-light">{localStorage.getItem('break-time')}hrs</h5>
      </div>
      <button
        className="btn btn-primary w-100 py-3 shadow rounded-4 fs-5"
        onClick={notify}
      >
        Activity completed
      </button>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Sidebar;
