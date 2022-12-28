import React from 'react'
import { useInput } from '../hooks/useInput'

const UseInputPage = () => {
  const validationCheck = (value) => value.length >= 10
  const { isValid, ...rest } = useInput('', validationCheck)

  return (
    <>
      <input placeholder="입력해주세요" {...rest} />
      {isValid || <span style={{ color: 'red' }}>10자 이상 입력해주세요!</span>}
    </>
  )
}

export default UseInputPage
