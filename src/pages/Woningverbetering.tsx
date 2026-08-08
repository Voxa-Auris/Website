import NicheLanding, { type NicheCopy } from "@/components/site/NicheLanding";

const copy: NicheCopy = {
  niche: "Woningverbetering",
  pageTitle: "Voor kozijnen, dakkapellen & woningverbetering",
  hero: {
    line1: "Terwijl jij je offerte uitrekent,",
    accent: "heeft de concurrent al gebeld.",
    lede:
      "Klanten vragen 3-5 offertes aan. Wie als eerste belt, wint de opdracht. Jouw AI voice agent neemt binnen seconden contact op, automatisch, 24/7.",
  },
  pain: {
    title: "Herken jij dit?",
    body:
      "Woningverbetering-bedrijven verliezen dagelijks opdrachten aan concurrenten die simpelweg sneller reageren.",
    items: [
      {
        title: "3 tot 5 offertes per klant",
        body:
          "De gemiddelde woningverbeteraar vraagt meerdere offertes aan. Of ze bij jou blijven hangt af van wie het snelst reageert.",
      },
      {
        title: "Leads verlopen terwijl jij werkt",
        body:
          "Op een dakkapel-installatie kun je niet bellen. Ondertussen heeft de concurrent al contact opgenomen en een afspraak ingepland.",
      },
      {
        title: "Handmatige opvolging kost uren",
        body:
          "Terugbellen, kwalificeren, inplannen: uren per week die je niet hebt, en leads die je verliest.",
      },
    ],
  },
  flow: {
    title: "Van aanvraag tot warme afspraak, automatisch.",
    body: "Drie stappen. Geen handwerk. Geen training. Live binnen 2 weken.",
    steps: [
      {
        title: "Klant vraagt offerte aan",
        body:
          "Via jouw website of formulier. Binnen seconden pakt de AI voice agent de lead op.",
      },
      {
        title: "AI belt direct terug",
        body:
          "Stelt de juiste vragen (type kozijn, maat, materiaal, urgentie), kwalificeert de lead en plant een afspraak in jouw agenda.",
      },
      {
        title: "Jij krijgt een warme afspraak",
        body:
          "Geen koude lead meer. De klant is al gesproken, geïnteresseerd en ingepland. Jij hoeft alleen nog op te draven.",
      },
    ],
  },
  capabilities: {
    title: "Wat de voice agent voor jou doet",
    body:
      "Afgestemd op kozijnen, dakkapellen, veranda's, zonnepanelen en thuisbatterijen.",
    items: [
      {
        title: "Razendsnel opvolgen",
        body:
          "Reageert binnen seconden op elke nieuwe lead, ook 's avonds en in het weekend.",
      },
      {
        title: "Stelt de juiste vragen",
        body:
          "Type product, afmeting, urgentie, budget, alles wat jij nodig hebt voor een goede offerte.",
      },
      {
        title: "Plant afspraken automatisch in",
        body: "Koppelt aan jouw agenda en boekt het tijdslot direct.",
      },
      {
        title: "Kwalificeert leads",
        body: "Filtert serieuze klanten van prijskijkers, zodat jij je tijd investeert waar het telt.",
      },
      {
        title: "Geen concurrent heeft de kans",
        body:
          "Omdat de klant al contact heeft gehad, is de drempel om elders te zoeken veel hoger.",
      },
      {
        title: "Volledig overzicht in dashboard",
        body:
          "Gesprekken, aanvragen en afspraken inzichtelijk via jouw Voxa Auris dashboard.",
      },
    ],
  },
};

export default function Woningverbetering() {
  return <NicheLanding copy={copy} />;
}
