// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

    passwordTyping = () => {
        console.log('Entering password...')
    }

    render() {
          return  <input type='password' onKeyUp={this.passwordTyping} />
    }
}

export default Keypad