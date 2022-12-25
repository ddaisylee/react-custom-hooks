import React from 'react';
import { useInput } from '../hooks/useInput';

const UseInputPage = () => {
  const validationCheck = (value) => value.length >= 10
  const { value, isValid, handleChange } = useInput('', validationCheck)

  return (
    <>
      <input placeholder='입력해주세요' value={value} onChange={handleChange} />
      {value && (isValid || <span style={{ color: "red" }}>10자 이상 입력해주세요!</span>)}
    </>
  );
};

export default UseInputPage