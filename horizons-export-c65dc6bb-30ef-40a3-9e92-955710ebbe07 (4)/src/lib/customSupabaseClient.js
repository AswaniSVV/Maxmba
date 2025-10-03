import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fefrqucgeiztzmyzgioc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlZnJxdWNnZWl6dHpteXpnaW9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2NzY5MzAsImV4cCI6MjA3NDI1MjkzMH0.273Rg6hFgBSNOLE2T4C0siOaCeAiEHw8Htmg1X0HntQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);