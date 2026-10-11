# 🏪 Krishan Communication & Studio - Supabase Serverless Cloud POS

මෙම POS පද්ධතිය backend server එකක් හෝ Node.js නොමැතිව, **100% Serverless** ක්‍රමයට කෙලින්ම **Supabase Free Cloud Database** එක සමඟ සම්බන්ධ වී ක්‍රියාත්මක වේ. 

පරිගණක (PC), ලැප්ටොප් (Laptop), සහ ස්මාර්ට් ජංගම දුරකථන (Smartphones / Tablets) ඕනෑම තැනක සිට Live Realtime Sync මඟින් බිල්පත් සහ තොග කළමනාකරණය කළ හැක.

---

## 🔑 Default Login Credentials (පෙරනිමි මුරපද)

| Role (තනතුර) | Username | Password | විස්තර |
| :--- | :--- | :--- | :--- |
| **Administrator (හිමිකරු)** | `admin` | `admin123` | 🛡️ සියලුම වාර්තා, Stock සහ සැකසුම් සඳහා ප්‍රවේශය |
| **Cashier (කැෂියර්)** | `cashier` | `cashier123` | ⚡ වේගවත් බිල්පත් නිකුත් කිරීම |

---

## 🚀 Supabase Cloud එකට සම්බන්ධ කරගන්නා ආකාරය (3-Step Setup Guide)

### පියවර 1: Supabase Database Tables සාදා ගැනීම
1. [supabase.com](https://supabase.com) වෙත ගොස් නොමිලේ ගිණුමක් සාදා (හෝ Login වී) **New Project** එකක් ආරම්භ කරන්න.
2. වම්පස Menu එකෙන් **SQL Editor** වෙත යන්න.
3. මෙම Folder එකේ ඇති **`supabase-schema.sql`** ගොනුවේ ඇති සියලුම SQL කේත Copy කර SQL Editor එකට Paste කර **Run** කරන්න.
4. එවිට POS එකට අවශ්‍ය සියලුම Tables (`items`, `sales`, `repairs`, `expenses`, `creditors`, `settings`, `photo_frames`, ආදී) සහ Realtime එක ක්ලික් එකෙන් සෑදේ.

### පියවර 2: Project URL & Anon Key ලබා ගැනීම
1. Supabase Dashboard හි **Project Settings** -> **API** වෙත යන්න.
2. එහි ඇති:
   - **Project URL** (උදා: `https://xyzproject.supabase.co`)
   - **Project API Keys -> anon / public key** (උදා: `eyJhbGciOiJIUzI1NiIsIn...`) Copy කරගන්න.

### පියවර 3: POS එකට Credentials ඇතුළත් කිරීම
ක්‍රම දෙකකින් සිදු කළ හැක:
- **ක්‍රමය 1 (පහසුම ක්‍රමය):** බ්‍රව්සරයෙන් **`index.html`** විවෘත කරන්න. Header එකේ ඇති **"Supabase Cloud Status"** badge එක ක්ලික් කර **"Configure Supabase Project"** ඔබන්න. ඔබගේ URL සහ Anon Key paste කර **Save & Connect** කරන්න.
- **ක්‍රමය 2:** Folder එකේ ඇති **`supabase-config.js`** ගොනුව විවෘත කර URL සහ Key එක paste කරන්න:
  ```javascript
  window.SUPABASE_CONFIG = {
      url: 'https://your-project.supabase.co',
      anonKey: 'your-anon-public-key'
  };
  ```

---

## 📁 ගොනු ව්‍යුහය (Clean Project Structure)

```
f:\pos\
├── index.html            # ප්‍රධාන POS බිල්පත් පද්ධතිය (Main POS Billing Interface)
├── login.html            # පරිශීලක Login පිටුව (Authentication Screen)
├── catalog.html          # පාරිභෝගිකයින්ට බඩු සහ මිල බැලීමට Digital Catalog
├── app.js                # ප්‍රධාන Frontend Logic සහ Supabase Direct Sync Client
├── supabase-config.js    # Supabase Project URL & Anon Key සැකසුම් ගොනුව
├── supabase-schema.sql   # Supabase SQL Tables සහ Policies සාදන SQL Script එක
├── manifest.json         # Progressive Web App (PWA) Manifest
├── sw.js                 # Offline Caching සඳහා Service Worker
├── favicon.ico           # වෙබ් අඩවි Icon එක
└── assets/               # Icons සහ Standalone QR Code Engine
```

---

## 💡 ප්‍රධාන වාසි (Key Advantages)

1. **No Backend Server Required:** Node.js, Express, හෝ Terminal / Background server ක්‍රියාත්මක කිරීමට අවශ්‍ය නැත. `index.html` කෙලින්ම බ්‍රව්සරයෙන් ක්‍රියාත්මක වේ.
2. **Free Cloud Database:** Supabase හි 100% නොමිලේ Cloud Database එක මත සියලුම දත්ත සුරක්ෂිත වේ.
3. **Instant Live Sync:** එක් Phone එකකින් හෝ PC එකකින් විකිණූ බඩුවක Stock එක සහ Sale එක අනෙක් සියලුම Devices වල ක්ෂණිකව Realtime Update වේ.
4. **Offline Support (Dexie/IndexedDB):** අන්තර්ජාලය තාවකාලිකව විසන්ධි වුවද බිල්පත් දැමිය හැකි අතර, සම්බන්ධතාවය ලැබුණු පසු ස්වයංක්‍රීයව Cloud එකට Sync වේ.
5. **Customer QR Catalog:** පාරිභෝගිකයින්ට Phone Camera එකෙන් Scan කර බඩු වර්ග සහ නවතම මිල ගණන් බැලිය හැක.
