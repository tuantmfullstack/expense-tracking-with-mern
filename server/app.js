import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import expenseRouter from './routes/expenseRoute.js';

const app = express();

dotenv.config({ path: './.env' });

app.use(express.json());
app.use(cors());
app.use('/api/v1/expenses', expenseRouter);

export default app;
