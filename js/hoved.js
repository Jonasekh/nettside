//yrker
const careers = [
    {
        title: "Lærer",
        description: "En lærer planlegger og gjennomfører undervisning i tråd med læreplaner og elevers behov. De følger opp elever faglig og sosialt, samt tilpasser opplæringen for å motivere og skape mestring. Samarbeid med kollegaer og foresatte er en sentral del av jobben. Som lærer må du også bidra for å skape et trygt og inkluderende læringsmiljø.",
        education: "3 år vgs + 5 år på universitet/høgskole",
        salary: "642 000 kr/år",
        image: "bilder/laerer.png"
    },
    {
        title: "Lege",
        description: "Leger utreder, diagnostiserer og behandler sykdommer og skader. De jobber enten som allmennleger, spesialister på sykehus eller i andre helseinstitusjoner. En lege følger opp pasienter gjennom konsultasjoner, ordinerer nødvendige prøver og henviser til videre undersøkelse eller behandling. Å samarbeide godt med annet helsepersonell er sentralt for å sikre kvalitet og pasientsikkerhet.",
        education: "3 år vgs + 6 år på universitet/høgskole",
        salary: "952 800 kr/år",
        image: "bilder/lege.png"
    },
    {
        title: "Sykepleier",
        description: "Sykepleiere kan jobbe på sykehus, sykehjem, i hjemmesykepleie, på helsestasjoner og innen psykiatrisk helsevern. De observerer pasienters tilstand, koordinerer pleie og administrerer medisiner. Samarbeid med leger, fysioterapeuter og annet helsepersonell er viktig for en helhetlig behandling. Sykepleiere må vise empati, faglig dyktighet og evne til å takle krevende situasjoner.",
        education: "3 år vgs + 3 år på universitet/høgskole",
        salary: "673 800 kr/år",
        image: "bilder/sykepleier.png"
    },
    {
        title: "Ingeniør",
        description: "Ingeniører utvikler og forbedrer tekniske løsninger innen alt fra bygg og infrastruktur til energi, IT, prosessindustri og offshore. De utfører beregninger, analyser og prosjekteringer basert på naturvitenskapelige prinsipper. Samtidig samhandler de ofte med ulike faggrupper for å sikre funksjonelle, bærekraftige og kostnadseffektive resultater. Kreativitet og analytiske evner er viktig for yrket.",
        education: "3 år vgs + 3 år universitet/høgskole",
        salary: "788 400 kr/år",
        image: "bilder/ingeniør.png"
    },
    {
        title: "Advokat",
        description: "En advokat gir juridisk bistand, veileder klienter og representerer dem i rettslige situasjoner. De tolker lover og regler, skriver juridiske dokumenter og forhandler avtaler. Arbeidsfeltet kan variere fra strafferett og forretningsjus til familierett. Advokater må ha god etisk bevissthet og bygge tillit gjennom faglig kompetanse og integritet.",
        education: "3 år vgs + 5 år på universitet/høgskole ",
        salary: "924 000 kr/år",
        image: "bilder/advokat.png"
    },
    {
        title: "Tømrer",
        description: "Tømrere bygger og vedlikeholder konstruksjoner i tre, som hus, tak, gulv og vegger. De jobber med verktøy og maskiner for å sette opp reisverk, montere panel, vinduer og dører. Tømrerfaget krever både praktiske ferdigheter og materialkunnskap. En tømrer følger byggetegninger og sikrer at konstruksjoner oppfyller gjeldende krav.",
        education: "2 år vgs + 2 år som lærling",
        salary: "547 560 kr/år",
        image: "bilder/tømrer.png"
    },
    {
        title: "Elektriker",
        description: "Elektrikere monterer, vedlikeholder og reparerer elektriske anlegg, maskiner og utstyr i bygg og industri. De trekker kabler, kobler sikringer, installerer lys og kontrollerer at anleggene fungerer trygt og effektivt. Elektrikere må ha kjennskap til gjeldende forskrifter, være nøyaktig i arbeidet sitt og ha fokus på sikkerhet.",
        education: "2 år vgs + 2,5 år som lærling",
        salary: "633 240 kr/år",
        image: "bilder/elektriker.png"
    },
    {
        title: "Rørlegger",
        description: "Rørleggere installerer, vedlikeholder og reparerer vann- og avløpssystemer i boliger, offentlige bygg og industribygg. De arbeider med rør, pumper, varmtvannstanker og sanitæranlegg. I tillegg foretar de feilsøking og bytter ut defekt utstyr. Rørleggeren må beherske teknisk tegningsforståelse og sørge for at anleggene oppfyller krav til sikkerhet og funksjonalitet.",
        education: "2 år vgs + 2,5 år som lærling",
        salary: "623 160 kr/år",
        image: "bilder/rørlegger.png"
    },
    {
        title: "Politi",
        description: "Politiet opprettholder lov og orden, forebygger kriminalitet og sikrer trygghet i samfunnet. De etterforsker lovbrudd, foretar pågripelser og samarbeider med rettsvesenet. Politiarbeidet omfatter alt fra patruljering og beredskap til spesialfelt som etterforskning, hundetjeneste og beredskapstroppen. Balanse mellom handlekraft, empati og respekt for lovverk er sentralt i yrket.",
        education: "3 år vgs + 3 år på Politihøgskolen",
        salary: "735 840 kr/år",
        image: "bilder/politi.png"
    },
    {
        title: "Eiendomsmegler",
        description: "Eiendomsmeglere formidler kjøp og salg av boliger og næringseiendom. De innhenter dokumentasjon, markedsfører objektene, arrangerer visninger og bistår i budprosessen. Megleren sørger for at alle juridiske og økonomiske forhold er ivaretatt før overtakelse. Evnen til å kommunisere og forhandle er avgjørende for å oppnå gode resultater og fornøyde parter.",
        education: "3 år vgs + 3 år på universitet/høgskole",
        salary: "831 000 kr/år",
        image: "bilder/eiendomsmegler.png"
    },
    {
        title: "Frisør",
        description: "Frisører klipper, styler og farger hår. De gir også råd om hårpleie og produkter. De må følge trender, kunne vurdere ansiktsfasonger og individuell stil. I salongen tar frisøren hensyn til kundens ønsker, utfører behandlingene profesjonelt og sørger for hygieniske arbeidsrutiner. God service og evne til å bygge relasjoner er viktig.",
        education: "2 år vgs + 2 år som lærling",
        salary: "459 960 kr/år",
        image: "bilder/frisør.png"
    },
    {
        title: "Kokk",
        description: "Kokker planlegger, tilbereder og anretter mat i restauranter, hoteller, kantiner eller catering. De arbeider gjerne etter menyer og oppskrifter, men kan også utvikle nye retter. Kokkefaget krever god kjennskap til råvarer, smakskombinasjoner og mattrygghet. Samarbeid i kjøkkenet og effektiv tilberedning er avgjørende for kvalitet, presentasjon og kundeopplevelse.",
        education: "2 år vgs + 2 år som lærling",
        salary: "481 320 kr/år",
        image: "bilder/kokk.png"
    },
    {
        title: "Barnehagelærer",
        description: "Barnehagelærere arbeider med barn i alderen 0–6 år, og legger til rette for lek, læring og omsorg. De stimulerer barns språkutvikling, sosiale ferdigheter og utforskertrang gjennom ulike aktiviteter. Samtidig har de ansvar for å observere og følge opp hver enkelt barns behov. Gode evner til å bygge relasjoner og tydelig veiledning er viktig.",
        education: "3 år vgs + 3 år på universitet/høgskole",
        salary: "617 160 kr/år",
        image: "bilder/barnehagelærer.png"
    },
    {
        title: "Butikkmedarbeider",
        description: "Butikkmedarbeidere hjelper kunder med spørsmål og produktvalg, tar betalt og holder orden i butikken. De håndterer varepåfylling, lagerbeholdning og sørger for at varene presenteres ryddig og tiltalende. God serviceinnstilling, kassehåndtering og samarbeid med kollegaer er sentralt. Yrket krever gjerne både fleksibilitet og evne til å takle hektiske perioder.",
        education: "2 år vgs + 2 år som lærling",
        salary: "483 480 kr/år",
        image: "bilder/butikkmedarbeider.png"
    },
    {
        title: "Farmasøyt",
        description: "Farmasøyter er eksperter på legemidler, deres sammensetning, virkning og bivirkninger. De jobber ofte på apotek eller i farmasøytisk industri med rådgivning, produksjon og kvalitetskontroll av medisiner. Farmasøyten veileder kunder om riktig bruk og dosering, og samarbeider med helsepersonell for å sikre trygg og effektiv legemiddelbehandling for pasientene.",
        education: "3 år vgs + 5 år på universitet/høgskole",
        salary: "722 160 kr/år",
        image: "bilder/farmasøyt.png"
    },
];

const careerGrid = document.querySelector('.career-grid');

// Lager de dynamiske karriere boksene
careers.forEach(career => {
    const careerBox = document.createElement('div');
    careerBox.classList.add('career-box');

    // Legger til bilde og tittel
    const img = document.createElement('img');
    img.src = career.image;
    careerBox.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = career.title;
    careerBox.appendChild(title);

    careerBox.addEventListener('click', () => openModal(career));
    careerGrid.appendChild(careerBox);
});

const modal = document.getElementById('careerModal');
const modalTitle = document.getElementById('careerTitle');
const modalDescription = document.getElementById('careerDescription');
const modalEducation = document.getElementById('careerEducation');
const modalSalary = document.getElementById('careerSalary');
const modalImage = document.getElementById('careerImage');
const closeModal = document.querySelector('.close');

function openModal(career) {
    modal.style.display = 'block';
    modalTitle.textContent = career.title;
    modalDescription.textContent = career.description;
    modalEducation.textContent = career.education;
    modalSalary.textContent = career.salary;
}

closeModal.onclick = function() {
    modal.style.display = 'none';
};

// Lukker boksen når man trykker utenfor
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

function goToOppgaver() {
    window.location.href = "oppgaver.html"; // Knapp til oppgavesiden
}
