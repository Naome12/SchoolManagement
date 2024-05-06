"use client"
import { useState } from 'react';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import styles from './Input.module.css';


const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`${styles.input}`}
        placeholder=" "
      />
      <label htmlFor="password" className={`${styles.label}`}>Password</label>
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className={`${styles.toggleButton}`}
      >
        {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
      </button>
    </div>
  );
};

export default PasswordInput;

