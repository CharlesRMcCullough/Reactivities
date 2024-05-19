import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import { Header, Icon } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:5000/api/activities')
       .then(response => {
          setActivities(response.data)
       })
  }, []) 

  return (
    <div>
      <h2 className="font-bold underline">Reactivities</h2>
      <ul className="divide-y, divide-gray-200">
          { activities.map((activity: any) => (
            <li className="py-4 flix" key={activity.id}>
              {activity.title}
            </li>
          ))}
      </ul>
   </div>
  )
}

export default App
