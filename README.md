# SahApp PWA — GitHub + Vercel Kurulum

## 📁 Dosya Yapısı
```
SahApp_PWA/
├── index.html       ← Ana uygulama
├── manifest.json    ← PWA manifest
├── sw.js            ← Service Worker (offline)
├── vercel.json      ← Vercel ayarları
└── icons/           ← Tüm ikon boyutları
    ├── apple-touch-icon.png
    ├── favicon.ico
    ├── icon-192x192.png
    ├── icon-512x512.png
    └── ...
```

---

## 🚀 Adım 1 — GitHub'a Yükle

1. **github.com** → "New repository" → isim: `sahapp`
2. Repository'yi local'e klonla:
   ```bash
   git clone https://github.com/KULLANICI_ADIN/sahapp.git
   cd sahapp
   ```
3. Bu klasördeki TÜM dosyaları kopyala:
   ```bash
   cp -r /path/to/SahApp_PWA/* .
   git add .
   git commit -m "SahApp PWA v1"
   git push origin main
   ```

---

## 🚀 Adım 2 — Vercel'e Bağla

1. **vercel.com** → "Add New Project"
2. GitHub repo'yu seç: `sahapp`
3. Framework: **Other** (framework yok, static site)
4. Root Directory: `.` (değiştirme)
5. **Deploy** → birkaç saniye sonra URL alırsın

Örnek URL: `https://sahapp.vercel.app`

---

## 📱 iOS'a Ana Ekrana Ekleme

1. iPhone/iPad Safari'de uygulamanın URL'sine git
2. Alt çubukta **Paylaş** (□↑) ikonuna dokun
3. **"Ana Ekrana Ekle"** seç
4. İsim: **SahApp** → **Ekle**

✅ Artık gerçek uygulama gibi:
- Tam ekran açılır (tarayıcı çubuğu görünmez)
- Uygulama ikonu ana ekranda görünür
- Offline çalışır (daha önce yüklenen veriler)
- localStorage ile veriler kalıcı saklanır

---

## ✅ PWA Özellikleri

| Özellik | Durum |
|---------|-------|
| Tam ekran (standalone) | ✅ |
| iOS ana ekran ikonu | ✅ |
| Splash screen rengi | ✅ #1a1a2e |
| Status bar şeffaf | ✅ |
| Offline tile cache | ✅ |
| Safe area (notch) | ✅ |
| Android Chrome desteği | ✅ |
| iOS Safari desteği | ✅ |
