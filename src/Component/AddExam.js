import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from "./Success"
import { Redirect } from "react-router-dom"


class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/' />
        return (
            <div className="cau">
                <Header />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }

}

export default connect(mapStateToProps, null)(Add)