import axios from "axios";
import PropTypes from 'prop-types'

const UpdateWilder = ({id, name, city, refresh, showUpdateHandler}) => {

	return (
		<form onSubmit={(e)=> {
			e.preventDefault();
			axios.put("http://localhost:5000/api/wilder/update", {id: id, name: e.target.name.value, city: e.target.city.value})
			.then((result)=> {
				console.log(result);
				refresh();
				showUpdateHandler();
			})
			.catch((err)=> {
				console.log(err);
			})
		}}>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" name="name" defaultValue={name}/>
			<label htmlFor="city">City</label>
			<input type="text" id="city" name="city" defaultValue={city}/>
			<button type="submit">Validate</button>
		</form>
	)
}

UpdateWilder.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	city: PropTypes.string,
	refresh: PropTypes.func.isRequired,
	showUpdateHandler: PropTypes.func.isRequired
}

export default UpdateWilder;