import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ name, email, phone, address, contactId }) => {
    const navigate = useNavigate()
    const {store, actions} = useContext(Context);
    
    const handleClick = () => {
        actions.selectContact(contactId)
        navigate('/edit')
    }
    return (
        <div className="card">
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p>
            <button onClick={handleClick}>edit</button>onClick           <button>delete</button>

        </div>
    )
} 