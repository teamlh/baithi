import React, { Component } from 'react';
import { connect } from 'react-redux'
import Success from "./Success"
import { Redirect } from "react-router-dom"



class Profile extends Component {
    render() {
        const { auth, profile } = this.props
        if (!auth.uid) return <Redirect to='/' />
        return (
            <div>
                <Success />
                {profile.firstName + " " + profile.lastName}
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


export default connect(mapStateToProps, null)(Profile)
