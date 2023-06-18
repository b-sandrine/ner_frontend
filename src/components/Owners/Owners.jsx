import AddOwner from '../../models/AddOwner/AddOwner'
import { useState, useEffect } from 'react';
import './Owners.css'
import useCarOwners from '../../stores/OwnerOps';

export default function Owners() {

    const [isOpen, setIsOpen] = useState(false)
    const {
        err,
        getAllCarOwners,
        data
    } = useCarOwners();

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }


    useEffect(() => {
        getAllCarOwners()
    }, [])

    return (
        <div className="owners--container">
            {err && alert(`${err}`)}
            <div className="div1">
                <div className="header">
                    <p>Owners</p>
                    <button onClick={openModal}>Add New Owner</button>
                    {isOpen ?
                        <AddOwner onSuccess={() => [
                            getAllCarOwners()
                        ]} isOpen={openModal} onClose={closeModal} />
                        : null}
                </div>
                <div className="table">
                    <table id="myTable">
                        <thead>
                            <tr>
                                <th>Names</th>
                                <th>NID</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.fullnames}</td>
                                            <td>{item.NID}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <a href="/owners/${item._id}/edit">Update</a>
                                                <a href="#" >Delete</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* <div className="div2">
                <div className="item">
                    {
                        data?.map((item) => {
                            return (
                                <>
                                    <p>Full names: {item.fullnames}</p>
                                    <p>NID: {item.NID}</p>
                                    <p>NID: {item.phoneNumber}</p>
                                    <p>NID: {item.address}</p>
                                </>
                            )
                        })
                    }
                </div>
            </div> */}
        </div>
    )
}