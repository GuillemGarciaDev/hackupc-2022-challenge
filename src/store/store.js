import { configureStore } from '@reduxjs/toolkit';
import app from './app';

export const store = configureStore({
  reducer: { app },
});
