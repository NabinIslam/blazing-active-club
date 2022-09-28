import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import DisplayPicture from '../../images/profile picture.jpg';

const Sidebar = () => {
  return (
    <div className="bg-muted h-100 p-5" style={{ background: '#f5f5f5' }}>
      <div className="card mb-3" style={{ maxWidth: '100%' }}>
        <div className="row g-0">
          <div className="col-md-2">
            <img
              src={DisplayPicture}
              className="img-fluid rounded-start"
              width={100}
            />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">Nabin Islam</h5>
              <p className="card-text">
                <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> Dhaka,
                Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
