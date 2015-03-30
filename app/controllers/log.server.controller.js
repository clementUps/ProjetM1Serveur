'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Log = mongoose.model('LogApp'),
	_ = require('lodash');

/**
 * Create a article
 */
exports.create = function(req, res) {
	var log = new Log(req.body);
	var fs = require('fs');
	var track;
        try {
            track = JSON.parse(fs.readFileSync('./app/parsing/main.json', 'utf8'));
            console.log('email');
          /*  track.email = req.body.email;
            console.log('password');
            track.password = req.body.password;*/
            console.log('fin de json');
            track.id = req.body.id;
            log.title = 'test';
          //  log.content = req.body.evenement;
            log.evenement = req.body.evenement;
            track.evenement = req.body.evenement;
            track.action = req.body.action;
            log.action = req.body.action;
            console.log('héhéh coucou  '+req.userFromAndroid);
            log.user = req.userFromAndroid;
            log.save(function(err) {
			if (err) {
				console.log('une erreur est survenue');
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
			});
			} else {
				console.log('j\'enregiste');
				res.json(log);
			}
	});
        } catch (e) {
            console.log('NotFound' + e);
            track = {
            	evenement: 'test',
                action: '',
                id: '',
            };
        }
        console.log(track);
        fs.writeFile('./app/parsing/test.json', JSON.stringify(track));
	/*log.user = req.user;

	log.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(article);
		}
	});*/
};

exports.list = function(req, res) {
	Log.find().sort('-created').populate('user', 'displayName').exec(function(err, Logs) {
		if (err) {
			console.log('rien retourne');
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			console.log('retourne la liste');
			res.json(Logs);
		}
	});
};

exports.logByID = function(req, res, next, id) {
	/*Log.findById(id).populate('user', 'displayName').exec(function(err, log) {
		if (err) return next(err);
		if (!log) return next(new Error('Failed to load article ' + id));
		req.logAndroid = log;
		next();
	});*/
	Log.find().exec(function(err, log) {
		if (err) return next(err);
		if (!log) return next(new Error('Failed to load article ' + id));
		req.logAndroid = log;
		next();
	});
};