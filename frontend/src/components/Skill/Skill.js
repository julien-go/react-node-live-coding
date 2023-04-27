import styles from './Skill.module.css'

const Skill = ({name, grade}) => {
	
	return (
		<li className={styles.skill}>
			{name}
			<span className={styles.votes}>{grade}</span>
		</li>
	)
}

export default Skill;