import axios from "axios";

const UpdateWilder = ({id, name, city, refresh}) => {



	return (
		<form onSubmit={(e)=> {
			e.preventDefault();
			axios.put("http://localhost:5000/api/wilder/update", {id: id, name: e.target.name.value, city: e.target.city.value})
			.then((result)=> {
				console.log(result);
				refresh();
			})
			.catch((err)=> {
				console.log(err);
			})
		}}>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" name="name" defaultValue={name}/>
			<label htmlFor="city">City</label>
			<input type="text" id="city" name="city" defaultValue={city}/>
			<button type="submit">Validate modification(s)</button>
		</form>
	)
}

export default UpdateWilder;