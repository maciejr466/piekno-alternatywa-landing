import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  CalendarDays, Check, ChevronRight, Clock3, Facebook, Footprints, Instagram,
  MapPin, Menu, Phone, ShieldCheck, Sparkles, Star, X, WandSparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const BOOKSY = "https://alternatywapiekna.booksy.com/h/";
const TITLE = "Alternatywa Piękna Swarzędz | Makijaż permanentny brwi, stylizacja paznokci, pedicure";
const DESCRIPTION = "Studio urody w Swarzędzu, Os. Raczyńskiego 5. Makijaż permanentny brwi, stylizacja paznokci metodą żelową, pedicure. 98% poleca. Umów wizytę online lub zadzwoń: 511 353 604.";
const OG_IMAGE = "/og-image.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" }, { property: "og:url", content: "/" },
      { property: "og:image", content: OG_IMAGE }, { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "BeautySalon", name: "Alternatywa Piękna",
      image: OG_IMAGE, telephone: "+48511353604",
      address: { "@type": "PostalAddress", streetAddress: "Os. Raczyńskiego 5", addressLocality: "Swarzędz", addressCountry: "PL" },
      openingHoursSpecification: [1,2,3,4,5].map((dayOfWeek) => ({ "@type": "OpeningHoursSpecification", dayOfWeek, opens: "07:00", closes: "18:00" })),
      sameAs: ["https://instagram.com/alternatywapiekna", "https://www.facebook.com/alternatywapiekna"],
    }) }],
  }),
  component: Index,
});

const nav = [["Usługi", "uslugi"], ["Higiena", "higiena"], ["Opinie", "opinie"], ["Kontakt", "kontakt"]];
const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

function useWarsawStatus() {
  const [status, setStatus] = useState({ open: false, day: -1 });
  useEffect(() => {
    const update = () => {
      const parts = new Intl.DateTimeFormat("pl-PL", { timeZone: "Europe/Warsaw", weekday: "long", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
      const weekday = parts.find((p) => p.type === "weekday")?.value.toLowerCase();
      const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
      const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
      const day = days.findIndex((d) => d.toLowerCase() === weekday);
      const time = hour * 60 + minute;
      setStatus({ day, open: day >= 1 && day <= 5 && time >= 420 && time < 1080 });
    };
    update(); const timer = window.setInterval(update, 60000); return () => window.clearInterval(timer);
  }, []);
  return status;
}

function BookButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <Button asChild size="lg" className={`h-12 px-6 shadow-md ${className}`}><a href={BOOKSY} target="_blank" rel="noopener noreferrer">{children}</a></Button>;
}

function Index() {
  const [menu, setMenu] = useState(false);
  const status = useWarsawStatus();
  const services = [
    { Icon: WandSparkles, title: "Makijaż permanentny brwi", text: "Podkreśl naturalny kształt brwi i ciesz się dopracowanym wyglądem każdego dnia. Efekt dobieramy indywidualnie do Twojej urody i oczekiwań." },
    { Icon: Sparkles, title: "Stylizacja paznokci metodą żelową", text: "Zadbane dłonie i trwała stylizacja dopasowana do Twojego stylu. Pracujemy starannie, dbając o estetykę każdego detalu." },
    { Icon: Footprints, title: "Pedicure", text: "Podaruj stopom profesjonalną pielęgnację i chwilę odprężenia. Zadbamy o komfort, estetykę i piękne wykończenie." },
  ];
  return (
    <div className="min-h-screen overflow-x-hidden bg-background pb-16 text-foreground md:pb-0">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#start" aria-label="Alternatywa Piękna – strona główna"><img src={logoAsset.url} alt="Alternatywa Piękna – logo" className="h-14 w-auto" /></a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Główna nawigacja">{nav.map(([label,id]) => <a key={id} href={`#${id}`} className="text-sm font-medium hover:text-primary">{label}</a>)}<BookButton>Umów wizytę</BookButton></nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenu(!menu)} aria-label={menu ? "Zamknij menu" : "Otwórz menu"}>{menu ? <X /> : <Menu />}</Button>
        </div>
        {menu && <nav className="border-t border-border bg-background px-5 py-5 md:hidden">{nav.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="block border-b border-border py-3 font-medium">{label}</a>)}<BookButton className="mt-5 w-full">Umów wizytę</BookButton></nav>}
      </header>

      <main id="start">
        <section className="relative bg-secondary/55">
          <div className="mx-auto grid min-h-[min(760px,calc(100vh-5rem))] max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.1fr_.9fr] lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold"><span className={`h-2.5 w-2.5 rounded-full ${status.open ? "bg-emerald-600" : "bg-primary"}`} />{status.open ? "Otwarte teraz" : "Zamknięte"}</div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[.2em] text-primary">Studio urody w Swarzędzu</p>
              <h1 className="font-serif text-5xl leading-[1.08] font-semibold sm:text-6xl lg:text-7xl">Piękno, które<br /><span className="text-primary">podkreśla Ciebie</span></h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">Makijaż permanentny, stylizacja paznokci i pedicure w Swarzędzu. Kameralna przestrzeń, w której liczą się Twoje potrzeby i każdy detal.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><BookButton>Zarezerwuj w Booksy <ChevronRight /></BookButton><Button asChild size="lg" variant="outline" className="h-12 px-6"><a href="tel:511353604"><Phone /> Zadzwoń: 511 353 604</a></Button></div>
            </div>
            <div className="flex justify-center md:justify-end"><div className="relative bg-card p-5 shadow-[0_24px_70px_color-mix(in_oklab,var(--foreground)_12%,transparent)]"><img src={logoAsset.url} alt="Alternatywa Piękna – logo" className="w-full max-w-[500px]" /><span className="absolute -bottom-3 -left-3 h-20 w-px bg-primary" /><span className="absolute -bottom-3 -left-3 h-px w-20 bg-primary" /></div></div>
          </div>
        </section>

        <section id="uslugi" className="scroll-mt-20 px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Nasza oferta" title="Zadbaj o siebie po swojemu" text="Wybierz zabieg, który najlepiej odpowiada Twoim potrzebom." /><div className="mt-12 grid gap-5 md:grid-cols-3">{services.map(({Icon,title,text}) => <article key={title} className="group border border-border bg-card p-7 shadow-sm transition-transform hover:-translate-y-1"><div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary"><Icon /></div><h3 className="font-serif text-2xl font-semibold">{title}</h3><p className="mt-4 min-h-24 text-sm leading-7 text-muted-foreground">{text}</p><a href={BOOKSY} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">Umów wizytę <ChevronRight className="h-4 w-4" /></a></article>)}</div></div></section>

        <section className="bg-foreground px-5 py-24 text-primary-foreground lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.7fr_1.3fr]"><p className="text-sm font-semibold uppercase tracking-[.2em] text-secondary">O studiu</p><div><h2 className="font-serif text-4xl leading-tight sm:text-5xl">Kameralne miejsce stworzone z myślą o Tobie</h2><p className="mt-7 max-w-3xl leading-8 text-primary-foreground/75">W Alternatywie Piękna stawiamy na indywidualne podejście i uważnie słuchamy Twoich potrzeb. Każdy zabieg wykonujemy z dbałością o detale, by efekt był dopasowany do Ciebie. Chcemy, by wizyta była nie tylko usługą, ale też spokojnym momentem tylko dla Ciebie. Zapraszamy do naszego studia w Swarzędzu.</p></div></div></section>

        <section id="higiena" className="scroll-mt-20 bg-secondary/55 px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-10 md:grid-cols-2"><div><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground"><ShieldCheck /></div><h2 className="font-serif text-4xl font-semibold sm:text-5xl">Sterylność, na której możesz polegać</h2><p className="mt-6 max-w-xl leading-8 text-muted-foreground">Wszystkie narzędzia wielokrotnego użytku sterylizujemy w autoklawie. Dbamy o porządek, higienę i spokojną atmosferę na każdym etapie wizyty.</p></div><div className="space-y-4">{[["Sterylizacja w autoklawie","Narzędzia przygotowujemy z należytą starannością przed każdą wizytą."],["Czyste stanowisko","Przestrzeń pracy jest dokładnie przygotowana dla każdej klientki."],["Bezpieczeństwo i komfort","Możesz odprężyć się, wiedząc, że jesteś w dobrych rękach."]].map(([t,d]) => <div key={t} className="flex gap-4 border-b border-primary/15 py-5"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" /><div><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{d}</p></div></div>)}</div></div></div></section>

        <section id="opinie" className="scroll-mt-20 px-5 py-24 lg:px-8"><div className="mx-auto flex max-w-5xl flex-col items-center text-center"><div className="flex gap-1 text-primary" aria-label="5 gwiazdek">{[1,2,3,4,5].map(i => <Star key={i} className="fill-current" />)}</div><p className="mt-6 font-serif text-6xl font-semibold sm:text-8xl">98%</p><h2 className="mt-2 font-serif text-3xl">klientek poleca</h2><p className="mt-3 text-muted-foreground">na podstawie 33 opinii</p><Button asChild variant="outline" size="lg" className="mt-8 h-12"><a href="https://www.facebook.com/alternatywapiekna/reviews" target="_blank" rel="noopener noreferrer"><Facebook /> Zobacz opinie na Facebooku</a></Button></div></section>

        <section className="bg-muted px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Galeria" title="Nasze realizacje" text="Zobacz efekty starannej pracy i znajdź inspirację dla siebie." /><div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">{/* Podmień placeholdery poniżej na własne zdjęcia realizacji. */}{["Brwi permanentne","Paznokcie żelowe","Pedicure","Naturalne brwi","Stylizacja paznokci","Pielęgnacja stóp"].map((label,i) => <div key={label} className={`flex aspect-square items-end bg-secondary p-4 ${i % 2 ? "md:bg-card" : ""}`}><span className="border-l border-primary pl-3 text-sm font-medium">{label}</span></div>)}</div><div className="mt-8 text-center"><Button asChild variant="outline" size="lg" className="h-12"><a href="https://instagram.com/alternatywapiekna" target="_blank" rel="noopener noreferrer"><Instagram /> Zobacz więcej na Instagramie @alternatywapiekna</a></Button></div></div></section>

        <section id="kontakt" className="scroll-mt-20 px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Kontakt" title="Do zobaczenia w studiu" text="Zarezerwuj dogodny termin online lub zadzwoń." /><div className="mt-12 grid overflow-hidden border border-border bg-card shadow-sm lg:grid-cols-2"><div className="p-7 sm:p-10"><ContactLine Icon={MapPin} title="Adres"><a href="https://www.google.com/maps/search/?api=1&query=Os.+Raczy%C5%84skiego+5%2C+Swarz%C4%99dz" target="_blank" rel="noopener noreferrer">Os. Raczyńskiego 5, Swarzędz</a></ContactLine><ContactLine Icon={Phone} title="Telefon"><a href="tel:511353604">511 353 604</a></ContactLine><ContactLine Icon={Instagram} title="Instagram"><a href="https://instagram.com/alternatywapiekna" target="_blank" rel="noopener noreferrer">@alternatywapiekna</a></ContactLine><div className="mt-8"><h3 className="mb-3 flex items-center gap-2 font-semibold"><Clock3 className="h-5 w-5 text-primary" /> Godziny otwarcia</h3><div className="space-y-1">{[1, 2, 3, 4, 5, 6, 0].map((idx) => { const day = days[idx] ?? ""; const closed = idx === 0 || idx === 6; return <div key={day} className={`flex justify-between border-b border-border px-2 py-2 text-sm ${status.day === idx ? "bg-secondary font-semibold" : ""}`}><span>{day}</span><span>{closed ? "zamknięte" : "07:00–18:00"}</span></div>})}</div></div><BookButton className="mt-8 w-full"><CalendarDays /> Umów wizytę online</BookButton></div><iframe title="Mapa dojazdu do Alternatywy Piękna" className="min-h-[430px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Os.%20Raczy%C5%84skiego%205%2C%20Swarz%C4%99dz&output=embed" /></div></div></section>
      </main>

      <footer className="border-t border-border bg-card px-5 py-12 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left"><img src={logoAsset.url} alt="Alternatywa Piękna – logo" className="h-24 w-auto" /><div className="text-sm leading-7 text-muted-foreground"><p>Os. Raczyńskiego 5, Swarzędz</p><a href="tel:511353604">511 353 604</a><p>© 2026 Alternatywa Piękna</p></div><div className="flex gap-2"><Social href="https://instagram.com/alternatywapiekna" label="Instagram"><Instagram /></Social><Social href="https://www.facebook.com/alternatywapiekna" label="Facebook"><Facebook /></Social></div></div></footer>
      <a href="tel:511353604" className="fixed inset-x-0 bottom-0 z-50 flex h-16 items-center justify-center gap-2 bg-primary font-semibold text-primary-foreground shadow-lg md:hidden" aria-label="Zadzwoń do Alternatywy Piękna"><Phone /> Zadzwoń: 511 353 604</a>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[.2em] text-primary">{eyebrow}</p><h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">{title}</h2><p className="mt-5 leading-7 text-muted-foreground">{text}</p></div> }
function ContactLine({ Icon, title, children }: { Icon: typeof MapPin; title: string; children: React.ReactNode }) { return <div className="mb-5 flex gap-3"><Icon className="mt-1 h-5 w-5 shrink-0 text-primary" /><div><p className="text-xs font-semibold uppercase tracking-[.12em] text-muted-foreground">{title}</p><div className="mt-1 font-medium">{children}</div></div></div> }
function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) { return <Button asChild size="icon" variant="outline"><a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{children}</a></Button> }
