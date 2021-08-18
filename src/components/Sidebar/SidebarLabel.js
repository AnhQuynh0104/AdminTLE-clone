import * as FaIcons from "react-icons/fa"

const SidebarLabel = (props) => {
  return (
    <li className="item">
      <div className="item-left">
        <span
          className={
            props.labelColor === "red"
              ? "item-left-icon-danger"
              : props.labelColor === "yellow"
              ? "item-left-icon-warning"
              : "item-left-icon-primary"
          }
        >
          <FaIcons.FaRegCircle />
        </span>
        <span className="content">{props.text}</span>
      </div>
    </li>
  )
}

export default SidebarLabel
