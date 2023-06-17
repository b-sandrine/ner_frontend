import './AddVehicle.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Adduser = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullnames: "",
        email: "",
        NID: 0,
        phoneNumber: "",
        address: "",
        username: "",
        password: "",
    })

    function handleOnChange(e) {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleNavigate() {
        console.log(user)
        axios.post('http://localhost:8080/api/create', user)
        .then((response) => {
            console.log(response)
            navigate('/dashboard')
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-content">
                <div className="close">
                    <span onClick={onClose}>&times;</span>
                </div>
                <h2>Add New Car Owner</h2>
                <div className="form">
                    <input type="text" name="fullnames" id="" placeholder='Full Names' value={user.fullnames} onChange={handleOnChange} />
                    <input type="email" name="email" id="" placeholder='Email' value={user.email} onChange={handleOnChange} />
                    <input type="number" name="NID" id="" placeholder='National Id' value={user.NID} onChange={handleOnChange} />
                    <input type="text" name="phoneNumber" id="" placeholder='Phone number' value={user.phoneNumber} onChange={handleOnChange} />
                    <input type="text" name="address" id="" placeholder='Address' value={user.address} onChange={handleOnChange} />
                    <div className="buttons">
                        <input type="submit" name="" id="" value="Cancel" className='cancel' onClick={onClose} />
                        <input type="submit" name="" id="" value="Submit" className='success' onClick={handleNavigate}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adduser;