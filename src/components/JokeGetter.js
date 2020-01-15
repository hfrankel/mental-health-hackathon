import React, { Component } from 'react';
import axios from 'axios';
import { timingSafeEqual } from 'crypto';

class JokeGetter extends Component {
    state = {
        setup: '',
        punchline: '',
        showSetup: false,
        showPunchline: false
    }

    onButtonClick = () => {
        let response = axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
            .then(response =>  this.setState({ 
                setup: response.data[0].setup,
                punchline: response.data[0].punchline,
                showSetup:  true,
                showPunchline: false
            })); 
    }

    showPunchline = () => {
        this.setState({ showPunchline: true });
    }

    render() {
        const { setup, punchline, showSetup, showPunchline } = this.state;

        return (
            <>
                <div>
                    <button onClick={this.onButtonClick}>Tell me a joke</button>
                    { showSetup && setup }
                </div>
                <div>
                    <button onClick={this.showPunchline}>Why?</button>
                    { showPunchline && punchline }
                </div>
            </>
        );
    }
}

export default JokeGetter;