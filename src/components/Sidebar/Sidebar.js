import SidebarItem from "./SidebarItem"
import SidebarLabel from "./SidebarLabel"

import {
  FaAngleLeft,
  FaTachometerAlt,
  FaFile,
  FaTh,
  FaChartPie,
  FaTv,
  FaEdit,
  FaTable,
  FaCalendar,
  FaEnvelope,
  FaFolder,
  FaReply,
  FaBook,
  FaSearch
} from "react-icons/fa"
import AVATAR from "../../assets/images/avatar.jpg"
import "./SideBar.scss"

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top-nav">
        <div className="user">
          <div className="user-avatar">
            <img src={AVATAR} alt="qa"></img>
          </div>
          <div className="user-info">
            <p className="user-name">Alexander Pierce</p>
            <p className="user-status">
              <span className="user-status-round"></span>
              <span className="user-status-text">Online</span>
            </p>
          </div>
        </div>
        <div className="search">
          <input className="search-input" placeholder="Search..."></input>
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="main-nav">
          <div className="title">main navigation</div>
          <ul className="list">
            <SidebarItem
              leftIcon={<FaTachometerAlt />}
              text="Dashbroad"
              rightIcon={<FaAngleLeft />}
            ></SidebarItem>

            <SidebarItem
              leftIcon={<FaFile />}
              text="Layout Options"
              rightIcon={<FaAngleLeft />}
            ></SidebarItem>

            <SidebarItem
              leftIcon={<FaTh />}
              text="Widgets"
              rightIcon={<FaAngleLeft />}
            ></SidebarItem>

            <SidebarItem
              leftIcon={<FaChartPie />}
              text="Charts"
              rightIcon={<FaAngleLeft />}
            ></SidebarItem>

            <SidebarItem
              leftIcon={<FaTv />}
              text="UI Elements"
              rightIcon={<FaAngleLeft />}
            ></SidebarItem>

            <SidebarItem
              leftIcon={<FaEdit />}
              text="Forms"
              rightIcon={<FaAngleLeft />}
            ></SidebarItem>

            <SidebarItem
              leftIcon={<FaTable />}
              text="Tables"
              rightIcon={<FaAngleLeft />}
            ></SidebarItem>

            <SidebarItem
              leftIcon={<FaCalendar />}
              text="Calendar"
              rightIcon={<FaAngleLeft />}
            ></SidebarItem>

            <SidebarItem
              leftIcon={<FaEnvelope />}
              text="Mailbox"
              rightIcon={<FaAngleLeft />}
            ></SidebarItem>

            <SidebarItem
              leftIcon={<FaFolder />}
              text="Examples"
              rightIcon={<FaAngleLeft />}
            ></SidebarItem>

            <SidebarItem
              leftIcon={<FaReply />}
              text="EMultilevel"
              rightIcon={<FaAngleLeft />}
            ></SidebarItem>

            <SidebarItem
              leftIcon={<FaBook />}
              text="Documentation"
              rightIcon={<FaAngleLeft />}
            ></SidebarItem>
          </ul>
        </div>
        <div className="main-nav">
          <div className="title">labels</div>
          <ul className="list">
            <SidebarLabel labelColor="red" text="Important"></SidebarLabel>
            <SidebarLabel labelColor="yellow" text="Warning"></SidebarLabel>
            <SidebarLabel labelColor="blue" text="Infomation"></SidebarLabel>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
