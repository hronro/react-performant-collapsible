import * as React from 'react'
import { CSSProperties, useState, useCallback } from 'react'

import { Collapsible } from '../src'

const appStyle: CSSProperties = {
  width: 400,
  height: 400,
  background: 'red',
}

const contentStyle: CSSProperties = {
  width: 200,
  height: 200,
  background: 'green',
  fontSize: 22,
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const endStyle: CSSProperties = {
  fontSize: 28,
  color: 'white',
}

export function App () {
  const [ collapsible, setCollapsible ] = useState(false)

  const handleClick = useCallback(() => {
    setCollapsible(prevState => !prevState)
  }, [])

  return (
    <div style={appStyle}>
      <p>
        <button onClick={handleClick}>Click</button>
      </p>
      <Collapsible collapsible={collapsible} maskColor="red">
        <div style={contentStyle}>
          Hello World
        </div>
      </Collapsible>
      <p style={endStyle}>
        End
      </p>
    </div>
  )
}
