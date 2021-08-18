import { useState, useEffect } from "react"
import { deleteUser, getUser } from "../../apis/userApi"
import ModalUser from "./ModalUser"
import {
  FaEdit,
  FaTrash,
  FaSortAmountDownAlt,
  RiArrowUpDownFill
} from "react-icons/all"
import { notification, Popconfirm, Button, Pagination } from "antd"
import "./MainContent.scss"

const MainContent = () => {
  const [users, setUsers] = useState([])
  const [editModal, setEditModal] = useState(null)
  const [isDelete, setIsDelete] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      getUser()
        .then((response) => {
          setUsers(response.data)
        })
        .catch((error) => console.log(error))
    }
    fetchData()
  }, [])

  const onConfirm = () => {
    deleteUser(isDelete)
      .then(() => displayData())
      .catch(() => {
        notification["error"]({
          message: "Delete user failed",
          placement: "topRight"
        })
      })
  }

  const displayData = () => {
    getUser()
      .then((response) => {
        setUsers(response.data)
        notification["success"]({
          message: "Delete user successful",
          placement: "topRight"
        })
      })
      .catch((error) => console.log(error))
  }

  const display = users.map((user, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.city}</td>
        <td className="group-btn">
          <Button
            className="btn-edit"
            onClick={() => {
              setEditModal(user)
            }}
          >
            <FaEdit className="icon-edit" />
          </Button>
          <Popconfirm
            title="Are you sure to delete this user? "
            onConfirm={onConfirm}
            okText="Yes"
            cancelText="No"
          >
            <Button className="btn-delete" onClick={() => setIsDelete(user.id)}>
              <FaTrash className="icon-delete" />
            </Button>
          </Popconfirm>
        </td>
      </tr>
    )
  })

  return (
    <div className="main-content">
      <div className="title">Hover Data Table</div>
      <div>
        <ModalUser
          editModal={editModal}
          setEditModal={setEditModal}
        ></ModalUser>
        <div className="container">
          <table className="table mt-3">
            <thead>
              <tr>
                <th>
                  <span className="th-name">Index</span>
                  <span className="th-sort">
                    <FaSortAmountDownAlt />
                  </span>
                </th>
                <th>
                  <span className="th-name">Name</span>
                  <span className="th-sort">
                    <RiArrowUpDownFill />
                  </span>
                </th>
                <th>
                  <span className="th-name">Email</span>
                  <span className="th-sort">
                    <RiArrowUpDownFill />
                  </span>
                </th>
                <th>
                  <span className="th-name">City</span>
                  <span className="th-sort">
                    <RiArrowUpDownFill />
                  </span>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>{display}</tbody>
            <tfoot>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="table-footer">
          <div className="desc">
            Showing 1 to {users.length} of {users.length} entries
          </div>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  )
}

export default MainContent
