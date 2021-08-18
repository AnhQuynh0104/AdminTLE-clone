const SidebarItem = (props) => {
  return (
    <>
      <li className="item">
        <div className="item-left">
          <span className="item-left-icon">{props.leftIcon}</span>
          <span className="content">{props.text}</span>
        </div>
        <div className="item-right-icon">{props.rightIcon}</div>
      </li>
    </>
  )
}

export default SidebarItem
