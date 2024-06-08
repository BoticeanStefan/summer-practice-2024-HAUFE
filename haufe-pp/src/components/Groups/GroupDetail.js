// src/components/Groups/GroupDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function GroupDetail() {
  const { id } = useParams();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const fetchGroupDetails = async () => {
      try {
        const response = await axios.get(`/api/groups/${id}`);
        setGroup(response.data);
      } catch (error) {
        console.error('Failed to fetch group details', error);
      }
    };
    fetchGroupDetails();
  }, [id]);

  if (!group) return <p>Loading...</p>;

  return (
    <div>
      <h2>{group.name}</h2>
      <h3>Recommendations in this group:</h3>
      {group.recommendations.map((rec) => (
        <div key={rec.id}>
          <h4>{rec.title}</h4>
          <p>{rec.message}</p>
          <a href={rec.link} target="_blank" rel="noopener noreferrer">
            Watch Here
          </a>
        </div>
      ))}
    </div>
  );
}

export default GroupDetail;