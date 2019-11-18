import React from 'react'
import ReactDOM from 'react-dom'
import Airform from './index'

describe('Airform', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Airform email="your@email.com" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
