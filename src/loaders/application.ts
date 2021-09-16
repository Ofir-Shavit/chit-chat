import express from 'express';
import * as http from 'http';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import config from '../config';
import router from '../api';

const app = express();

app.use(morgan('dev'));
app.use(cors({ origin: `http://${config.clientHost}` }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

const server = http.createServer(app);

export default server;
