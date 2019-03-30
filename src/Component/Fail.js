import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Fail extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar1">
                    <div className="bentrai">ĐỐ VUI TRIỀU ĐÌNH</div>
                    <div className="benphai">
                        <li className="navbar11">
                            <Link to="/signup">
                                Signup
                            </Link>
                        </li>
                        <li className="navbar11">
                            <Link to="/signin">
                                Login
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Fail