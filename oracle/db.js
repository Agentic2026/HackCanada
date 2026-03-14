// db.js — Supabase client
import { createClient } from '@supabase/supabase-js';
import './env.js';

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_KEY;

// Create a real client when credentials are available; otherwise export null
// so the server can still start for health checks and non-Supabase endpoints.
const supabase = url && key ? createClient(url, key) : null;

export default supabase;