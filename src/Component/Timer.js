import React, { Component } from 'react'

class Timer extends Component {
    render() {
        return (
            <div className="well11">
                <div className="current-timer">
                    {this.props.hours + ":" + this.props.minutes + ":" + this.props.seconds}
                </div>
            </div>
        )
    }
}
export default Timer;