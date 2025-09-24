import { useState } from 'react'
import './App.css'
import YouTubeEmbed from './components/YouTubeEmbed'

function App() {
  const [activeTab, setActiveTab] = useState('kort')
  return (
    <div className="app">
      <header className="header">
        <h1>NasjonalKort</h1>
        <p className="subtitle">Backupsystem for pasientjornaler i nedetid</p>
      </header>

      <main className="main-content">
        <section id="intro" className="section">
          <YouTubeEmbed url="https://www.youtube.com/watch?v=2aCBG-5Q58w" />
        </section>

        <section id="projectDescription" className="section">
          <header>
            <h1>Beredskapssystem for helsevesenet ved strøm- og internettbrudd</h1>
          </header>
          <p>Dette prosjektet er vårt bidrag til oppgave 1 i Your Extreme 2025. Vi utvikler et beredskapssystem som sikrer at helsevesenet og kritisk helseinformasjon er tilgjengelig under omfattende strøm- og internettbrudd. Løsningen er designet for å fungere uten strøm, mobilnettverk eller internett, og gir helsepersonell tilgang til essensielle pasientjournaler og medisinske data under ekstreme forhold.</p>
        </section>

        <section id="problemStatement" className="section">
          <header>
            <h2>Problemstilling</h2>
          </header>
          <p>Ved en katastrofe som forårsaker strøm-, internett-, mobilnettverks- og GPS-feil i flere dager, mister samfunnet tilgang til kritisk informasjon og kommunikasjon. Vårt mål er å utvikle et robust og gjennomførbart beredskapssystem som kan opprettholde helsevesenets funksjoner under slike krisesituasjoner.</p>
        </section>

        <section id="solution" className="section">
          <header>
            <h2>Teknologi og løsning</h2>
          </header>
          <p>Løsningen består av to hovedkomponenter:</p>

          <div className="tech-tabs">
            <button
              className={`tech-tab ${activeTab === 'kort' ? 'active' : ''}`}
              onClick={() => setActiveTab('kort')}
            >
              Desentralisert datalagring (kortet)
            </button>
            <button
              className={`tech-tab ${activeTab === 'skanner' ? 'active' : ''}`}
              onClick={() => setActiveTab('skanner')}
            >
              Read&Write (Skanner)
            </button>
          </div>

          {activeTab === 'kort' && (
            <div className="tech-content">
              <ul>
            <li>
              <h3>Desentralisert datalagring</h3>
              <p>Et kort som fungerer som pasientjournal, der helseinformasjon kan lagres og oppdateres, og kan leses og skrives til av en håndholdt skanner.</p>

              <h4>Datainnlagringsteknologier for kortet</h4>
              <ul className="tech-list">
                <li><strong>NFC-kort (Near Field Communication)</strong> - Lagrer 4-8KB data (nok for kritisk helseinformasjon). Krever ingen strøm og drives av skanneren. Brukes i bankkort og kollektivtransportkort.</li>
                <li><strong>RFID UHF-brikker</strong> - Lengre rekkevidde og kan lagre mer data enn NFC. Fungerer uten batterier og kan kommunisere på avstand.</li>
                <li><strong>Bluetooth Low Energy (BLE) beacons</strong> - Lagrer mer data og har lang batterilevetid. Krever kryptering for sikkerhet.</li>
              </ul>

              <h4>NFC - Teknisk dypere forklaring</h4>
              <p><strong>Near Field Communication (NFC)</strong> er en teknologi brukt for trådløs deling av små mengder data mellom to enheter. NFC bruker magnetisk induksjon for kommunikasjon, som gjør at enhetene må være veldig nærme hverandre for å snakke sammen (&lt; 10cm). Teknologien bruker simple kommunikasjonsprotokoller, som legger til rette for raskere kommunikajon enn Bluetooth LE.</p>

              <h5>Scanner + Kort</h5>
              <ul className="tech-detail-list">
                <li>Scanneren skaper et elektromagnetisk felt på 13.56MHz.</li>
                <li>NFC-kortet har en antennespole som fanger feltet.</li>
                <li>Energien i feltet aktivierer kortet og gir nok strøm til å sende data tilbake.</li>
                <li>Ingen batteri eller ekstern strøm er nødvendig for kortet.</li>
                <li>Scanneren må ha et batteri, evt. solcelle.</li>
              </ul>

              <p>Problemet ligger i at NFC har begrenset lagringskap. Her vil ikke hele pasientjournalen få plass, kun data opptil:</p>
              <ul className="tech-detail-list">
                <li>144 bytes for NTAG213</li>
                <li>504 bytes for NTAG215</li>
                <li>888 bytes for NTAG216</li>
              </ul>

              <p>Et helsejournal med røntgenbilder, lab-resultater og historikk kan være opptil flere MB. Dette kan løses med en <strong>hybrid NFC og Micro-SD løsning</strong>, der når NFC-chippen oppdager en kobling, så vil den våkne, og kobler seg videre til en intern micro SD. En egenlaget ASIC (Application Specific Integrated Circuit) vil lese data fra SD-kortet, og data sendes tilbake via NFC til scanneren, som har en integrert LCD skjerm. Komplett journal vil vises på scanneren.</p>

              <h5>Sync av kort (automatisk løsning)</h5>
              <p>Før problemet med at strøm og internett går ned, så er det viktig at dette kortet kontinuerlig holdes oppdatert. Dette kan løses på flere måter:</p>
              <ul className="tech-detail-list">
                <li><strong>Ved legekontor/sykehus/apotek besøk:</strong> kan det skrives ny data til kortet</li>
                <li><strong>Hjemmestasjoner:</strong> Legg NFC-kort på en base som er koblet til helse-IT infrastruktur, syncer over natten.</li>
                <li><strong>Telefon:</strong> Hold kortet mot telefon, app kobler til helsenorge.no, laster ned ny data til kort</li>
              </ul>

              <div className="card-examples">
                <div className="card-image">
                  <img src="/kort/forside.png" alt="Forside av helsekort" />
                  <p className="card-label">Forside</p>
                </div>
                <div className="card-image">
                  <img src="/kort/bakside.png" alt="Bakside av helsekort" />
                  <p className="card-label">Bakside</p>
                </div>
              </div>
            </li>
            <li>
              <h3>Skanner</h3>
              <p>En håndholdt enhet brukt av helsepersonell for å lese og oppdatere pasientdata på kortet, selv uten tilgang til strøm eller internett.</p>

              <h4>Teknologi for skanneren</h4>
              <ul className="tech-list">
                <li>Håndholdt enhet med NFC/RFID leser/skriver.</li>
                <li>Lokal datalagring (SSD).</li>
                <li>Lang batterilevetid, med solcellepanel for lading.</li>
                <li>Enkel skjerm og tastatur.</li>
                <li>Mesh-nettverk mellom skannere for lokal synkronisering.</li>
              </ul>

              <div className="scanner-example">
                <div className="scanner-image">
                  <img src="/scanner.png" alt="Håndholdt skanner for helsekort" />
                  <p className="scanner-label">Håndholdt skanner</p>
                </div>
                <div className="scanner-image">
                  <img src="/nasjonalkort.png" alt="NasjonalKort logo" />
                  <p className="scanner-label">NasjonalKort - Backupsystem for pasientjornaler i nedetid</p>
                </div>
              </div>
            </li>
              </ul>
            </div>
          )}

          {activeTab === 'skanner' && (
            <div className="tech-content">
              <ul>
                <li>
                  <h3>Skanner</h3>
                  <p>En håndholdt enhet brukt av helsepersonell for å lese og oppdatere pasientdata på kortet, selv uten tilgang til strøm eller internett.</p>

                  <h4>Teknologi for skanneren</h4>
                  <ul className="tech-list">
                    <li>Håndholdt enhet med NFC/RFID leser/skriver.</li>
                    <li>Lokal datalagring (SSD).</li>
                    <li>Lang batterilevetid, med solcellepanel for lading.</li>
                    <li>Enkel skjerm og tastatur.</li>
                    <li>Mesh-nettverk mellom skannere for lokal synkronisering.</li>
                  </ul>

                  <div className="scanner-example">
                    <div className="scanner-image">
                      <img src="/scanner.png" alt="Håndholdt skanner for helsekort" />
                      <p className="scanner-label">Håndholdt skanner</p>
                    </div>
                    <div className="scanner-image">
                      <img src="/nasjonalkort.png" alt="NasjonalKort logo" />
                      <p className="scanner-label">NasjonalKort - Backupsystem for pasientjornaler i nedetid</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </section>

        <section id="technologies" className="section">
          <header>
            <h2>Datainnlagringsteknologier for kortet</h2>
          </header>
          <ul>
            <li><strong>NFC-kort (Near Field Communication)</strong> - Lagrer 4-8KB data (nok for kritisk helseinformasjon). Krever ingen strøm og drives av skanneren. Brukes i bankkort og kollektivtransportkort.</li>
            <li><strong>RFID UHF-brikker</strong> - Lengre rekkevidde og kan lagre mer data enn NFC. Fungerer uten batterier og kan kommunisere på avstand.</li>
            <li><strong>Bluetooth Low Energy (BLE) beacons</strong> - Lagrer mer data og har lang batterilevetid. Krever kryptering for sikkerhet.</li>
          </ul>
        </section>

        <section id="scannerTechnology" className="section">
          <header>
            <h2>Teknologi for skanneren</h2>
          </header>
          <ul>
            <li>Håndholdt enhet med NFC/RFID leser/skriver.</li>
            <li>Lokal datalagring (SSD).</li>
            <li>Lang batterilevetid, med solcellepanel for lading.</li>
            <li>Enkel skjerm og tastatur.</li>
            <li>Mesh-nettverk mellom skannere for lokal synkronisering.</li>
          </ul>
        </section>

        <section id="societalPreparation" className="section">
          <header>
            <h2>Hvordan samfunnet kan forberede seg</h2>
          </header>
          <ul>
            <li>Bruk av høyteknologiske løsninger som NFC- eller RFID-kort med kritisk medisinsk data som kan oppdateres under planleggingsfasene.</li>
            <li>AI-verktøy for å analysere helse- og forsyningssituasjoner og forberede helsevesenet på kriser.</li>
            <li>Opplæring av helsepersonell til å håndtere situasjoner uten strøm og internett.</li>
            <li>Sikre nødvendige ressurser som skannere og datakort er tilgjengelige før en krise.</li>
          </ul>
        </section>

        <section id="crisisHandling" className="section">
          <header>
            <h2>Hvordan samfunnet handler i en krise</h2>
          </header>
          <ul>
            <li>Praktiske, lavteknologiske løsninger: Helsepersonell vil bruke håndholdte skannere og kort for å få tilgang til og oppdatere pasientinformasjon når internett og strøm er nede.</li>
            <li>Menneskedrevne løsninger: Organisering av lokale frivillige for å hjelpe med koordinering og ressursdeling.</li>
            <li>Offline kommunikasjon: Implementering av en lokal mesh-nettverksløsning mellom skannere for å synkronisere data når internett og strøm er gjenopprettet.</li>
          </ul>
        </section>

        <section id="resourceOrganization" className="section">
          <header>
            <h2>Hvordan organisere ressurser og roller</h2>
          </header>
          <ul>
            <li><strong>Påkrevde ressurser:</strong> Skannere, datakort, opplæring for helsepersonell og teknisk støtte.</li>
            <li><strong>Roller:</strong> Definer klare roller for helsepersonell, frivillige og teknisk støtte for å sikre en effektiv respons.</li>
            <li><strong>Koordinering:</strong> Lokal og regional koordinering av helsepersonell og frivillige for å håndtere situasjonen.</li>
          </ul>
        </section>

        <section id="internationalCollaboration" className="section">
          <header>
            <h2>Samhandling med naboland og lokalsamfunn</h2>
          </header>
          <ul>
            <li><strong>Politisk samarbeid:</strong> Koordinering av beredskapsinnsats på nasjonalt nivå for å sikre ressurser og støtte.</li>
            <li><strong>Ressursdeling:</strong> Samarbeid mellom naboland for å dele nødvendige ressurser som medisinske forsyninger og personell.</li>
            <li><strong>Lokalt engasjement:</strong> Aktiv involvering av lokalsamfunn i beredskapsforberedelser, inkludert opplæring og ressursforvaltning.</li>
          </ul>
        </section>

        <section id="feasibility" className="section">
          <header>
            <h2>Gjennomførbarhet</h2>
          </header>
          <p>Dette systemet er teknisk gjennomførbart, men vil kreve betydelige investeringer i infrastruktur, opplæring og standardisering. Et realistisk første skritt vil være å gjennomføre et pilotprosjekt på et sykehus for å teste løsningen under reelle forhold.</p>
        </section>
      </main>
    </div>
  )
}

export default App
