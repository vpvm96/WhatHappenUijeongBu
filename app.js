import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config.js';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());

app.listen(8080);