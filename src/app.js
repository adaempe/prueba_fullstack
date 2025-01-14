import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js'
import pokeRoutes from './routes/pokes.routes.js'

const app =express();

const corsOptions={
  origin: 'http://localhost:5173',
    credentials: true,
  
}

app.use(
    cors(corsOptions)
  )

  
  

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/api',authRoutes);
app.use('/api',pokeRoutes);

export default app;


