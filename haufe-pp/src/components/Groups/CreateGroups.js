// src/components/Groups/CreateGroup.js
import React, { useState } from 'react';
import axios from 'axios';

function CreateGroup() {
  const [groupName, setGroupName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/groups', { name: groupName });
      window.location.href = '/groups';
    } catch (error) {
      console.error('Failed to create group', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="Group Name"
      />
      <button type="submit">Create Group</button>
    </form>
  );
}

export default CreateGroup;
