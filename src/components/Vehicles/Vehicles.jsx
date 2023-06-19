import { useEffect, useState } from 'react'
import './Vehicles.css'
import AddVehicle from '../../models/AddVehicle/AddVehicle';
import setVehicles from '../../stores/VehicleOps';
import Pagination from '../Pagination/Pagination';

const Vehicles = () => {
    const [isOpen, setIsOpen] = useState(false)

    const { err, data, getVehicles } = setVehicles();
    const [count, setCount] = useState(1)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    useEffect(() => {
        getVehicles(count)
    }, [count])

    return (
        <div className="vehicles--container">
            {err && alert(`${err}`)}
            <div className="header">
                <p>Vehicles</p>
                <button onClick={openModal}>Add New Vehicle</button>
                {isOpen ?
                    <div className="modal--overlay">
                        <AddVehicle onSuccess={() => [getVehicles()]} onClose={closeModal} />
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
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.chasisNumber}</td>
                                        <td>{item.manufacturer}</td>
                                        <td>{item.year}</td>
                                        <td>{item.price}</td>
                                        <td>{item.plateNumber}</td>
                                        <td>{item.model}</td>
                                        <td>{item.owner}</td>
                                        <td>
                                            <a href='#'>Update</a>
                                            <a href='#'>Delete</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <Pagination count={count} setCount={setCount} />
            </div>
        </div>
    )
}

export default Vehicles;