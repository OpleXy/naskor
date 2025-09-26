import './App.css'

function App() {
  return (
    <div className="wrap">
      <header className="top">
        <div className="brand">
          <h1>NasjonalKortet</h1>
          <p className="lead">Backupsystem for pasientjournaler i nedetid</p>
          <p className="lead" style={{fontSize: '12px', marginTop: '6px', color: 'var(--muted)'}}>
            Cyber Criminals sitt bidrag til{' '}
            <a
              href="https://custom-eur.cvent.com/559ED04F91884F02A58E7EF44ABF0E8B/files/e92ac068646d405bab76b76629b28982.pdf"
              target="_blank"
              rel="noopener"
              style={{color: 'var(--accent)', textDecoration: 'none'}}
            >
              Your Extreme 2025 – Oppgave 1
            </a>
          </p>
        </div>
        <div style={{marginLeft: 'auto', display: 'flex', gap: '8px', alignItems: 'center'}}>
          <a className="btn ghost" href="https://github.com/OpleXy/naskor/" target="_blank" rel="noopener">
            GitHub
          </a>
        </div>
      </header>

      <div className="panel" style={{marginBottom: '20px'}}>
        <div className="hero-left">
          <h2>Backupsystem for pasientjournaler</h2>
          <p className="desc">Vår løsning sikrer tilgang til kritisk helseinformasjon selv under alvorlige driftsbrudd.</p>
        </div>
        <div className="hero-right hero-actions">
        </div>
      </div>

      <main>
        <section>
          <div className="panel" style={{marginBottom: '20px'}}>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              Forestill deg dette: Midt i et kritisk øyeblikk, når hvert eneste sekund teller, kan helsepersonell fortsatt ha umiddelbar tilgang til den aller viktigste informasjonen om pasienten. Vår løsning sørger for at livsviktig helsedata aldri går tapt, selv når ordinære journalsystemer ligger nede, for eksempel i en nasjonal krise hvor alle ordinære systemer ligger nede.
            </p>

            <h4 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>Nasjonalt helsekort, en nøkkel til tryggere akuttmedisin</h4>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              Med vårt nasjonale helsekort blir all kritisk pasientinformasjon automatisk oppdatert og lagret. Blodtype, HLR-status, organdonorkort, allergier, kroniske sykdommer, operasjonshistorikk, alt er tilgjengelig på ett sted.
            </p>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              Dette kortet er utviklet for de mest sårbare situasjonene: når pasienten er bevisstløs, uten ID eller ikke i stand til å kommunisere. Da kan helseteamet raskt skanne kortet og få tilgang til informasjonen som kan bety forskjellen mellom liv og død.
            </p>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              Feilmedisinering, allergiske sjokk og unødvendige feilbehandlinger kan forhindres, fordi riktig informasjon når frem til riktig person i tide.
            </p>

            <h4 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>Sømløs oppdatering, alltid oppdatert, alltid tilgjengelig</h4>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              Kortet henter data direkte fra fastleger, private klinikker, sykehjem, sykehus og andre helseaktører. Oppdateringen skjer i sanntid, så snart et journaldokument er ferdig skrevet. Personvernet er ivaretatt: kun autorisert helsepersonell kan skanne kortet.
            </p>

            <h4 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>Case:</h4>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              Møt Ola Nordmann, en 26 år gammel student. Han har diabetes type 1, bruker insulin og er allergisk mot penicillin. Blodtypen hans er A+. All informasjon som kan redde livet hans i en krisesituasjon.
            </p>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              En dag blir Ola funnet bevisstløs på gaten. Ambulansen ankommer raskt, men journalsystemet er nede. Ingen vet hvem han er, ingen ID blir funnet, og uten helsekortet ville helsepersonellet stått helt uten avgjørende opplysninger.
            </p>
            
          </div>
        </section>

        <section>

          <div className="panel">
             <h3 style={{margin: '6px 0'}}>Problemstilling</h3>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
Hvordan kan man redde et menneskeliv når all digital journaltilgang er borte? Svaret ligger i et robust, sikkert og raskt backupsystem, helsekortet som alltid fungerer, uansett hva som skjer.
</p>
          </div>
        </section>

        <section>
         

          <div className="panel" style={{marginBottom: '20px'}}>
             <h3 style={{margin: '6px 0'}}>Teknologi og løsning</h3>
          <p style={{color: 'var(--muted)', marginBottom: '20px'}}>
            Løsningen vår består av to hovedkomponenter som arbeider sammen for å sikre tilgang til kritisk helseinformasjon:
          </p>


            <div className="solution">
            <div className="panel" aria-label="Kortet">
              <h4>Kortet</h4>
              <div className="card-visual">
                <img src="/kort.png" alt="NFC Helsekort" style={{height: '100%', objectFit: 'cover', borderRadius: '10px'}} />
              </div>
              <p style={{marginTop: '12px'}}>
                Kortet er en fysisk/elektronisk enhet designet for offline-tilgang til pasientjournaler.
                Lagring, kryptering og rask lesetilgang er sentralt.
              </p>
            </div>

            <div className="panel" aria-label="Skanneren">
              <h4>Skanneren</h4>
              <div className="card-visual">
                <img src="/workflow.png" alt="Arbeidsflyt skanner" style={{height: '100%', objectFit: 'cover', borderRadius: '10px'}} />
              </div>
              <p style={{marginTop: '12px'}}>
                Skanneren bruker sikre protokoller for å hente informasjon fra Kortet uten nettverkstilkobling.
                Enheten er laget for enkel håndtering i nødsituasjoner.
              </p>
            </div>
          </div>
          
            <h4 style={{margin: '16px 0 16px 0', color: '#e6eef8'}}>NFC-Teknologi</h4>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
          
              Near Field Communication (NFC) er en teknologi brukt for trådløs deling av små mengder data mellom to enheter.
              NFC bruker magnetisk induksjon for kommunikasjon, som gjør at enhetene må være veldig nærme hverandre for å snakke sammen (&lt; 10cm).
              Teknologien bruker simple kommunikasjonsprotokoller, som legger til rette for raskere kommunikasjoner enn Bluetooth LE <sup>[1]</sup>
            </p>

            <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>Scanner + Kort</h5>
            <ul style={{color: 'var(--muted)', paddingLeft: '20px', marginBottom: '16px'}}>
              <li>Scanneren skaper et elektromagnetisk felt på 13.56MHz <sup>[2]</sup></li>
              <li>NFC-kortet har en antennespole som fanger feltet</li>
              <li>Energien i feltet aktiverer kortet og gir det nok strøm til å sende data tilbake</li>
              <li>Ingen batteri eller ekstern strøm er nødvendig for kortet</li>
              <li>Scanneren må ha et batteri, evt. solcelle</li>
            </ul>

            <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>Lagringskapasitet og Løsning</h5>
            <p style={{color: 'var(--muted)', marginBottom: '8px'}}>
              Problemet ligger i at NFC har begrenset lagringskapasitet. Her vil ikke hele pasientjournalen få plass, kun data opptil <sup>[3]</sup>:
            </p>
            <ul style={{color: 'var(--muted)', paddingLeft: '20px', marginBottom: '16px'}}>
              <li>144 bytes for NTAG213</li>
              <li>504 bytes for NTAG215</li>
              <li>888 bytes for NTAG216</li>
            </ul>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              En komplett helsejournal med røntgenbilder, lab-resultater og historikk kan være opptil flere MB.
              Dette kan løses med en hybrid NFC og Micro-SD løsning, der når NFC-chippen oppdager en kobling, så vil den våkne,
              og kobler seg videre til en intern micro SD. En egenlaget ASIC (Application Specific Integrated Circuit) vil lese data
              fra SD-kortet, og data sendes tilbake via NFC til scanneren, som har en integrert LCD skjerm.
              Komplett journal vil vises på scanneren.
            </p>

            <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>Sync av kort (automatisk løsning)</h5>
            <p style={{color: 'var(--muted)', marginBottom: '8px'}}>
              Før problemet med at strøm og internett går ned, så er det viktig at dette kortet kontinuerlig holdes oppdatert.
              Dette kan løses på flere måter:
            </p>
            <ul style={{color: 'var(--muted)', paddingLeft: '20px', marginBottom: '16px'}}>
              <li>Ved legekontor/sykehus/apotek besøk kan det skrives ny data til kortet</li>
              <li>Hjemmestasjoner: Legg NFC-kort på en base som er koblet til helse-IT infrastruktur, syncer over natten</li>
              <li>Telefon: Hold kortet mot telefon, app kobler til helsenorge.no, laster ned ny data til kort</li>
            </ul>

            <div className="references" style={{fontSize: '12px', color: 'var(--muted)', marginTop: '20px'}}>
              <p><sup>[1]</sup> <a href="https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/protocols/nfc/index.html" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>Nordic Semiconductor - NFC Protocols</a></p>
              <p><sup>[2]</sup> <a href="https://nfc-forum.org/build/specifications" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>NFC Forum Specifications</a></p>
              <p><sup>[3]</sup> <a href="https://www.asiarfid.com/difference-ntag213-ntag215-ntag216.html" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>NTAG Specifications</a></p>
            </div>
          </div>

          <div className="panel" style={{marginBottom: '20px'}}>
            <h4 style={{margin: '0 0 16px 0', color: '#e6eef8'}}>Sikkerhet og kryptering</h4>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              Persondata som full helsejournal burde ikke være tilgjengelig å lese for de som finner et helsekort. For å løse dette kan man bruke MIFARE DESFire EV2/EV3 NFC chips, produsert av NXP, brukt i blant annet kollektivtrafikk og adgangskontroll. Disse støtter krypteringsmetoden AES-128 (EV2/EV3) <sup>[4][5]</sup>.
            </p>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              Med løsningen av en MIFARE DESFire kan det settes opp en master-applikasjon, og innenfor denne kan det opprettes flere filer, der typisk en fil per bruker. En backend vil holde oversikt over ID på kortet, brukerprofil, og tilhørende nøkkel (eller nøkkel avledet fra en master). Scanneren har et innebygd nøkkelsett som kan dekryptere og lese data fra hvert enkelt kort.
            </p>

            <div className="references" style={{fontSize: '12px', color: 'var(--muted)', marginTop: '20px'}}>
              <p><sup>[4]</sup> <a href="https://www.nxp.com/docs/en/data-sheet/MF3DX2_MF3DHX2_SDS.pdf" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>NXP MIFARE DESFire EV2/EV3 Data Sheet</a></p>
              <p><sup>[5]</sup> <a href="https://www.nxp.com/docs/en/application-note/AN12752.pdf" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>NXP MIFARE DESFire Application Note</a></p>
            </div>
          </div>
        </section>




          <div className="panel" style={{marginBottom: '20px'}}>
            <h4>Implementasjon i samfunnet</h4>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              All teknologi som brukes, finnes allerede, så her trenger vi bare å implementere løsningen med allerede oppfunnet teknologi.
            </p>

            <div style={{marginBottom: '16px'}}>
              <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>Fase 1: Utrulling av kort</h5>
              <p style={{color: 'var(--muted)', fontSize: '14px'}}>
                Borgere får utdelt et slikt kort, med pasientjournal lagret på seg. Det er krypteringer som gjør at kun helsepersonell har tilgang til denne dataen.
              </p>
            </div>

            <div style={{marginBottom: '16px'}}>
              <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>Fase 2: Synkronisering</h5>
              <p style={{color: 'var(--muted)', fontSize: '14px'}}>
                Endringer i pasientjournalen vil bli synkronisert på disse kortene i en desentralisert lagringsform (altså at det ikke er en hoveddatabase for backupsystemet).
              </p>
            </div>

            <div style={{marginBottom: '16px'}}>
              <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>Fase 3: Kriseberedskap</h5>
              <p style={{color: 'var(--muted)', fontSize: '14px'}}>
                Systemet er klart for krisesituasjoner.
              </p>
            </div>

            <div style={{background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)'}}>
              <h5 style={{margin: '0 0 12px 0', color: '#e6eef8'}}>I en krisesituasjon:</h5>
              <ul style={{color: 'var(--muted)', paddingLeft: '20px', fontSize: '14px', margin: '0'}}>
                <li style={{marginBottom: '8px'}}>Ikke tilgang til synkronisering lengre, derfor skjer alt av reading og writing av dataen når pasienten gir helsekortet sitt til helsepersonell</li>
                <li style={{marginBottom: '8px'}}>Scanneren trenger strøm, men veldig lite</li>
                <li>Kortet blir aktivert av scanneren gjennom magnetisk induksjon</li>
              </ul>
            </div>
          </div>

          <div className="panel">
            <h4>Er dette gjennomførbart?</h4>
            <p style={{color: 'var(--muted)', fontSize: '14px'}}>
              Dette systemet er teknisk gjennomførbart, men vil kreve betydelige investeringer i infrastruktur, opplæring og standardisering. Et realistisk første skritt vil være å gjennomføre et pilotprosjekt på et sykehus for å teste løsningen under reelle forhold.
            </p>
          </div>

        <section>
          <div className="panel" style={{marginBottom: '20px'}}>
            <h3 style={{margin: '6px 0'}}>Relevant juss</h3>

            <h4 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>Helsepersonelloven:</h4>

            <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>§ 7. Øyeblikkelig hjelp</h5>
            <p style={{color: 'var(--muted)', marginBottom: '12px'}}>
              Helsepersonell skal straks gi den helsehjelp de evner når det må antas at hjelpen er påtrengende nødvendig. Med de begrensninger som følger av <a href="https://lovdata.no/lov/1999-07-02-63/%C2%A74-9" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>pasient- og brukerrettighetsloven § 4-9</a>, skal nødvendig helsehjelp gis selv om pasienten ikke er i stand til å samtykke, og selv om pasienten motsetter seg helsehjelpen.
            </p>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              Denne løsningen skal gjøre det lettere for ambulansen å identifisere pasienten samtidig som de enklere kan sikre god og forsvarlig helsehjelp. Den kritiske informasjonen gjør jobben til helsepersonell enklere da alt er samlet på en plass der det er enkelt å innhente nødvendig informasjon.
            </p>

            <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>§ 21 a. Forbud mot urettmessig tilegnelse av taushetsbelagte opplysninger</h5>
            <p style={{color: 'var(--muted)', marginBottom: '12px'}}>
              Det er forbudt å lese, søke etter eller på annen måte tilegne seg, bruke eller besitte opplysninger som nevnt i <a href="https://lovdata.no/lov/1999-07-02-64/%C2%A721" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>§ 21</a> uten at det er begrunnet i helsehjelp til pasienten, administrasjon av slik hjelp eller har særskilt hjemmel i lov eller forskrift.
            </p>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              I løsningen skal kun den høyst nødvendige informasjonen komme frem først for de som i den akutte situasjonen trenger denne informasjonen. Løsningen da blir at alt av journaler ligger inne på kortet, men den viktigste informasjonen ligger øverst.
            </p>

            <h4 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>Pasient og brukerrettsloven:</h4>

            <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>§ 2-1. Rett til nødvendig hjelp fra kommunens helse- og omsorgstjeneste</h5>
            <p style={{color: 'var(--muted)', marginBottom: '12px'}}>
              Pasient og bruker har rett til øyeblikkelig hjelp fra kommunen, jf. <a href="https://lovdata.no/lov/2011-06-24-30/%C2%A73-5" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>helse- og omsorgstjenesteloven § 3-5</a>. Pasient og bruker har rett til nødvendige helse- og omsorgstjenester fra kommunen. Pasient og bruker har rett til et verdig tjenestetilbud i samsvar med <a href="https://lovdata.no/lov/2011-06-24-30/%C2%A74-1" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>helse- og omsorgstjenesteloven § 4-1</a> første ledd, bokstav b.
            </p>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              I løsningen er dette viktig hvis pasienten blir sendt til legevakt der øyeblikkelig hjelp på stedet caller inn den nødvendige informasjonen legevakten trenger til å yte god og forsvarlig helsehjelp til pasienten når den kommer frem.
            </p>

            <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>§ 2-2. Rett til nødvendig helsehjelp fra spesialisthelsetjenesten</h5>
            <p style={{color: 'var(--muted)', marginBottom: '12px'}}>
              Pasienten har rett til øyeblikkelig helsehjelp fra spesialisthelsetjenesten, jf. <a href="https://lovdata.no/lov/1999-07-02-61/%C2%A73-1" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>spesialisthelsetjenesteloven § 3-1</a>. Retten til nødvendig helsehjelp gjelder de tjenestene som spesialisthelsetjenesten har ansvaret for å yte og finansiere, jf. spesialisthelsetjenesteloven <a href="https://lovdata.no/lov/1999-07-02-61/%C2%A72-1a" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>§§ 2-1 a</a> og <a href="https://lovdata.no/lov/1999-07-02-61/%C2%A74-4" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>4-4</a>.
            </p>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              I løsningen er dette viktig hvis pasienten blir sendt til akuttmottaket der øyeblikkelig hjelp på stedet caller inn den nødvendige informasjonen akuttmottaket trenger til å yte god og forsvarlig helsehjelp til pasienten når den kommer frem.
            </p>

            <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>§ 3-1. Pasientens eller brukerens rett til medvirkning</h5>
            <p style={{color: 'var(--muted)', marginBottom: '12px'}}>
              Pasient eller bruker har rett til å medvirke ved gjennomføring av helse- og omsorgstjenester. Tjenestetilbudet skal så langt som mulig utformes i samarbeid med pasient eller bruker. Det skal legges stor vekt på hva pasienten eller brukeren mener ved utforming av tjenestetilbud etter helse- og omsorgstjenesteloven <a href="https://lovdata.no/lov/2011-06-24-30/%C2%A73-2" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>§§ 3-2</a>, <a href="https://lovdata.no/lov/2011-06-24-30/%C2%A73-6" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>3-6</a> og <a href="https://lovdata.no/lov/2011-06-24-30/%C2%A73-8" target="_blank" rel="noopener" style={{color: 'var(--accent)', textDecoration: 'none'}}>3-8</a>.
            </p>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              Hvis pasienten i fokus allerede har medvirket på hvordan hen ønsker at sine helse- og omsorgstjenester gjennomføres blir dette synlig når ambulansepersonell har skannet inn kortet, slik at deres autonomi blir opprettholdt.
            </p>

            <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>§ 3-2. Pasientens og brukerens rett til informasjon</h5>
            <p style={{color: 'var(--muted)', marginBottom: '12px'}}>
              Pasienten skal ha den informasjon som er nødvendig for å få innsikt i sin helsetilstand og innholdet i helsehjelpen. Informasjon kan unnlates dersom det er påtrengende nødvendig for å hindre fare for liv eller alvorlig helseskade for pasienten selv. Dersom pasienten eller brukeren blir påført skade eller alvorlige komplikasjoner, skal pasienten eller brukeren informeres om adgangen til å søke erstatning og å henvende seg til pasient- og brukerombudet.
            </p>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              I løsningen er dette særdeles viktig da det kan være utfordrende å finne informasjon i sin egen journal. Dette kan skape en trygghet for pasienten da det lettere er å motta informasjon om sin egne helsetilstand der man kan bruke mer tid på å prosessere informasjonen som er mottatt.
            </p>

            <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>§ 3-6. Rett til vern mot spredning av opplysninger</h5>
            <p style={{color: 'var(--muted)', marginBottom: '12px'}}>
              Opplysninger om legems- og sykdomsforhold samt andre personlige opplysninger skal behandles i samsvar med gjeldende bestemmelser om taushetsplikt. Opplysningene skal behandles med varsomhet og respekt for integriteten til den opplysningene gjelder.
            </p>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              I løsningen skal dette være kryptert slik at kun eieren av kortet og personalet som yter nødvendig helsehjelp har tilgang på denne informasjonen. Dette er slik at retten på personvern opprettholdes og opplysningene hemmeligholdes fra de som ikke har krav på denne informasjonen.
            </p>

            <h5 style={{margin: '16px 0 8px 0', color: '#e6eef8'}}>§ 5-1. Rett til innsyn i journal</h5>
            <p style={{color: 'var(--muted)', marginBottom: '12px'}}>
              Pasienten og brukeren har rett til innsyn i journalen sin med bilag og har etter særskilt forespørsel rett til kopi, jf. personvernforordningen artikkel 15. Nærmeste pårørende har rett til innsyn i journal etter en pasients eller brukers død, om ikke særlige grunner taler mot dette.
            </p>
            <p style={{color: 'var(--muted)', marginBottom: '16px'}}>
              Løsningen tar for seg denne paragrafen da pasienten selv kan få innsyn i det som er dokumentert på seg. Dette gjelder journaldokumenter fra fastlege, private aktører, sykehus, operasjonsbeskrivelse, og andre rapporter.
            </p>
          </div>
        </section>

        <section>
          <h3 style={{margin: '6px 0'}}>Galleri</h3>
          <div className="gallery" aria-label="Bildegalleri med videoer og bilder">
            <div className="thumb">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/RzFYEBIIUWU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{borderRadius: '8px'}}
              ></iframe>
            </div>
            <div className="thumb">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/S85ID4uCkdw"
                title="YouTube Shorts video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{borderRadius: '8px'}}
              ></iframe>
            </div>
            <div className="thumb">Bilde 3</div>
            <div className="thumb">Bilde 4</div>
            <div className="thumb">Bilde 5</div>
            <div className="thumb">Bilde 6</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-row">
          <div>
            <div className="small"><strong>Kilder</strong></div>
            <ul className="small" style={{margin: '8px 0 0 18px', padding: '0'}}>
              <li>Prosjektdokumentasjon (internt)</li>
              <li>Standards for helsedata og kryptering</li>
            </ul>
          </div>

          <div>
            <div className="small"><strong>Medlemmer:</strong></div>
            <ul className="small" style={{margin: '8px 0 0 18px', padding: '0'}}>
              <li>Oliver Kabicek</li>
              <li>Julianne Murbrekk</li>
              <li>Fredrik Andreassen Paulsen</li>
              <li>Even Rygh</li>
            </ul>
          </div>

          <div>
            <div className="small"><strong>Takk til</strong></div>
            <p className="small" style={{margin: '8px 0'}}>7Sense for lån av NFC-tags og kit</p>
          </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap'}}>
          <div className="small">Cyber Criminals</div>
          <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
            <a href="https://github.com/OpleXy/naskor/" target="_blank" rel="noopener" aria-label="GitHub repository">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.75 5.48.75 11.77c0 4.88 3.16 9 7.54 10.45.55.1.75-.24.75-.53 0-.26-.01-1-.02-1.93-3.07.67-3.72-1.48-3.72-1.48-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.09.08 1.66 1.12 1.66 1.12.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.45-.28-5.02-1.22-5.02-5.43 0-1.2.42-2.18 1.12-2.95-.11-.28-.49-1.41.11-2.94 0 0 .92-.29 3.02 1.12.87-.24 1.8-.36 2.73-.36.93 0 1.86.12 2.73.36 2.1-1.41 3.02-1.12 3.02-1.12.6 1.53.22 2.66.11 2.94.7.77 1.12 1.75 1.12 2.95 0 4.22-2.58 5.15-5.04 5.42.39.33.74.98.74 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.64.76.53C19.09 20.77 22.25 16.65 22.25 11.77 22.25 5.48 17.27.5 12 .5z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App