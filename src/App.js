import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

import Activity from './components/Activity/Activity';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('activities.json')
      .then(res => res.json())
      .then(data => setActivities(data));
  }, []);

  const [activityTime, setActivityTime] = useState(0);

  const handleAddToList = activityTime => {
    setActivityTime(activityTime);
  };

  return (
    <div className="row w-100 m-0">
      <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 p-5">
        <h1 className="text-success">
          <FontAwesomeIcon icon={faDumbbell} /> Blazing Active Club
        </h1>
        <h2 className="mb-3">Select today's activity</h2>
        <div className="row g-3">
          {activities.map(activity => (
            <Activity
              activity={activity}
              key={activity.id}
              handleAddToList={handleAddToList}
            ></Activity>
          ))}
        </div>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 p-0">
        <Sidebar activityTime={activityTime}></Sidebar>
      </div>
    </div>
  );
}

export default App;
