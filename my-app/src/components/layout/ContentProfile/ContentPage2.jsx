
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, useParams } from 'react-router-dom';
import './ContentProfile2.css'


const ContentProfilePage2 = () =>
{
  const {email} = useParams();
    return(
        <div className="order-history">
      <h5>Lịch sử đơn hàng</h5>
      <p>Hiển thị thông tin các sản phẩm bạn đã mua tại Steam Shop</p>
      <div className="filter-container">
        <input className='input-text-profile2' type="text" placeholder="Mã đơn hàng" />
        <input className='input-text-profile2' type="text" placeholder="Số tiền từ" />
        <input className='input-text-profile2' type="text" placeholder="Số tiền đến" />
        <input type="date" placeholder="Từ ngày" />
        <input type="date" placeholder="Đến ngày" />
        <button className="filter-button">Lọc</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Thời gian</th>
            <th>Mã đơn hàng</th>
            <th>Sản phẩm</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2018-12-23 23:54:22</td>
            <td>2183642</td>
            <td>PlayerUnknown's Battlegrounds PUBG</td>
            <td>199.000đ</td>
            <td className="status">Đã xử lý</td>
            <td><a href="#">Chi tiết</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    )
}
export default ContentProfilePage2