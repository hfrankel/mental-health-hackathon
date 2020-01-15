import React, { Component } from 'react';
import JokeGetter from './JokeGetter';

class App extends Component {
    render() {
        return (
            <>
                <h1>This is app</h1>
                <JokeGetter />
            </>
        )
    }
}

export default App;