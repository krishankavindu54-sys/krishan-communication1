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
    // Supabase Cloud Project URL
    url: (typeof localStorage !== 'undefined' ? localStorage.getItem('krishan_pos_supabase_url') : '') || 'https://vzpwrtabdgdrmfpqsiqf.supabase.co',

    // Supabase anon / public API key
    anonKey: (typeof localStorage !== 'undefined' ? localStorage.getItem('krishan_pos_supabase_key') : '') || 'sb_publishable_Pa_-9c4Qs2XLBwXLZ1OLVQ_TRjDeCOb'
};

// Auto-seed to localStorage so UI displays active project immediately
if (typeof localStorage !== 'undefined') {
    if (!localStorage.getItem('krishan_pos_supabase_url')) {
        localStorage.setItem('krishan_pos_supabase_url', window.SUPABASE_CONFIG.url);
    }
    if (!localStorage.getItem('krishan_pos_supabase_key')) {
        localStorage.setItem('krishan_pos_supabase_key', window.SUPABASE_CONFIG.anonKey);
    }
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
