const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
const chalk = require('chalk');
const debug = require('debug')('server');

const authRoutes = require('./routes/auth.routes');
const productsRouter = require('./routes/productsRouter');
const userRoutes = require('./routes/user.routes');

require('dotenv').config();
require('./passport/passport.config');
require('./ddbb/mongoose.config');

const server = express();
const port = process.env.PORT || 2021;


server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use(express.urlencoded({ extended: false }));


server.use('/', authRoutes);
server.use('/api/products', passport.authenticate('jwt', { session: false }),
productsRouter,);
server.use('/user', passport.authenticate('jwt', { session: false }),
userRoutes,);

server.listen(port, 
    () => debug(`Server is running in ${chalk.yellow(`localhost:${port}`)}`));