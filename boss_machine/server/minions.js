const express = require('express');
const minionsRouter = express.Router();
const {
	getAllFromDatabase,
	addToDatabase,
	getFromDatabaseById,
	updateInstanceInDatabase,
	deleteFromDatabasebyId,
} = require('./db');

minionsRouter.use('/', (req, res, next) => {
	console.log('minionsRouter accessed at ', Date.now());
	next();
});

minionsRouter.get('/', (req, res, next) => {
	const allMinions = getAllFromDatabase('minions');
	res.send(allMinions);
});

minionsRouter.post('/', (req, res, next) => {
	const newMinion = req.body;
	addToDatabase('minions', minion);
	res.send(newMinion);
});

minionsRouter.get('/:minionId', (req, res, next) => {
	const minionId = req.params.minionId;
	const requestedMinion = getFromDatabaseById('minions', minionId);
	res.send(requestedMinion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
	const updatedMinion = req.body;
	updateInstanceInDatabase('minions', updatedMinion);
	res.status(200).send(updatedMinion);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
	const minionId = req.params.minionId;
	const deletedMinion = deleteFromDatabasebyId('minions', minionId);
	res.send(deletedMinion);
});
module.exports = minionsRouter;
