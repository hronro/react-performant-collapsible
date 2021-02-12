import * as  React from 'react'
import { StrictMode } from 'react'
import { render } from 'react-dom'

import { App } from './app'

window.onload = function handleWindowOnload () {
  render(
    (
      <StrictMode>
        <App />
      </StrictMode>
    ),
    document.getElementById('root'),
  )
}
