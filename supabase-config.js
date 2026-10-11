// =============================================================================
// KRISHAN POS - SUPABASE CLOUD DATABASE CONFIGURATION
// =============================================================================
// You can enter your Supabase Project URL and Anon/Public Key here,
// or configure them directly inside the app UI by clicking the cloud sync badge.
//
// How to get your keys:
// 1. Go to https://supabase.com and create/open your project.
// 2. Go to Project Settings -> API.
// 3. Copy "Project URL" and "anon public" API key.
// =============================================================================

window.SUPABASE_CONFIG = {
    // Enter your project URL here or leave blank to set via UI
    url: (typeof localStorage !== 'undefined' ? localStorage.getItem('krishan_pos_supabase_url') : '') || '',

    // Enter your anon public key here or leave blank to set via UI
    anonKey: (typeof localStorage !== 'undefined' ? localStorage.getItem('krishan_pos_supabase_key') : '') || ''
};

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
            // Also expose as window.sb for convenience
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
