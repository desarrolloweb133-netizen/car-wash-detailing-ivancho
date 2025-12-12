import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase
// Se utilizan las credenciales proporcionadas para conectar con el backend.
const supabaseUrl = 'https://bkcrqcyyiekcrpgdgqra.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrY3JxY3l5aWVrY3JwZ2RncXJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxNTUxMjYsImV4cCI6MjA4MDczMTEyNn0.i0wBmKEawiDti2Q9MtmshBQ5c0KvDj6rDDKegoF6KiI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);