import React, { Component } from 'react'
import { connect } from 'react-redux'
import Answer from "./AnswerOption"


class QuestionOption extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="cautraloi1">
                {
                    this.props.question.cauhoi.map((e, i) => {
                        if (e.id === this.props.current) {
                            return (
                                <div className="cauhoi" key={i}>
                                    <div>
                                        <div className="cauhoi1">
                                            {e.question}
                                        </div>
                                        <Answer answer={e.answers} type={e.type} correct={e.correct} {...this.props} />
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}

export default connect(null, null)(QuestionOption)