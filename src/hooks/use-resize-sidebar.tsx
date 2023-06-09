import { useState } from 'react'

export function useResizeSidebar(
  initialSize: number,
  min: number,
  max: number
) {
  const [resizing, setResizing] = useState(false)
  const [size, setSize] = useState(loadStoredSize() ?? initialSize)

  const startResizing: React.MouseEventHandler<HTMLDivElement> = (e) => {
    !resizing && setResizing(true)
  }

  const stopResizing = () => {
    if (resizing) {
      setResizing(false)
      saveStoredSize(size)
    }
  }

  const updateSize: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const currentMouseX = e.clientX
    if (resizing && currentMouseX >= min && currentMouseX <= max) {
      setSize(currentMouseX)
    }
  }

  const reset = () => {
    setSize(initialSize)
    saveStoredSize(initialSize)
  }

  return {
    size,
    resizing,
    startResizing,
    stopResizing,
    updateSize,
    reset,
  }
}

// LocalStorage Helpers

function saveStoredSize(size: number) {
  localStorage.setItem('sidebar-width', size.toString())
}

function loadStoredSize(): number | null {
  const storedSize = localStorage.getItem('sidebar-width')
  if (storedSize) {
    return Number.parseInt(storedSize)
  }
  return null
}
