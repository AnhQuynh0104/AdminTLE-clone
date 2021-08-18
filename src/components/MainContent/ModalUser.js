import { useState } from "react"
import { getUser, postUser, putUser } from "../../apis/userApi"
import { Form, Input, Button, Modal, notification } from "antd"
import "antd/dist/antd.css"

const ModalUser = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const setUsers = []
  const [addModal, setAddModal] = useState(false)

  const onFinish = () => {
    if (addModal) {
      setAddModal(false)
      let newUser = { name, email, city }
      postUser(newUser)
        .then(() => displayData())
        .catch(() => {
          notification["error"]({
            message: "Add user failed",
            placement: "topRight"
          })
        })
    }
    if (props.editModal) {
      props.setEditModal(null)
      let newUser = { name, email, city }
      putUser(newUser, props.editModal.id)
        .then(() => displayData())
        .catch(() => {
          notification["error"]({
            message: "Edit user failed",
            placement: "topRight"
          })
        })
    }
  }

  const displayData = () => {
    getUser()
      .then((response) => {
        setUsers(response.data)
        notification["success"]({
          message: addModal ? "Add user successful" : "Edit user successful",
          placement: "topRight"
        })
        setInterval(() => {
          window.location.reload()
        }, 1000)
        props.editModal ? props.setEditModal(null) : setAddModal(false)
      })
      .catch((error) => console.log(error))
  }

  const handleCancel = () => {
    setAddModal(false)
    props.setEditModal(null)
  }

  return (
    <>
      <Button
        type="primary"
        style={{ marginBottom: 20, fontSize: 14 }}
        onClick={() => setAddModal(true)}
      >
        Add user
      </Button>
      <Modal
        title={addModal ? "Add user" : "Edit user"}
        visible={addModal || props.editModal}
        onCancel={handleCancel}
        footer={""}
        destroyOnClose={true}
      >
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          initialValues={props.editModal}
        >
          <Form.Item
            label="Name"
            name="name"
            onChange={(evt) => setName(evt.target.value)}
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            onChange={(evt) => setEmail(evt.target.value)}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            onChange={(evt) => setCity(evt.target.value)}
            rules={[{ required: true, message: "Please input your city!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="form-btn">
            <Button
              style={{ marginRight: 10 }}
              onClick={() => {
                props.setEditModal(null)
                setAddModal(false)
              }}
            >
              Close
            </Button>
            <Button type="primary" htmlType="submit" className="btn-submit">
              {addModal ? "Add" : "Edit"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ModalUser
