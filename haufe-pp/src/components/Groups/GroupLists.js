// src/components/Groups/GroupList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GroupList() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get('/api/groups');
        setGroups(response.data);
      } catch (error) {
        console.error('Failed to fetch groups', error);
      }
    };
    fetchGroups();
  }, []);

  return (
    <div>
      <h2>Groups</h2>
      {groups.map((group) => (
        <div key={group.id}>
          <h3>{group.name}</h3>
          <a href={`/groups/${group.id}`}>View Group</a>
        </div>
      ))}
    </div>
  );
}

export default GroupList;