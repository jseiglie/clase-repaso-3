import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Formulario } from "../component/form.jsx";
import { Separator } from "../component/separator.jsx";
import { Card } from "../component/Card.jsx";

export const Home = () => {
	const navigate = useNavigate()
	const { store, actions } = useContext(Context)



	return (
		<div className="text-center mt-5">

			<Separator />
			<Formulario />

			<Separator />


			{store.contacts?.map(el => <Card key={el.id} contactId={el.id} name={el.name} address={el.address} phone={el.phone} email={el.email} />)}


			<Separator />

			<Link to={'/contact'}>
				ir a contactos
			</Link>
			{store.test ? <p>verdadero</p> : <p>falso</p>}
			<button onClick={() => actions.modTest()}>poner verdadero</button>
			<button onClick={() => navigate('/demo')}>ir a demo</button>
			<Separator />

		</div>
	);
}
