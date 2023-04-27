import axios from 'axios';
import PropTypes from 'prop-types'
import styles from './DeleteWilder.module.css'

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
		<div className={styles.container}>
			<button onClick={(e) => remove(e)}>Delete</button>
		</div>
		
	)
}

DeleteWilder.propTypes = {
	refresh: PropTypes.func.isRequired
}

export default DeleteWilder;