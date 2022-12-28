import React from 'react'
import { useTabs } from '../hooks/useTabs'

const contents = [
  {
    tab: 'Section 1',
    content: "I'm the content of section 1.",
  },
  {
    tab: 'Section 2',
    content: "I'm the content of section 2.",
  },
]

const UseTabsPage = () => {
  const { currentItem, setCurrentIndex } = useTabs(0, contents)
  return (
    <>
      {contents.map((section, index) => (
        <button key={index} onClick={() => setCurrentIndex(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </>
  )
}

export default UseTabsPage
