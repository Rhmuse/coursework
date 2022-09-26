const express = require('express');
const minionsRouter = express.Router();
const {
	getAllFromDatabase,
	addToDatabase,
	getFromDatabaseById,
	updateInstanceInDatabase,
	deleteFromDatabasebyId,
} = require('./db');

//Normalizing Middleware
const normalizeInput = (req, res, next) => {
	const minionId = req.params.minionId;
	if (typeof minionId !== 'number') {
		Number(minionId);
	}
	req.minionId = minionId;
	next();
};

minionsRouter.use('/', (req, res, next) => {
	console.log('minionsRouter accessed at ', Date.now());
	next();
});

minionsRouter.get('/', (req, res, next) => {
	const allMinions = getAllFromDatabase('minions');
	res.send(allMinions);
});

minionsRouter.post('/', normalizeInput, (req, res, next) => {
	const newMinion = req.body;
	addToDatabase('minions', minion);
	res.status(201).send(newMinion);
});

minionsRouter.get('/:minionId', (req, res, next) => {
	const requestedMinion = getFromDatabaseById('minions', req.minionId);
	if (!requestedMinion) {
		res.status(404).send();
	}
	res.send(requestedMinion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
	const updatedMinion = req.body;
	updateInstanceInDatabase('minions', updatedMinion);
	res.status(200).send(updatedMinion);
});

minionsRouter.delete('/:minionId', normalizeInput, (req, res, next) => {
	const deletedMinion = deleteFromDatabasebyId('minions', req.minionId);
	res.status(204).send(deletedMinion);
});

module.exports = minionsRouter;
