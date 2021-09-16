import express from 'express';
import * as http from 'http';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import config from '../config';
import router from '../api';

declare module 'express-session' {
    interface Session {
        userId: string;
    }
}

const app = express();

app.use(morgan('dev'));
app.use(cors({ origin: `http://${config.clientHost}` }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        maxAge: 60000,
        sameSite: false
    }
}));

app.use(router);

const server = http.createServer(app);

export default server;
