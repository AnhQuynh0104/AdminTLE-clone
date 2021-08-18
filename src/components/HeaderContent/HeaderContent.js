import { FaTachometerAlt } from "react-icons/fa"
import "./HeaderContent.scss"

const HeaderContent = () => {
  return (
    <div className="header-content">
      <div className="header-content-left">
        <span className="name">Data Tables</span>
        <span className="attribute">advanced tables</span>
      </div>
      <div className="header-content-right">
        <span>
          <FaTachometerAlt />
        </span>
        <span>Home</span>
        <span className="lighter">></span>
        <span>Tables</span>
        <span className="lighter">></span>
        <span className="lighter">Data tables</span>
      </div>
    </div>
  )
}

export default HeaderContent
