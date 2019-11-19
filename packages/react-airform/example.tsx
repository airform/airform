import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import Airform from './'

const App = () => (
  <Airform email="cjpatoilo@gmail.com">
    <input type="text" name="name" />
    <textarea name="message"></textarea>
    <button>Send</button>
  </Airform>
)

ReactDOM.render(<App />, document.getElementById('root'))
