
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://bfyyvslerwebvlkawbyw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeXl2c2xlcndlYnZsa2F3Ynl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxODM5NTksImV4cCI6MjAyNTc1OTk1OX0.q-AQo2asSIQ5c8rX3Hs-NjdQr8QrBhgf8EN0pfxYfiI";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase