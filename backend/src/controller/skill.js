const dataSource = require("../utils").dataSource;
const Skill = require("../entity/Skill");

module.exports = {
	create: async (req, res) => {
		try {
			const data = await dataSource.getRepository(Skill)
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
			const data = await dataSource.getRepository(Skill).find()
			res.send(data)
		}
		catch (err)  {
			console.log(err)
			res.send("Error while reading")
		}
	},
	update: async (req, res) => {
		try {
			const modify = await dataSource.getRepository(Skill).update(req.body.id, req.body.newData)
			res.send("Succesfully updated")
		}
		catch (err)  {
			console.log(err)
			res.send("Error while updating")
		}

	},
	delete: async (req, res) => {

		try {
			const remove = await dataSource.getRepository(Skill).delete(req.body)
			res.send("Succesfully deleted")
		}
		catch (err) {
			console.log(err)
			res.send("Error while deleting")
		}
	}

}