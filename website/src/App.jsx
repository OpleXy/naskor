import { useState } from 'react'
import './App.css'
import YouTubeEmbed from './components/YouTubeEmbed'

function App() {
  const [activeTab, setActiveTab] = useState('kort')
  const [activeSection, setActiveSection] = useState('')

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>NasjonalKort</h1>
          <p className="subtitle">Backupsystem for pasientjournaler i nedetid</p>
        </div>
      </header>

      <nav className="navigation">
        <div className="nav-container">
          <a href="#intro" className="nav-link">Introduksjon</a>
          <a href="#problem" className="nav-link">Problemstilling</a>
          <a href="#solution" className="nav-link">Teknologi & Løsning</a>
          <a href="#implementation" className="nav-link">Implementering</a>
          <a href="#feasibility" className="nav-link">Gjennomførbarhet</a>
        </div>
      </nav>

      <main className="main-content">
        <section id="intro" className="section">
          <YouTubeEmbed url="https://www.youtube.com/watch?v=2aCBG-5Q58w" />
        </section>

        <section id="project-overview" className="section hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Beredskapssystem for helsevesenet ved strøm- og internettbrudd</h1>
            <p className="hero-description">Dette prosjektet er vårt bidrag til oppgave 1 i Your Extreme 2025. Vi utvikler et beredskapssystem som sikrer at helsevesenet og kritisk helseinformasjon er tilgjengelig under omfattende strøm- og internettbrudd.</p>
            <div className="key-features">
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span>Fungerer uten strøm</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌐</span>
                <span>Fungerer uten internett</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <span>Fungerer uten mobilnettverk</span>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2>Problemstilling</h2>
          </div>
          <div className="problem-content">
            <p>Ved en katastrofe som forårsaker strøm-, internett-, mobilnettverks- og GPS-feil i flere dager, mister samfunnet tilgang til kritisk informasjon og kommunikasjon.</p>
            <div className="problem-highlight">
              <strong>Vårt mål:</strong> Utvikle et robust og gjennomførbart beredskapssystem som kan opprettholde helsevesenets funksjoner under slike krisesituasjoner.
            </div>
          </div>
        </section>

        <section id="solution" className="section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>Teknologi og løsning</h2>
          </div>
          <p className="section-intro">Løsningen består av to hovedkomponenter som arbeider sammen for å sikre tilgang til kritisk helseinformasjon:</p>

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

        <section id="implementation" className="section">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2>Implementering og forberedelse</h2>
          </div>

          <div className="implementation-grid">
            <div className="implementation-card">
              <h3>Samfunnsforberedelse</h3>
              <ul className="clean-list">
                <li>Bruk av NFC- eller RFID-kort med kritisk medisinsk data</li>
                <li>AI-verktøy for analyse av helse- og forsyningssituasjoner</li>
                <li>Opplæring av helsepersonell for krisehåndtering</li>
                <li>Sikre tilgang på skannere og datakort før krise</li>
              </ul>
            </div>

            <div className="implementation-card">
              <h3>Krisehåndtering</h3>
              <ul className="clean-list">
                <li>Praktiske, lavteknologiske løsninger med skannere og kort</li>
                <li>Organisering av lokale frivillige for koordinering</li>
                <li>Offline mesh-nettverk mellom skannere</li>
                <li>Lokal synkronisering av data</li>
              </ul>
            </div>

            <div className="implementation-card">
              <h3>Ressurser og roller</h3>
              <ul className="clean-list">
                <li><strong>Ressurser:</strong> Skannere, datakort, opplæring, teknisk støtte</li>
                <li><strong>Roller:</strong> Definerte roller for helsepersonell og frivillige</li>
                <li><strong>Koordinering:</strong> Lokal og regional samordning</li>
              </ul>
            </div>

            <div className="implementation-card">
              <h3>Internasjonalt samarbeid</h3>
              <ul className="clean-list">
                <li><strong>Politisk:</strong> Nasjonal koordinering av beredskapsinnsats</li>
                <li><strong>Ressursdeling:</strong> Samarbeid med naboland</li>
                <li><strong>Lokalt engasjement:</strong> Involvering av lokalsamfunn</li>
              </ul>
            </div>
          </div>
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
