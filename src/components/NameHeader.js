import React, { Component } from 'react';

class NameHeader extends Component {
      state = { 
        username: '',
        showForm: true    
    };

      myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
      }

      mySubmitHandler = (event) => {
        event.preventDefault();
        this.setState({ showForm: false });
      }

      render() {
          const { username, showForm } = this.state;

        return (
            <>
                <h1>Hello {username}</h1>
                { showForm && <form onSubmit={this.mySubmitHandler}>
                    <p>Enter your name, and submit:</p>
                    <input
                        type='text'
                        onChange={this.myChangeHandler}
                    />
                    <input
                        type='submit'
                    />
                </form>}
            </>
        );
    }
}

export default NameHeader;