'use strict';

const AuthController = require('./auth.controller');
const ProfileController = require('./profile.controller');
const UserController = require('./user.controller');
const SharedController = require('./shared.controller');
const TypeFieldController = require('./type-field.controller');

module.exports = {
   AuthController,
   ProfileController,
   UserController,
   SharedController,
   TypeFieldController
};