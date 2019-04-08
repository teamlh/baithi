import React, { Component } from 'react';
import { connect } from 'react-redux'
import Success from "./Success"
import { Redirect } from "react-router-dom"
import { getDeleteD } from '././action/auth'
import firebase from "./firebase"
// import { addAdminRole } from './admin'


class Profile extends Component {
    state = {
        data: [],
        email: ''
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('danhsach');
        itemsRef.on('value', (snapshot) => {
            let newState = [];
            snapshot.forEach(e => {
                const key = e.key;
                const ten = e.val().ten;
                const diem = e.val().diem;
                const thoigian = e.val().thoigian;
                newState.push({
                    key: key,
                    ten: ten,
                    diem: diem,
                    thoigian: thoigian
                });
            })
            this.setState({
                data: newState
            });

        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addAdminRole(this.state);
    }


    deleteData = (e) => {
        const id = e.target.parentElement.getAttribute('id')
        this.props.getDeleteD(id)
    }


    functionAdmin = () => {
        if (this.props.profile.admin) {
            return (
                <div className="bangxephang1">
                    <table className="rtable">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên Ứng Viên</th>
                                <th>Số Điểm</th>
                                <th>Số Thời Gian</th>
                                <th>Xóa Thành Viên</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((e, i) => {
                                    return (
                                        <tr id={e.key} key={e.key}>
                                            <td>{i + 1}</td>
                                            <td>{e.ten}</td>
                                            <td>{e.diem}</td>
                                            <td>{e.thoigian}</td>
                                            <td onClick={this.deleteData}>Xóa</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
        else {
            return (
                null
            )
        }
    }

    render() {
        const { auth, profile } = this.props
        if (!auth.uid) return <Redirect to='/' />
        return (
            <div>
                <Success />
                <div className="quanlicanhan">
                    <div className="avatar">
                        <img src="https://instagram.fsgn5-7.fna.fbcdn.net/vp/fab3a2573a24c1eb25e0866823c3d915/5D413EF6/t51.2885-19/s150x150/43818140_2116018831763532_3803033961098117120_n.jpg?_nc_ht=instagram.fsgn5-7.fna.fbcdn.net" alt="" />
                    </div>
                    <div className="profilecanha">
                        {profile.firstName + " " + profile.lastName}
                    </div>
                    {this.functionAdmin()}
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getDeleteD: (creds) => dispatch(getDeleteD(creds))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
