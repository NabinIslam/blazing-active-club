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

  return (
    <div className="row">
      <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 p-5">
        <h1>
          <FontAwesomeIcon icon={faDumbbell} /> Blazing Active Club
        </h1>
        <h2>Select today's exercise</h2>
        <div className="row g-3">
          {activities.map(activity => (
            <Activity activity={activity} key={activity.id}></Activity>
          ))}
        </div>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
