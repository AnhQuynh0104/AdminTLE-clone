import { FaBars, FaEnvelope, FaBell, FaFlag, FaCogs } from "react-icons/fa"
import AVATAR from "../../assets/images/avatar.jpg"
import "./Header.scss"

const Header = () => {
  return (
    <nav className="header">
      <div className="nav-brand">
        <b>Admin</b>
        LTE
      </div>
      <div className="main-header">
        <span className="icon">
          <FaBars />
        </span>
        <div className="menu">
          <ul className="menu-notifications">
            <li className="item">
              <FaEnvelope />
              <span className="item-noti item-noti-success">4</span>
            </li>
            <li className="item">
              <FaBell />
              <span className="item-noti item-noti-warning">10</span>
            </li>
            <li className="item">
              <FaFlag />
              <span className="item-noti item-noti-danger">9</span>
            </li>
          </ul>
          <div className="menu-info">
            <span className="person-avatar">
              <img src={AVATAR} alt="qa" />
            </span>
            <span className="person-name">Alexander Pierce</span>
          </div>
          <span className="icon">
            <FaCogs />
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Header
