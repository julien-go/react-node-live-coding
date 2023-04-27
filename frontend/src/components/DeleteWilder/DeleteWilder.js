import axios from 'axios';
import PropTypes from 'prop-types'

const DeleteWilder	= ({id, refresh}) => { 
	const remove = (e) => {
		e.preventDefault();
		axios.delete(`http://localhost:5000/api/wilder/delete/${id}`)
		.then(res => {
			console.log(res);
			console.log(res.data);
			refresh();
		})
		.catch(err => {
			console.log(err);	
	})
}

	return (
		<button onClick={(e) => remove(e)}>Delete</button>
	)
}

DeleteWilder.propTypes = {
	refresh: PropTypes.func.isRequired
}

export default DeleteWilder;