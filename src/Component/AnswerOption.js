import React, { Component } from 'react'
import { connect } from 'react-redux'


class AnswerOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onChange = (e) => {
        e.preventDefault();
        const { correct, setScore, setCurrent } = this.props;
        let selected = e.target.value;
        if (selected === correct) {
            setScore(this.props.score + 1);

        }
        setCurrent(this.props.current + 1)
    }


    render() {
        return (
            <div className="cautraloi">
                {
                    this.props.answer.map((e) => {
                        return (
                            <label className="radioCustomLabel" key={e.id} >
                                {e.id}
                                <input
                                    type="radio"
                                    className="radioCustomButton"
                                    name="radioGroup"
                                    onChange={this.onChange}
                                    value={e.id}
                                />
                                {e.text}
                            </label>
                        )

                    })
                }
            </div>
        )
    }
}

export default connect(null, null)(AnswerOption)