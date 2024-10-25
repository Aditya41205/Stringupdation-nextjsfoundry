"use client";
import { useState, useEffect } from 'react';
import { connectToContract, updateString, getString } from "../../utils/contract";


export default function Home() {
  const [stringValue, setStringValue] = useState('');
  const [currentString, setCurrentString] = useState('');

  useEffect(() => {
      const fetchString = async () => {
          await connectToContract();
          const value = await getString();
          setCurrentString(value);
      };
      fetchString();
  }, []);

  const handleSubmit = async () => {
   
      await updateString(stringValue);
      const updatedValue = await getString();
      setCurrentString(updatedValue);
  };

  return (
      <div style={{ padding: '20px' }}>
          <h1>String Updation DApp</h1>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  value={stringValue}
                  onChange={(e) => setStringValue(e.target.value)}
                  placeholder="Enter new string"
              />
              <button type="submit">Update String</button>
          </form>
          <h2>Current String: {currentString}</h2>
      </div>
  );
}