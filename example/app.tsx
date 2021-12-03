import * as React from 'react'
import { CSSProperties, useState, useCallback } from 'react'

import { Collapsible } from '../src'

const appStyle: CSSProperties = {
  width: 400,
  height: 500,
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

const horizontalContainerStyle: CSSProperties = {
  display: 'flex',
  flex: 'none',
  justifyContent: 'left',
  alignItems: 'center',
}

const horizontalItemStyle: CSSProperties = {
  width: 100,
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'green',
  color: 'white',
  fontSize: 18,
  marginRight: 10,
}

const endStyle: CSSProperties = {
  fontSize: 28,
  color: 'white',
}

export function App () {
  const [ collapsible, setCollapsible ] = useState(false)
  const [ horizontalCollapsible, setHorizontalCollapsible ] = useState(false)

  const handleBtnClick = useCallback(() => {
    setCollapsible(prevState => !prevState)
  }, [])

  const handleHorizontalBtnClick = useCallback(() => {
    setHorizontalCollapsible(prevState => !prevState)
  }, [])

  return (
    <div style={appStyle}>
      <p>
        <button onClick={handleBtnClick}>Click</button>
      </p>
      <Collapsible collapsible={collapsible} maskColor="red">
        <div style={contentStyle}>
          Hello World
        </div>
      </Collapsible>

      <br />

      <button onClick={handleHorizontalBtnClick}>Click</button>
      <div style={horizontalContainerStyle}>
       <Collapsible collapsible={horizontalCollapsible} horizontal maskColor="red">
          <div style={horizontalItemStyle}>
            Left
          </div>
        </Collapsible> 
        <div style={horizontalItemStyle}>
          Rright
        </div>
      </div>
      <p style={endStyle}>
        End
      </p>
    </div>
  )
}
