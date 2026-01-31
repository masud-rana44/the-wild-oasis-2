import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vtuxffuqfakalmstyhrd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0dXhmZnVxZmFrYWxtc3R5aHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4MzE4MzUsImV4cCI6MjA4NTQwNzgzNX0.q67LbFGTruIcZtX6xvy3uvEm2_5uPWlKnCEDpbmiFp8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
