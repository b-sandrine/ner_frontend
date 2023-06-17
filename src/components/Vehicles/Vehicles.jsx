import { useEffect, useState } from 'react'
import './Vehicles.css'
import $ from 'jquery'
import axios from 'axios';

const Vehicles = () => {
    const [data, setData] = useState([]);
    const [isOpen,setIsOpen] = useState(false)

    function openModal () {
        setIsOpen(true)
    }

    function closeModal () {
        setIsOpen(false)
    }

    useEffect(() => {
        axios.get("http://localhost:3000/api/vehicles/create")
            .then((response) => response.data)
            .then((data) => {
                setData(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const $table = $('#myTable');
        const $tbody = $table.find('tbody');

        data.forEach((item) => {
            const row = `
      <tr>
        <td>${item.fullnames}</td>
        <td>${item.email}</td>
        <td>${item.nid}</td>
        <td>${item.phoneNumber}</td>
        <td>${item.address}</td>
      </tr>
    `;

            $tbody.append(row);
        });
    }, [data]);
    
    return (
        <div className="vehicles--container">
            <div className="header">
                <p>Users</p>
                <button onClick={openModal}>Add New User</button>
                {isOpen ? 
                <div className="modal--overlay">
                    <Adduser onClose={closeModal}/>
                </div> : null}
            </div>
            <div className="table">
                <table id="myTable">
                    <thead>
                        <tr>
                            <th>Names</th>
                            <th>Email</th>
                            <th>NID</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    )
}

export default Vehicles;