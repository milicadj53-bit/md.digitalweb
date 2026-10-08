# MD Digital sajt

Statičan sajt spreman za GitHub Pages ili Cloudflare Pages.

## GitHub Pages
1. Otpremi sadržaj ovog foldera u koren repozitorijuma.
2. Settings → Pages → Deploy from a branch → main / (root).
3. Fajl CNAME već sadrži mddigitalweb.com. Kod registrara domena podesi DNS (A zapisi ka GitHub Pages ili CNAME ka <korisnik>.github.io).
4. Uključi "Enforce HTTPS".

## Cloudflare Pages
Napravi projekat, poveži repozitorijum, build command ostavi prazno, output directory: / (koren).

## Posle objave
- Google Search Console: dodaj domen i pošalji sitemap: https://mddigitalweb.com/sitemap.xml
