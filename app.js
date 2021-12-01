import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import snsRouter from './router/ujbSnsRouter.js';
import userRouter from './router/userRouter.js';
import freeBoardRouter from './router/freeBoardRouter.js';
import qnaBoardRouter from './router/qnaBoardRouter.js';
import issueBoardRouter from './router/issueBoardRouter.js';
import { config } from './config.js';
import { initSocket } from './connection/socket.js';
import { sequelize } from './db/database.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/sns', snsRouter);
app.use('/user', userRouter);
app.use('/free', freeBoardRouter);
app.use('/qna', qnaBoardRouter);
app.use('/issue', issueBoardRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

sequelize.sync().then(() => {
  const server = app.listen(config.host.port);
  initSocket(server);
});
