import axios from "axios"

axios.defaults.baseURL = "https://60becf8e6035840017c17a48.mockapi.io/api"

export function getUser(data) {
  return axios.get("/users")
}

export function postUser(data) {
  return axios.post("/users", {
    name: data.name,
    email: data.email,
    city: data.city
  })
}

export function putUser(data, id) {
  return axios.put(`/users/${id}`, {
    name: data.name,
    email: data.email,
    city: data.city
  })
}

export function deleteUser(id) {
  return axios.delete(`/users/${id}`)
}
