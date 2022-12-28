import { useState } from 'react'

export const useTabs = (initialIndex, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  return {
    currentItem: allTabs[currentIndex],
    setCurrentIndex
  }
}
