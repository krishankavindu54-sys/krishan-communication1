// =============================================================================
// KRISHAN POS - SUPABASE CLOUD DATABASE CONFIGURATION
// =============================================================================

window.SUPABASE_CONFIG = {
    // Supabase Cloud Project URL
    url: 'https://vzpwrtabdgdrmfpqsiqf.supabase.co',

    // Supabase anon / public API key
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6cHdydGFiZGdkcm1mcHFzaXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3MDE4MzMsImV4cCI6MjEwNzI3NzgzM30.zv4PS68W29FlkgK9pQEkmdXhUL53gUHsYU_4C5j4i1M'
};

// Always ensure localStorage has the active project credentials
if (typeof localStorage !== 'undefined') {
    localStorage.setItem('krishan_pos_supabase_url', window.SUPABASE_CONFIG.url);
    localStorage.setItem('krishan_pos_supabase_key', window.SUPABASE_CONFIG.anonKey);
}

// Initialize global Supabase client
(function initSupabase() {
    try {
        const url = (window.SUPABASE_CONFIG.url || '').trim();
        const key = (window.SUPABASE_CONFIG.anonKey || '').trim();

        if (url && key && window.supabase && typeof window.supabase.createClient === 'function') {
            const client = window.supabase.createClient(url, key, {
                auth: { persistSession: true, autoRefreshToken: true },
                realtime: { params: { eventsPerSecond: 10 } }
            });
            window.supabaseClient = client;
            window.sb = client;
            console.log('⚡ [Supabase] Connected to:', url);
        } else {
            window.supabaseClient = null;
            window.sb = null;
        }
    } catch (err) {
        console.warn('⚠️ [Supabase] Init error:', err.message);
        window.supabaseClient = null;
        window.sb = null;
    }
})();
