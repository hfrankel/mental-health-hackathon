import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
      }
      render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
            <h1>Hello {this.state.username}</h1>
            <p>Enter your name, and submit:</p>
            <input
              type='text'
              onChange={this.myChangeHandler}
            />
            <input
              type='submit'
            />
            
            </form>
          );
        }
      }
    
ReactDOM.render(<App />, document.getElementById('root'));

export default App;