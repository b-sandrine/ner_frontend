import AddOwner from '../../models/AddOwner/AddOwner'
import axios from 'axios';
import { useState, useEffect } from 'react';

import $ from 'jquery'
import './Owners.css'

export default function Owners() {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const token = localStorage.getItem('token')
    const [err, setErr] = useState('')
    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    useEffect(() => {
        axios.get("http://localhost:3000/api/owners/list", {
            headers: {
                token: `Bearer ${token}`
            }
        })
            .then((response) => response.data)
            .then((data) => {
                setData(data.result)
                console.log(data.result)
            })
            .catch(error => {
                console.log(error)
                setErr(error.response.data.error)
            })
    }, [])

    useEffect(() => {
        const $table = $('#myTable');
        const $tbody = $table.find('tbody');
      
        Object.keys(data).forEach((key) => {
          const item = data[key];
          const row = `
            <tr>
              <td>${item.fullnames}</td>
              <td>${item.NID}</td>
              <td>${item.phoneNumber}</td>
              <td>${item.address}</td>
            </tr>
          `;
      
          $tbody.append(row);
        });
      }, [data]);
      
    return (
        <div className="owners--container">
            {err && alert(`${err}`)}
            <div className="header">
                <p>Owners</p>
                <button onClick={openModal}>Add New Owner</button>
                {isOpen ?
                        <AddOwner onClose={closeModal} />
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
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    )
}