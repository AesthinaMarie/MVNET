import { createClient } from '@supabase/supabase-js'
const supabaseUrl =  "https://lyxfmmjxsikhfhatehga.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eGZtbWp4c2lraGZoYXRlaGdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5MTk3NTYsImV4cCI6MjA0MjQ5NTc1Nn0.w18BhQ1r34VdVSnTE1FSskV7JS40urYXPngvU82cD8E"
export const supabase = createClient(supabaseUrl, supabaseKey)
