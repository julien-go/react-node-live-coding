import avatar from '../../assets/avatar.png';
import Skill from '../Skill/Skill';
import styles from './Wilder.module.css'
import DeleteWilder from '../DeleteWilder/DeleteWilder';
import PropTypes from 'prop-types'
import { useState } from 'react';
import UpdateWilder from '../UpdateWilder/UpdateWilder';


const Wilder = ({name, city, skills, id, refresh}) => {
	const [showUpdate, setShowUpdate] = useState(false);

	const showUpdateHandler = () => {
		setShowUpdate(!showUpdate)
	}


	return (
		<article className={styles.card}>
			<img src={avatar} alt={`${name}'s avatar`}/>
			<h3>{name}</h3>
			{city && <p>City: {city}</p>}
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
			</p>
			<h4>Wild Skills</h4>
			<ul className={styles.skills}>
				{skills.map((skill, i) => <Skill key={i} name={skill.title} grade={skill.grade}/>)}
			</ul>
			<div className={styles.container}>
				<button onClick={(e)=> showUpdateHandler()}>Update</button>
				<DeleteWilder id={id} refresh={refresh}/>
			</div>
			{showUpdate && <UpdateWilder id={id} name={name} city={city} refresh={refresh} showUpdateHandler={showUpdateHandler}/>}
			
		</article>
	)
}

Wilder.propTypes = {
	name: PropTypes.string.isRequired,
	city: PropTypes.string,
	skills: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		grade: PropTypes.number.isRequired
	})).isRequired,
	id: PropTypes.number.isRequired,
	refresh: PropTypes.func.isRequired
}

export default Wilder;