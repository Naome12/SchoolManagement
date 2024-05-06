"use client"
import { useState } from 'react';
import styles from './Input.module.css';

const UserIdInput = () => {
  const [userId, setUserId] = useState('');

  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={userId}
        onChange={handleChange}
        className={`${styles.input} `}
        placeholder=" "
      />
      <label htmlFor="userId" className={`${styles.label} ${userId && styles.labelActive}`}>User ID</label>
    </div>
  );
};

export default UserIdInput;
