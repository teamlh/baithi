import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut } from './action/auth'
import { Link } from "react-router-dom"

class Success extends Component {
    render() {
        const { profile } = this.props
        return (
            <div className="navbar">
                <ul className="navbar1">
                    <div className="bentrai">ĐỐ VUI TRIỀU ĐÌNH</div>
                    <div className="benphai">
                        <li className="navbar11">
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className="navbar11">
                            <Link to="/profile">
                                {profile.firstName + " " + profile.lastName}
                            </Link>
                        </li>
                        <li className="navbar11" onClick={this.props.signOut}>
                            Sign Out
                    </li>
                    </div>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Success)