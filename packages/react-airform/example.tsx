import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import Airform from './'

const App = () => (
  <Airform email="cjpatoilo@gmail.com">
    <input type="text" name="name" placeholder="Enter your name" />
    <textarea name="message" placeholder="Enter your message" />
    <button>Send</button>
  </Airform>
)

ReactDOM.render(<App />, document.getElementById('root'))
