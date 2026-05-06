import NicheLanding, { type NicheCopy } from "@/components/site/NicheLanding";

const copy: NicheCopy = {
  niche: "Installatiebedrijven",
  pageTitle: "Voor installatiebedrijven",
  hero: {
    line1: "Mis jij ook gesprekken",
    accent: "terwijl je op het dak staat?",
    lede:
      "Elke gemiste oproep is een gemiste offerte. Onze AI voice agent pakt de telefoon op — altijd. Ook als jij op locatie bent.",
  },
  pain: {
    title: "Herken jij dit?",
    body:
      "Installateurs verliezen dagelijks klanten door bereikbaarheidsproblemen die volledig op te lossen zijn.",
    items: [
      {
        title: "Gemiste oproepen op locatie",
        body:
          "Je staat op een dak of onder een cv-ketel — de telefoon gaat, maar je kunt hem niet opnemen. De klant belt door naar de concurrent.",
      },
      {
        title: "Klanten gaan naar de concurrent",
        body:
          "Iemand die nu belt, wil nu geholpen worden. Geen voicemail, geen terugbellen. Ze bellen gewoon het volgende bedrijf in Google.",
      },
      {
        title: "Geen tijd voor offertes & opvolging",
        body:
          "Na een lange werkdag wil je niet nog uren achter de telefoon zitten. Leads die je niet opvolgt, zijn leads die je kwijtraakt.",
      },
    ],
  },
  flow: {
    title: "Hoe het werkt",
    body:
      "Geen lange onboarding. Geen technische kennis vereist. Jij vult een formulier in — wij bellen jou terug.",
    steps: [
      {
        title: "Vul het formulier in",
        body: "Naam, telefoonnummer en je bedrijfstype. Duurt 2 minuten. Geen verplichtingen.",
      },
      {
        title: "Onze voice agent belt jou terug",
        body:
          "Je ervaart exact hoe jouw toekomstige klanten de agent zouden horen. Dit is de demo — geen PowerPoint, gewoon het echte product.",
      },
      {
        title: "Jij beslist of je live wilt gaan",
        body:
          "Ben je enthousiast? Dan bespreken we de implementatie. Geen druk, geen verborgen kosten.",
      },
    ],
  },
  capabilities: {
    title: "Wat de voice agent voor jou doet",
    body: "Afgestemd op installatiebedrijven — van loodgieters tot elektriciens.",
    items: [
      {
        title: "24/7 bereikbaar",
        body:
          "Neemt de telefoon op buiten kantooruren, in het weekend en tijdens vakanties.",
      },
      {
        title: "Vraagt naar het probleem",
        body:
          "Cv-ketel kapot? Lekkage? Storing? De agent vraagt door en verzamelt alle relevante info.",
      },
      {
        title: "Plant afspraken in",
        body:
          "Koppelt aan jouw agenda en plant direct een afspraak in — zonder dat jij iets hoeft te doen.",
      },
      {
        title: "Kwalificeert leads",
        body:
          "Filtert serieuze aanvragen eruit zodat jij alleen belt met mensen die écht klant worden.",
      },
      {
        title: "Geeft samenvattingen",
        body:
          "Na elk gesprek ontvang jij een samenvatting met probleem, contactgegevens en urgentie.",
      },
      {
        title: "Geen gemiste kansen meer",
        body:
          "Elke beller krijgt direct een professioneel antwoord — ook als jij op locatie bezig bent.",
      },
    ],
  },
  formUrl: "https://api.leadconnectorhq.com/widget/form/1NrTnNfSyP5VafVmAY7h",
};

export default function Installatiebedrijven() {
  return <NicheLanding copy={copy} />;
}
