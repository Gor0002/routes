import axios from "axios"

export const getDataInfo = () => {
  return axios.get("/m.json")
}


