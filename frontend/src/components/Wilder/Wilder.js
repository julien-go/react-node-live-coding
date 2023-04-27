import avatar from '../../assets/avatar.png';
import Skill from '../Skill/Skill';
import styles from './Wilder.module.css'


const Wilder = ({name, city, skills}) => {
	console.log(skills)

	return (
		<article className={styles.card}>
			<img src={avatar} alt={`${name}'s avatar`}/>
			<h3>{name}</h3>
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
		</article>
	)
}

export default Wilder;