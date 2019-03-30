import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from "./firebase"
import Success from './Success';
import { Link } from "react-router-dom"

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      danhsach: []
    };
  }

  addData = () => {
    var danhsach = {};
    danhsach.ten = this.props.profile.firstName + " " + this.props.profile.lastName;
    danhsach.diem = this.props.score
    danhsach.thoigian = this.props.hours + ":" + this.props.minutes + ":" + this.props.seconds
    console.log(danhsach)
    firebase.database().ref('danhsach').push(danhsach)
  }

  render() {
    const { profile } = this.props;
    let message
    const timer = this.props.hours + ":" + this.props.minutes + ":" + this.props.seconds
    const percent = (this.props.score / this.props.dodaichuan * 100);
    if (percent > 80) {
      message = 'Awsome Job!👏'
    } else if (percent < 80 && percent > 40) {
      message = 'You did ok!😏'
    } else {
      message = "You don't know 😱"
    }
    return (
      <div className="well">
        <Success />
        <h4>You Got {this.props.score} out of {this.props.dodaichuan} Correct</h4>
        <h1>{percent}% -{timer}- {message}-{profile.firstName + " " + profile.lastName}</h1>
        <button onClick={this.addData} className="nutdua">
          <Link to="/" style={{ color: 'white' }}>
            Đưa Lên Bảng Xếp Hạng
          </Link>
        </button>
        <hr />
        <a href="/" className="btn btn-primary">Try Again?</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
}


export default connect(mapStateToProps, null)(Results);