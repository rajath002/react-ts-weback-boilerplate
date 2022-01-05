import { useState } from 'react'

export function ClickCounter() {
  const [clickCounter, setClickCounter] = useState(0)
  return (
    <button onClick={() => setClickCounter(() => clickCounter + 1)}>
      click {clickCounter}
    </button>
  )
}
