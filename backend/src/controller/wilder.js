const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");
const Grade = require("../entity/Grade");

module.exports = {
	create: async (req, res) => {
		try {
			const data = await dataSource.getRepository(Wilder)
			await data.save(req.body)
			res.send("Created")
		}
		catch (err)  {
			console.log(err)
			res.send("Error while creating")
		}
	},

	read: async (req, res) => {
		try {
			const grades = await dataSource.getRepository(Grade).find()
			const wilders = await dataSource.getRepository(Wilder).find()

			const data = wilders.map((wilder) => {
				console.log(wilder)
				const wilderGrades = grades.filter((grade) => grade.wilder.id === wilder.id);
				console.log(wilderGrades)
				const wilderGradesLean = wilderGrades.map((el) => {
					return {title: el.skill.name, grade: el.grade}
				});

				return {...wilder, skills: wilderGradesLean}
			})
			res.send(data)
		}
		catch (err)  {
			console.log(err)
			res.send("Error while reading")
		}
	},
	update: async (req, res) => {
		try {
			await dataSource.getRepository(Wilder).update(req.body.id, req.body.newData)
			res.send("Succesfully updated")
		}
		catch (err)  {
			console.log(err)
			res.send("Error while updating")
		}

	},
	delete: async (req, res) => {
		console.log(req.params)

		try {
			await dataSource.getRepository(Wilder).delete(req.params)
			res.send("Succesfully deleted")
		}
		catch (err)  {
			console.log(err)
			res.send("Error while deleting")
		}
	},
}