import React from 'react'
import { useTitle } from '../hooks/useTitle'

const UseTitlePage = () => {
  const { setTitle } = useTitle('Change Me!')
  return (
    <>
      <button onClick={() => setTitle('Changed!')}>
        웹사이트 타이틀을 바꿔주는 버튼
      </button>
    </>
  )
}

export default UseTitlePage
