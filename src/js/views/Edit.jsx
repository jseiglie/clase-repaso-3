import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";

export const Edit = () => {
    const {store, actions} = useContext(Context);
    const [formData, setFormData] = useState({
        name: store.edit?.name,
        email: store.edit?.email,
        address: store.edit?.address,
        phone: store.edit?.phone
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault() // para que no recargue la pagina
        actions.editContact(formData, store.edit?.id)
    }
    
        return (
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <input className="form-control" type="text" placeholder="name" value={formData.name} name="name" onChange={handleChange} />
                <input className="form-control" type="text" placeholder="email" value={formData.email} name="email" onChange={handleChange} />
                <input className="form-control" type="text" placeholder="phone" value={formData.phone} name="phone" onChange={handleChange} />
                <input className="form-control" type="text" placeholder="address" value={formData.address} name="address" onChange={handleChange} />
                <input type="submit" className="btn btn-primary" />
    {/* 
                <p>name: {formData.name}</p>
                <p>email: {formData.email}</p>
                <p>address: {formData.address}</p> */}
    
                
    
            </form>
        )
    }