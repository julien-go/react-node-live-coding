const dataSource = require("../utils").dataSource;
const Grade = require("../entity/Grade");
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");

module.exports = {
	create: async (req, res) => {
		try {
			const wilderFromDb = await dataSource.getRepository(Wilder).findOneBy({id: req.body.wilderId})
			const skillFromDb = await dataSource.getRepository(Skill).findOneBy({name: req.body.skill})

			await dataSource.getRepository(Grade).save({
				grade: req.body.grade,
				skill: skillFromDb,
				wilder: wilderFromDb
			})

			res.send("Created")
		}
		catch (err)  {
			console.log(err)
			res.send("Error while creating")
		}
	},

	read: async (req, res) => {
		try {
			const data = await dataSource.getRepository(Grade).find()
			res.send(data)
		}
		catch (err)  {
			console.log(err)
			res.send("Error while reading")
		}
	},
	update: async (req, res) => {
		try {
			const gradeToUpdate = await dataSource.getRepository(Grade).findOneBy({wilder: {id: req.body.wilderId}, skill: {name: req.body.skill}})
			console.log(gradeToUpdate)
			const modify = await dataSource.getRepository(Grade).update(gradeToUpdate.id, {skill: gradeToUpdate.skill, grade: req.body.grade})
			res.send("Succesfully updated")
		}
		catch (err)  {
			console.log(err)
			res.send("Error while updating")
		}

	},
	delete: async (req, res) => {

		try {
			const remove = await dataSource.getRepository(Grade).delete(req.body)
			res.send("Succesfully deleted")
		}
		catch (err) {
			console.log(err)
			res.send("Error while deleting")
		}
	}

}