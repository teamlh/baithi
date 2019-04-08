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

    //function declartion for sorting by time
    sortByTime = (a, b) => {
        return ((a.thoigian === b.thoigian) ? 0 : ((a.thoigian > b.thoigian) ? 1 : -1));
    }

    sortByPoint = (a, b) => {
        return ((a.diem === b.diem) ? 0 : ((a.diem > b.diem) ? 1 : -1));
    }

    handleSortChange = (e) => {
        //check this line
        this.setState({
            data: this.state.data.sort(this.sortByTime)
        });
        if (e.value === "ttg")
            this.setState({
                data: this.state.data.sort(this.sortByTime)
            });
        if (e.value === "td")
            this.setState({
                data: this.state.data.sort(this.sortByPoint)
            });
    }



    render() {
        console.log(this.props.profile)
        const { auth } = this.props;
        const links = auth.uid ? <Success /> : <Fail />;
        const hay = auth.uid ? <Link to="/total">BẮT ĐẦU THI</Link> : <Link to="/signup">BẮT ĐẦU THI</Link>;
        // const tieude

        return (
            <div>
                {links}
                < div className="duoi" >
                    <div className="bangxephang">
                        <div style={{ width: 250 }}>
                            <Dropdown
                                options={[
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
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
