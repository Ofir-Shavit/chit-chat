import express from 'express';
import * as http from 'http';

const app = express();

const server = http.createServer(app);

export default server;
