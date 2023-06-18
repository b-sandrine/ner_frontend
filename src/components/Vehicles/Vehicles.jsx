import { useEffect, useState } from 'react'
import './Vehicles.css'
import $ from 'jquery'
import axios from 'axios';
import AddVehicle from '../../models/AddVehicle/AddVehicle';
import authService from '../../auth/authService';

const Vehicles = () => {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    // function getToken () {
    //     const token = authService.
    // }

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    {console.log("The token is" + authService.getAuthToken)}

    useEffect(() => {
        axios.get("http://localhost:3000/api/vehicles/list", {
            headers: {
                token: `Bearer ${authService.getAuthToken()}`
            }
        })
            .then((response) => response.data)
            .then((data) => {
                setData(data.result)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const $table = $('#myTable');
        const $tbody = $table.find('tbody');

        Object.keys(data).forEach((key) => {
            const item = data[key];
            const row = `
              <tr>
                <td>${item.chasisNumber}</td>
                <td>${item.manufacturer}</td>
                <td>${item.year}</td>
                <td>${item.price}</td>
                <td>${item.plateNumber}</td>
                <td>${item.model}</td>
                <td>${item.owner}</td>
              </tr>
            `;

            $tbody.append(row);
        });
    }, [data]);

    return (
        <div className="vehicles--container">
            <div className="header">
                <p>Vehicles</p>
                <button onClick={openModal}>Add New Vehicle</button>
                {isOpen ?
                    <div className="modal--overlay">
                        <AddVehicle onClose={closeModal} />
                    </div> : null}
            </div>
            <div className="table">
                <table id="myTable">
                    <thead>
                        <tr>
                            <th>Chasis Number</th>
                            <th>Manufacture Company</th>
                            <th>Manufacture Year</th>
                            <th>Price</th>
                            <th>Plate Number</th>
                            <th>Model Name</th>
                            <th>Owner</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    )
}

export default Vehicles;