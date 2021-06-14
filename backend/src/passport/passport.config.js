const passport = require('passport');
const JWTstrategy = require('passport-jwt');
const localStrategy = require('passport-local');
const User = require('../models/usersModel');

passport.use(
  'signup',
  new localStrategy.Strategy(
    {
      usernameField: process.env.MY_EMAIL,
      passwordField: process.env.MY_PASSWORD,
    },
    async (email, password, done) => {
      try {
        const user = await User.create({ email, password });

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);

passport.use(
  'login',
  new localStrategy.Strategy(
    {
      usernameField: process.env.MY_EMAIL,
      passwordField: process.env.MY_PASSWORD,
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        if (!user.isValidPassword(password)) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: '¡Logged in Successfully!' });
      } catch (error) {
        return done(error);
      }
    },
  ),
);

passport.use(
  new JWTstrategy.Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: JWTstrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);