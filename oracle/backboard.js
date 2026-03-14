// backboard.js — Backboard SDK client singleton
import { BackboardClient } from 'backboard-sdk';
import './env.js';

const apiKey = process.env.BACKBOARD_API_KEY;
const client = apiKey ? new BackboardClient({ apiKey }) : null;

export default client;