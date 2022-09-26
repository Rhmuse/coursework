const express = require('express');
const meetingsRouter = express.Router();
const {
	getAllFromDatabase,
	addToDatabase,
	deleteAllFromDatabase,
	createMeeting,
} = require('./db');

meetingsRouter.use('/', (req, res, next) => {
	console.log(
		'meetingsRouter accessed at',
		Date.now(),
		'with a',
		req.method,
		'request.'
	);
	next();
});

meetingsRouter.get('/', (req, res, next) => {
	const allMeetings = getAllFromDatabase('meetings');
	res.send(allMeetings);
});

meetingsRouter.post('/', (req, res, next) => {
	const newMeeting = createMeeting();
	addToDatabase('meetings', newMeeting);
	res.send(newMeeting);
});

meetingsRouter.delete('/', (req, res, next) => {
	deleteAllFromDatabase('meetings');
	res.status(202).send();
});

module.exports = meetingsRouter;
