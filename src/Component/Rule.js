import React, { Component } from 'react';
import { connect } from 'react-redux'
import Success from "./Success"



class Rule extends Component {
    render() {
        return (
            <div>
                <Success />
                <div className="content">
                    <h1>QUYẾT ĐỊNH</h1>
                    <p>Điều 1. Ban hành Thể lệ cuộc thi Olympic tiếng Anh trên Internet dành cho học sinh phổ thông (IOE) (kèm theo Quyết định này).</p>
                    <p>Điều 2. Ban chỉ đạo, Ban tổ chức cấp toàn quốc có trách nhiệm chỉ đạo, hướng dẫn các sở giáo dục và đào tạo thực hiện các công việc triển khai cuộc thi Olympic tiếng Anh trên Internet dành cho học sinh phổ thông (IOE)  theo đúng Thể lệ này.
                        </p>
                    <p>Điều 3. Quyết định này có hiệu lực kể từ ngày kí và thay cho Quyết định số 4231/QĐ-BGDĐT ngày 09 tháng 10 năm 2012 của Bộ trưởng Bộ Giáo dục và Đào tạo.</p>
                    <p>Các ông (bà) Chánh Văn phòng, Vụ trưởng Vụ Giáo dục Trung học, Vụ trưởng Vụ Giáo dục Tiểu học, Ban Quản lý Đề án ngoại ngữ quốc gia 2020, Thủ trưởng các đơn vị có liên quan chịu trách nhiệm thi hành Quyết định này./.</p>
                </div>
            </div>
        )
    }
}


export default connect(null, null)(Rule)