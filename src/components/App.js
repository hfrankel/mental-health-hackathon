import React, { Component } from 'react';
import JokeGetter from './JokeGetter';
import NameHeader from './NameHeader';

class App extends Component {
    render() {
        return (
            <>
                <NameHeader />
                <JokeGetter />
            </>
        )
    }
}

export default App;