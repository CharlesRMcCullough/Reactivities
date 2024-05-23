import { useEffect, useState } from 'react'
import axios from 'axios';
import { Activity } from '../models/activity';
import NavBar from './NavBar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
      axios.get('http://localhost:5000/api/activities')
       .then(response => {
          setActivities(response.data)
       })
  }, []) 

  return (
    <div>
      <NavBar />
      <ul className="divide-y, divide-gray-200">
          { activities.map(activity => (
            <li className="py-4 flix" key={activity.id}>
              {activity.title}
            </li>
          ))}
      </ul>
   </div>
  )
}

export default App
