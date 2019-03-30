import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import data from './data/data'
import Header from "./Success"
import { Redirect } from "react-router-dom"

class TotalQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataQ: data
        };
    }
    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/' />
        return (
            <div>
                <Header />
                <div className="navbar111">
                    {this.state.dataQ.map((i, e) => {
                        return (
                            <div className="bocauhoi" key={e}>
                                <ul className="bocauhoi1">
                                    <Link to={`/detail/${i.id}`}>{i.type}</Link>
                                </ul>
                            </div>
                        )
                    })}
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

export default connect(mapStateToProps, null)(TotalQuestion)