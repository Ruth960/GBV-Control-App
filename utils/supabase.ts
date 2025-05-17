import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';

const supabaseUrl ='https://doooyjwlnetpsxarzysa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvb295andsbmV0cHN4YXJ6eXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MTc1NDAsImV4cCI6MjA2Mjk5MzU0MH0.TYwzI-kh8WqL1Y2fJ7TE7ybS3PSlctFz-HujqKG7MNg';

const isWeb = Platform.OS === 'web';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
 auth: {
    storage: isWeb
      ? undefined // Use default (localStorage) on web
      : AsyncStorage, // Use AsyncStorage on native
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: isWeb,
  },
});
