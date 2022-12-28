import React from 'react'
import { useConfirm } from '../hooks/useConfirm'

const UseConfirmPage = () => {
  const deleteWord = () => console.log('삭제 완료.')
  const cancelDelete = () => console.log('삭제를 취소했습니다.')
  const confirmDelete = useConfirm(
    '삭제하시겠습니까?',
    deleteWord,
    cancelDelete,
  )
  return (
    <>
      <button onClick={confirmDelete}>삭제 버튼</button>
    </>
  )
}

export default UseConfirmPage
