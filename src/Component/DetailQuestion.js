import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from "./QuestionOption"
import data from "./data/data"
import Results from "./Result"
import ScoreBox from "./Score"
import { Redirect } from "react-router-dom"
import Timer from './Timer';

class DetailQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerStarted: false,
            timerStopped: true,
            hours: 0,
            minutes: 0,
            seconds: 0,
            dataQ: data,
            current: 1,
            score: 0
        };
    }

    componentWillMount() {
        if (this.state.timerStopped) {
            this.timer = setInterval(() => {
                this.setState({ timerStarted: true, timerStopped: false });
                if (this.state.timerStarted) {
                    if (this.state.seconds >= 60) {
                        this.setState((prevState) => ({ minutes: prevState.minutes + 1, seconds: 0 }));
                    }
                    if (this.state.minutes >= 60) {
                        this.setState((prevState) => ({ hours: prevState.hours + 1, minutes: 0, seconds: 0 }));

                    }
                    this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
                }

            }, 1000);
        }
    }


    setScore = (score) => {
        this.setState({
            score
        });
    }

    setCurrent = (current) => {
        this.setState({
            current
        });
    }

    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/' />
        let scorebox
        let results
        let timer
        const question = this.state.dataQ.filter((i) => { return i.id === parseInt(this.props.match.params.ID) })
        const dodai = question.map((i) => { return i.cauhoi.length })
        const dodaichuan = parseInt(dodai)
        if (this.state.current > dodaichuan) {
            clearInterval(this.timer);
            scorebox = '';
            results = <Results {...this.state} dodaichuan={dodaichuan} />
        }
        else {
            timer = <Timer {...this.state} />;
            scorebox = <ScoreBox {...this.state} dodaichuan={dodaichuan} />
            results = '';
        }
        return (

            <div className="chitietcauhoi">
                <div className="cauhoi">
                    {scorebox} {timer}
                    {
                        question.map((ques) => {
                            return <Question setCurrent={this.setCurrent} setScore={this.setScore} {...this.state} question={ques} key={ques.id} />;
                        })
                    }
                    {results}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }

}


export default connect(mapStateToProps, null)(DetailQuestion)