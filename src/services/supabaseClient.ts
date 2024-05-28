import { createClient } from "@supabase/supabase-js";

import { Database } from "../../types/supabase";

export const supabaseUrl = "https://nnkmsozfxadunqngssge.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ua21zb3pmeGFkdW5xbmdzc2dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4Mzk2MzcsImV4cCI6MjAzMjQxNTYzN30.YSsU-SXWYuXUK5XjQZg3F386bxb-_YLHS0VMUpuj-co";
const supabase = createClient<Database>(supabaseUrl, supabaseKey!);

export default supabase;
