# Alternatywa Piękna Landing

Zbuduj nowoczesny, elegancki, jednostronicowy landing page (po polsku) dla studia urody "Alternatywa Piękna" w Swarzędzu. Głównym celem strony jest skłonienie odwiedzających do rezerwacji wizyty przez Booksy lub telefonicznie.

## LOGO (WAŻNE)
Do czatu dołączyłem plik z logo. Użyj go dokładnie jako logo strony, bez przerysowywania i zmieniania. Logo to czarna ilustracja liniowa: twarz z brwią i okiem, dłoń z czerwonymi paznokciami i czerwone usta, z napisem "ALTERNATYWA PIĘKNA". Umieść je:
- w pasku nawigacji (wysokość ok. 48–56 px, obok lub zamiast nazwy tekstowej),
- w hero jako większy element graficzny lub w stopce,
- jako favicon i obraz Open Graph.
Jeśli logo ma białe tło, dopasuj sekcje tak, żeby dobrze z nim współgrały (białe/kremowe tło pod logo, bez brzydkich białych prostokątów na kolorowych sekcjach).

## DANE FIRMY
- Nazwa: Alternatywa Piękna (Studio Urody)
- Adres: Os. Raczyńskiego 5, Swarzędz
- Telefon: 511 353 604 (link tel:511353604)
- Instagram: @alternatywapiekna (https://instagram.com/alternatywapiekna)
- Facebook: https://www.facebook.com/alternatywapiekna
- Rezerwacje online (Booksy): https://alternatywapiekna.booksy.com/h/
- Opinie: 98% poleca (33 opinie), link do https://www.facebook.com/alternatywapiekna/reviews

## GODZINY OTWARCIA
Poniedziałek–Piątek: 07:00–18:00
Sobota: zamknięte
Niedziela: zamknięte
Dodaj dynamiczny znacznik "Otwarte teraz" / "Zamknięte" (zielona/czerwona kropka), wyliczany na podstawie aktualnej godziny i dnia tygodnia (strefa czasowa Europe/Warsaw). Wyróżnij w tabeli dzisiejszy dzień.

## USŁUGI (3 główne)
1. Makijaż permanentny brwi
2. Stylizacja paznokci metodą żelową
3. Pedicure
Każda usługa jako karta z ikoną (lucide-react), krótkim, zachęcającym opisem (2 zdania, napisz je sam) oraz przyciskiem "Umów wizytę" prowadzącym do Booksy. Nie wymyślaj cen.

## STYL I KLIMAT (dopasowany do logo)
- Elegancki, kobiecy, wyrazisty, premium. Minimalistyczny, w klimacie czarno-białej ilustracji liniowej z logo i czerwonym akcentem.
- Paleta: biel/złamana biel (#FFFFFF, #FAF8F6) jako tło, czerń/głęboki grafit (#1A1A1A) na tekst i nagłówki, głęboka czerwień z paznokci i ust (#B3122A, hover #8F0E21) jako kolor przycisków i akcentów, delikatny pudrowy róż (#F3E3E0) jako tło wybranych sekcji. Czerwień stosuj oszczędnie, żeby zostało premium.
- Typografia: elegancki szeryfowy font do nagłówków (Playfair Display lub Cormorant Garamond), czysty sans-serif do treści (Inter lub Montserrat)
- Cienkie linie i subtelne ozdobniki nawiązujące do kreski z logo, zaokrąglone rogi, miękkie cienie, dużo białej przestrzeni, subtelne animacje fade-in przy scrollu
- W pełni responsywny, mobile-first (większość klientek wejdzie z telefonu)

## STRUKTURA STRONY
1. **Pasek nawigacji (sticky):** logo, linki kotwiczne (Usługi, Higiena, Opinie, Kontakt), przycisk "Umów wizytę". Na mobile menu hamburger.
2. **Hero:** nagłówek np. "Piękno, które podkreśla Ciebie", podtytuł: "Makijaż permanentny, stylizacja paznokci i pedicure w Swarzędzu". Dwa przyciski: "Zarezerwuj w Booksy" (czerwony, główny) i "Zadzwoń: 511 353 604" (drugorzędny, obrys). Znacznik "Otwarte teraz". Po prawej na desktopie duże logo/ilustracja, na mobile pod tekstem.
3. **Usługi:** 3 karty opisane wyżej.
4. **O studiu:** krótka sekcja (3–4 zdania) o indywidualnym podejściu i dbałości o detale, w klimacie kameralnego studia urody. Bez zmyślania nagród i certyfikatów.
5. **Higiena i bezpieczeństwo:** osobna wyróżniona sekcja "Sterylność, na której możesz polegać". Napisz, że wszystkie narzędzia są sterylizowane w autoklawie. Dodaj 3 punkty z ikonami: sterylizacja narzędzi w autoklawie, czystość stanowiska, bezpieczeństwo i komfort klientki. Nie podawaj żadnych norm ani certyfikatów, których nie znam.
6. **Opinie:** duży blok "98% poleca" i "33 opinie" z gwiazdkami oraz przycisk "Zobacz opinie na Facebooku". Nie wymyślaj cytatów klientek.
7. **Galeria:** siatka 6 placeholderów zdjęć (brwi PMU, paznokcie, pedicure) z komentarzem w kodzie, gdzie podmienić na własne zdjęcia. Przycisk "Zobacz więcej na Instagramie @alternatywapiekna".
8. **Kontakt i godziny:** dwie kolumny. Po lewej: adres (Os. Raczyńskiego 5, Swarzędz), godziny z wyróżnionym dzisiejszym dniem, telefon, Instagram, Facebook. Po prawej osadzona mapa Google z adresem "Os. Raczyńskiego 5, Swarzędz". Duży przycisk "Umów wizytę online".
9. **Stopka:** logo, adres, telefon, ikony social media, © 2026 Alternatywa Piękna.

## FUNKCJONALNOŚĆ I UX
- Sticky przycisk "Zadzwoń" na dole ekranu na urządzeniach mobilnych (tel:511353604)
- Wszystkie przyciski rezerwacji otwierają Booksy w nowej karcie (target="_blank" rel="noopener")
- Płynne przewijanie do sekcji
- Dostępność: kontrast, atrybuty alt (logo: "Alternatywa Piękna – logo"), aria-labele, semantyczny HTML

## SEO
- Title: "Alternatywa Piękna Swarzędz | Makijaż permanentny brwi, stylizacja paznokci, pedicure"
- Meta description: "Studio urody w Swarzędzu, Os. Raczyńskiego 5. Makijaż permanentny brwi, stylizacja paznokci metodą żelową, pedicure. 98% poleca. Umów wizytę online lub zadzwoń: 511 353 604."
- JSON-LD typu BeautySalon (nazwa, telefon, adres: Os. Raczyńskiego 5, Swarzędz, godziny otwarcia, logo, sameAs z social media)
- Open Graph tagi z logo

## TECH
React + Tailwind CSS, komponenty z lucide-react, bez backendu. Cała treść po polsku, ton ciepły i profesjonalny, zwracanie się do klientki per "Ty".

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a146f0a5-63a0-4876-b10c-250bacaa01bd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
