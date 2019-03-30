import React, { Component } from 'react'

class ScoreBox extends Component {
    render() {
        return (
            <div className="well">
                Question {this.props.current} out of {this.props.dodaichuan}
                <span className="pull-right">
                    <strong>
                        Score: {this.props.score}
                    </strong>
                </span>
            </div>
        )
    }
}
export default ScoreBox;