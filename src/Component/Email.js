import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '././action/auth'


class Email extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const hien = this.props.isSent ? (
            <p>
                E-Mail confirmation sent: Check you E-Mails (Spam
                folder included) for a confirmation E-Mail.
                Refresh this page once you confirmed your E-Mail.
                  </p>
        ) : (
                <p>
                    Verify your E-Mail: Check you E-Mails (Spam folder
                    included) for a confirmation E-Mail or send
                    another confirmation E-Mail.
              </p>
            );
        const buttone = this.props.isSent ? (
            <button onClick={this.props.onHideButton} >
                <span>X</span>
            </button>
        ) : null;
        return (
            <div className="emailv">
                {buttone}
                {hien}
                < button
                    type="button"
                    onClick={this.props.onSendEmailVerification}
                    disabled={this.props.isSent}
                >
                    Send confirmation E - Mail
                </button >
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Email)