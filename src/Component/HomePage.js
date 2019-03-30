import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signOut } from '././action/auth'
import Success from "./Success"
import Fail from "./Fail"
import { Link } from "react-router-dom"
import firebase from "./firebase"
import Dropdown from "react-dropdown"



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
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


    handleSortChange = (e) => {
        const data3 = [...this.state.data].sort(function (x, y) {
            var a = new Date(x.thoigian),
                b = new Date(y.thoigian);
            return a - b;
        })
        const data1 = [...this.state.data].sort((a, b) => (a.ten.toUpperCase() > b.ten.toUpperCase()) ? 1 : ((b.ten.toUpperCase() > a.ten.toUpperCase()) ? -1 : 0))
        const data2 = [...this.state.data].sort((a, b) => (a.diem > b.diem) ? 1 : ((b.diem > a.diem) ? -1 : 0))
        console.log(data2)
        if (e.value === "ttg")
            alert("3")
        this.setState({
            data: data3
        });
        if (e.value === "tt")
            alert("1")
        this.setState({
            data: data1
        });
        if (e.value === "td")
            alert("2")
        this.setState({
            data: data2
        });
    }

    render() {
        console.log(this.state.data)
        const { auth } = this.props;
        const links = auth.uid ? <Success /> : <Fail />;
        const hay = auth.uid ? <Link to="/total">BẮT ĐẦU THI</Link> : <Link to="/signup">BẮT ĐẦU THI</Link>;
        return (
            <div>
                {links}
                < div className="duoi" >
                    <div className="bangxephang">
                        <div style={{ width: 250 }}>
                            <Dropdown
                                options={[
                                    { value: 'tt', label: 'Phân Loại Tên' },
                                    { value: 'td', label: 'Phân Loại Theo Điểm' },
                                    { value: 'ttg', label: 'Phân Loại Theo Thời Gian' },
                                ]}
                                className='react-dropdown'
                                onChange={this.handleSortChange}
                            />
                        </div>
                        <table className="rtable">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên Ứng Viên</th>
                                    <th>Số Điểm</th>
                                    <th>Số Thời Gian</th>
                                </tr>
                            </thead>
                            {
                                this.state.data.map((e, i) => {
                                    return (
                                        <tbody>
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{e.ten}</td>
                                                <td>{e.diem}</td>
                                                <td>{e.thoigian}</td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                    </div>
                    <div className="right">
                        <button >
                            {hay}
                        </button>
                        <button>
                            <Link to="/rule">LUẬT LỆ THI</Link>
                        </button>
                    </div>
                </div >
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
