import React, {Component} from "react";

export class Clock extends Component {

    options = {
        // era: 'long',
        // year: 'numeric',
        // month: 'long',
        // day: 'numeric',
        // weekday: 'short',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }

    state = {
        time: new Date().toLocaleTimeString('ru', this.options),
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState(() => ({
                time: new Date().toLocaleTimeString('ru', this.options),
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>{this.state.time}</div>
        );
    }
}