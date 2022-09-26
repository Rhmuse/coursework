const express = require('express');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');
const ideasRouter = express.Router();
const {
	getAllFromDatabase,
	addToDatabase,
	getFromDatabaseById,
	updateInstanceInDatabase,
	deleteFromDatabasebyId,
} = require('./db');

ideasRouter.use('/', (req, res, next) => {
	console.log('ideasRouter accessed at ', Date.now());
	next();
});

ideasRouter.get('/', (req, res, next) => {
	const allIdeas = getAllFromDatabase('ideas');
	res.send(allIdeas);
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
	const newIdea = req.body;
	addToDatabase('ideas', newIdea);
	res.send(newIdea);
});

ideasRouter.get('/:ideaId', (req, res, next) => {
	const ideaId = req.params.ideaId;
	const requestedIdea = getFromDatabaseById('ideas', ideaId);
	res.send(requestedIdea);
});

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
	const updatedIdea = req.body;
	updateInstanceInDatabase('ideas', updatedIdea);
	res.send(updatedIdea);
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
	const ideaId = req.params.ideaId;
	const deletedIdea = deleteFromDatabasebyId('ideas', ideaId);
	res.send(deletedIdea);
});

module.exports = ideasRouter;
