import { useState } from "react";
import authService from "../auth/authService";
import axios from 'axios';

export default function useCarOwners() {
    const [data, setData] = useState([]);
    const [err, setErr] = useState('');

    const getAllCarOwners = async (count) => {
        try {
            const res = await axios.get("http://localhost:3000/api/owners/list", {
                headers: {
                    token: `Bearer ${authService.getAuthToken()}`,
                    count: count
                }
            });
            setData(res.data.result)
        }
        catch (error) {
            setErr(error.response.data.error)
        }
    }

    return {
        err,
        getAllCarOwners,
        data
    }
}

// export default function handleOwnerDelete() {
//     axios.delete(`http://localhost/api/owners/delete/${item._id}`, {
//         headers: {
//             token: `Bearer ${authService.getAuthToken()}`
//         }
//     })
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }
