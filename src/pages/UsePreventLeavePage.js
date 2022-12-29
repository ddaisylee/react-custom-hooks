import React from 'react'
import { usePreventLeave } from '../hooks/usePreventLeave'

const UsePreventLeavePage = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave()
  return (
    <>
      <h1>사용자가 페이지를 나갈 때 메시지를 보여주는 페이지</h1>
      <button onClick={enablePrevent}>Protect Button</button>
      <button onClick={disablePrevent}>Unprotect Button</button>
    </>
  )
}

export default UsePreventLeavePage
