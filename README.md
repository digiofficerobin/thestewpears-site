# The Stew Pears — statische website

Dit is een simpele, snelle, statische website als visitekaartje voor de band **The Stew Pears**.

## Bestanden
- `index.html` — één-pagina site met secties: Home, Over, Media, Agenda, Contact
- `assets/css/styles.css` — styling in retro jaren ’80/’90 stijl
- `assets/js/main.js` — klein beetje JS voor menu en smooth scroll
- `CNAME` — bevat `www.thestewpears.nl` voor GitHub Pages custom domain

## Lokale preview
Open `index.html` direct in je browser of start een simpele server:
```bash
python3 -m http.server 8080
```
Ga daarna naar http://localhost:8080

## Publiceren op GitHub Pages (gratis)
1. Maak een nieuwe repository, bijvoorbeeld `thestewpears-site`.
2. Upload alle bestanden uit deze map.
3. Ga naar **Settings » Pages** en kies **Deploy from a branch** (branch: `main`, folder: `/root`).
4. Wacht tot de site live is op `https://<jouw-gebruikersnaam>.github.io/<repo>`.
5. Stel onder **Settings » Pages** bij **Custom domain** in: `www.thestewpears.nl` (dit maakt/actualiseert het `CNAME`-bestand automatisch).
6. Zet **Enforce HTTPS** aan zodra beschikbaar.

## DNS-instellingen (bij je domeinprovider)
- **CNAME** voor `www` → `<jouw-gebruikersnaam>.github.io`  
- (Optioneel) **A-records** voor apex `thestewpears.nl` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

> DNS kan tot 24 uur nodig hebben om te propagaten. Als alles goed staat, kun je HTTPS forceren in GitHub.

## Tips
- Vervang `VIDEO_ID` in `index.html` door de echte YouTube-id.
- Vervang social links en e-mail.
- Plaats echte foto’s in `assets/img/` en verwijs ernaar in de gallery.

Succes! ✨
"# thestewpears-site" 
