import './AddOwner.css'
import { useState } from 'react';
import axios from 'axios';

const AddOwner = ({ isOpen, onClose }) => {
    const [user, setUser] = useState({
        fullnames: "",
        NID: '',
        phoneNumber: "",
        address: "",
    })

    function handleOnChange(e) {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleNavigate() {
        console.log(user)
        axios.post('http://localhost:3000/api/owners/create', user)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="modal--overlay">
            <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
                <div className="modal-content">
                    <div className="close">
                        <span onClick={onClose}>&times;</span>
                    </div>
                    <h2>Add New Car Owner</h2>
                    <div className="form">
                        <input type="text" name="fullnames" id="" placeholder='Full Names' value={user.fullnames} onChange={handleOnChange} />
                        <input type="number" name="NID" id="" placeholder='National Id' value={user.NID} onChange={handleOnChange} />
                        <input type="text" name="phoneNumber" id="" placeholder='Phone number' value={user.phoneNumber} onChange={handleOnChange} />
                        <input type="text" name="address" id="" placeholder='Address' value={user.address} onChange={handleOnChange} />
                        <div className="buttons">
                            <input type="submit" name="" id="" value="Cancel" className='cancel' onClick={onClose} />
                            <input type="submit" name="" id="" value="Submit" className='success' onClick={handleNavigate} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddOwner;