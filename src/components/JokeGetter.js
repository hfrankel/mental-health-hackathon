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

    componentDidMount() {
        let response = axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
            .then(response =>  this.setState({ 
                setup: response.data[0].setup,
                punchline: response.data[0].punchline
            }));  
    }

    onButtonClick = () => {
        console.log('button clicked');
        this.setState({ showSetup:  true });
    }

    render() {
        const { setup, showSetup } = this.state;

        return (
            <div>
                <button onClick={this.onButtonClick}>Tell me a joke</button>
                {
                    showSetup
                }
                
                {this.state.punchline}
            </div>
        );
    }
}

export default JokeGetter;