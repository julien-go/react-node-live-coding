import styles from './Skill.module.css'
import PropTypes from 'prop-types'

const Skill = ({name, grade}) => {
	
	return (
		<li className={styles.skill}>
			{name}
			<span className={styles.votes}>{grade}</span>
		</li>
	)
}

Skill.propTypes = {
	name: PropTypes.string.isRequired,
	grade: PropTypes.number.isRequired
}

export default Skill;