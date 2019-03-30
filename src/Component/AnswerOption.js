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

    LOL = () => {
        if (this.props.type === "text") {
            return (
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
                }
                ))
        }
    }
    LOL1 = () => {
        if (this.props.type === "img") {
            return (
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
                            <img src={e.text} alt="" />
                        </label>
                    )
                }
                ))
        }
    }
    LOL2 = () => {
        if (this.props.type === "sound") {
            return (
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
                            <audio controls>
                                <source src={e.text} type="audio/mpeg" />
                            </audio>
                        </label>
                    )
                }
                ))
        }
    }


    render() {

        return (
            <div className="cautraloi">
                {
                    this.LOL()
                }
                {
                    this.LOL1()
                }
                {
                    this.LOL2()
                }
            </div>
        )
    }
}

export default connect(null, null)(AnswerOption)