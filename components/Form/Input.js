import React, { useState } from 'react';
import AddButton from './../Button/AddButton';

const Input = ({ title, placeholder, addCB }) => {
  const [email, setEmail] = useState('');
  const [isInvalid, setInvalid] = useState('');

  const checkIfValidEmail = (email) => {
    const emailRegex = "[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}";
    const regex = new RegExp(emailRegex, 'g');
    return regex.test(email);
  }

  const onAddClick = () => {
    if (email === '' || !checkIfValidEmail(email)) {
      setInvalid(true);
      return;
    };
    addCB(email);
    setEmail('');
  }

  const onChange = (e) => {
    if (isInvalid) setInvalid(false);
    setEmail(e.target.value);
  }

  const onKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    onAddClick();
  }

  return (
    <div>
      <h1 className="text-gray-600 text-lg mb-1">{title}</h1>
      { isInvalid && <h3 className="text-red-600 text-sm mb-1">Invalid email!</h3>}
      <div className="flex">
        <input
          type="email"
          className="rounded w-full py-2 px-3 mr-4 text-black"
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={email}
        />
        <AddButton
          data-testid='form-add-email-btn'
          onClick={onAddClick}
        />
      </div>
    </div>
  )
}

export default Input;