import { useState } from "react"
import axios from "axios"
import authService from "../auth/authService"

export default function setVehicles() {
    const [err, setErr] = useState('')
    const [data, setData] = useState([])

    const getVehicles = async (count) => {
        try {
            const res = await axios.get("http://localhost:3000/api/vehicles/list", {
                headers: {
                    token: `Bearer ${authService.getAuthToken()}`,
                    count: count
                }
            })
            setData(res.data.result)
        }
        catch (error) {
            setErr(error.response.data.error)
        }
    }

    return {
        err,
        data,
        getVehicles
    }
}