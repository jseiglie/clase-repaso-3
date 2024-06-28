const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			test: false
		},
		actions: {
			editContact: async (formData, id) => {
				try {
					const opt = {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(formData)
					}
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/seiglie/contacts/' + id, opt)
					const data = await resp.json()
					console.log(data)
				} catch (error) {
					console.log('error loading ---> ', error)
				}
			},
			selectContact: (id) => {
				setStore({ edit: getStore().contacts.filter(el => el.id == id)[0] })

			},
			modTest: () => {
				setStore({ test: !getStore().test })
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			addContact: async (formData) => {
				try {
					const opt = {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(formData)
					}
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/seiglie/contacts', opt)
					const data = await resp.json()
					console.log(data)
				} catch (error) {
					console.log('error loading ---> ', error)
				}
			},
			createAgenda: async () => {
				try {
					const opt = {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
					}
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/seiglie', opt)
					const data = await resp.json()
					console.log(data)
				} catch (error) {
					console.log('error loading ---> ', error)
				}
			},
			loadSomeData: async () => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/seiglie')
					const data = await resp.json()
					setStore({ contacts: data.contacts })
				} catch (error) {
					console.log('error loading ---> ', error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
