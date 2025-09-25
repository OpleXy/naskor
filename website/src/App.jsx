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
          <div className="header-links">
            <p>Besvarelse oppgave 1, Your Extreme 2025</p>
            <p><a href="https://custom-eur.cvent.com/559ED04F91884F02A58E7EF44ABF0E8B/files/e92ac068646d405bab76b76629b28982.pdf" target="_blank" rel="noopener noreferrer">Oppgave PDF</a></p>
            <p><a href="https://github.com/OpleXy/naskor/" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
          </div>
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
        <section id="intro" className="section hero-section">
          <div className="hero-content-with-video">
            <div className="hero-text">
              <h1 className="hero-title">Beredskapssystem for helsevesenet ved strøm- og internettbrudd</h1>
              <p className="hero-description">Dette prosjektet er Cyber Criminals's bidrag til oppgave 1 i Your Extreme 2025. Vi utvikler et beredskapssystem som sikrer at helsevesenet og kritisk helseinformasjon er tilgjengelig under omfattende strøm- og internettbrudd.</p>
              <div className="key-features">
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <span>Fungerer under et strømbrudd</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌐</span>
                  <span>Fungerer uten internett</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📶</span>
                  <span>Fungerer uten mobilnettverk</span>
                </div>
              </div>
            </div>
            <div className="hero-video">
              <YouTubeEmbed url="https://www.youtube.com/watch?v=2aCBG-5Q58w" />
            </div>
          </div>
        </section>

        <section id="problem" className="section">
          <div className="section-header">
            <h2>Problemstilling</h2>
          </div>
          <p className="section-intro">Hva skjer når strøm og internett svikter, men kritisk helseinformasjon må være tilgjengelig?</p>
        </section>

        <section id="solution" className="section">
          <div className="section-header">
            <h2>Teknologi og løsning</h2>
          </div>
          <p className="section-intro">Løsningen består av to hovedkomponenter som arbeider sammen for å sikre tilgang til kritisk helseinformasjon:</p>

          <div className="tech-explanation">
            <h3>NFC-Teknologi</h3>
            <p>Near Field Communication (NFC) er en teknologi brukt for trådløs deling av små mengder data mellom to enheter. NFC bruker magnetisk induksjon for kommunikasjon, som gjør at enhetene må være veldig nærme hverandre for å snakke sammen (&lt; 10cm). Teknologien bruker simple kommunikasjonsprotokoller, som legger til rette for raskere kommunikajon enn Bluetooth LE <sup>[1]</sup></p>

            <h4>Scanner + Kort</h4>
            <ul>
              <li>Scanneren skaper et elektromagnetisk felt på 13.56MHz <sup>[2]</sup></li>
              <li>NFC-kortet har en antennespole som fanger feltet</li>
              <li>Energien i feltet aktiverer kortet og gir det nok strøm til å sende data tilbake</li>
              <li>Ingen batteri eller ekstern strøm er nødvendig for kortet</li>
              <li>Scanneren må ha et batteri, evt. solcelle</li>
            </ul>

            <h4>Lagringskapasitet og Løsning</h4>
            <p>Problemet ligger i at NFC har begrenset lagringskapasitet. Her vil ikke hele pasientjournalen få plass, kun data opptil <sup>[3]</sup>:</p>
            <ul>
              <li>144 bytes for NTAG213</li>
              <li>504 bytes for NTAG215</li>
              <li>888 bytes for NTAG216</li>
            </ul>

            <p>En komplett helsejournal med røntgenbilder, lab-resultater og historikk kan være opptil flere MB. Dette kan løses med en hybrid NFC og Micro-SD løsning, der når NFC-chippen oppdager en kobling, så vil den våkne, og kobler seg videre til en intern micro SD. En egenlaget ASIC (Application Specific Integrated Circuit) vil lese data fra SD-kortet, og data sendes tilbake via NFC til scanneren, som har en integrert LCD skjerm. Komplett journal vil vises på scanneren.</p>

            <h4>Sync av kort (automatisk løsning)</h4>
            <p>Før problemet med at strøm og internett går ned, så er det viktig at dette kortet kontinuerlig holdes oppdatert. Dette kan løses på flere måter:</p>
            <ul>
              <li>Ved legekontor/sykehus/apotek besøk kan det skrives ny data til kortet</li>
              <li>Hjemmestasjoner: Legg NFC-kort på en base som er koblet til helse-IT infrastruktur, syncer over natten</li>
              <li>Telefon: Hold kortet mot telefon, app kobler til helsenorge.no, laster ned ny data til kort</li>
            </ul>

            <div className="references">
              <p><sup>[1]</sup> <a href="https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/protocols/nfc/index.html" target="_blank" rel="noopener noreferrer">Nordic Semiconductor - NFC Protocols</a></p>
              <p><sup>[2]</sup> <a href="https://nfc-forum.org/build/specifications" target="_blank" rel="noopener noreferrer">NFC Forum Specifications</a></p>
              <p><sup>[3]</sup> <a href="https://www.asiarfid.com/difference-ntag213-ntag215-ntag216.html" target="_blank" rel="noopener noreferrer">NTAG Specifications</a></p>
            </div>
          </div>


          <div className="tech-tabs">
            <button
              className={`tech-tab ${activeTab === 'kort' ? 'active' : ''}`}
              onClick={() => setActiveTab('kort')}
            >
              NFC Kort
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
              <div className="nfc-card-description">
                <h3>NFC-Kortet - Desentralisert Datalagring</h3>
                <p>Et kort som fungerer som pasientjournal, der helseinformasjon kan lagres og oppdateres, og kan leses og skrives til av en håndholdt skanner.</p>

                <p>Kortet fungerer som en bærbar pasientjournal, hvor helseinformasjon kan lagres og oppdateres på en sikker og effektiv måte. Det er designet for å være uavhengig av strøm og internett, og kan leses og skrives til av en håndholdt scanner. Ved hjelp av NFC-teknologi (Near Field Communication) kan kortet overføre data til scanneren når det kommer i nærkontakt med den.</p>

                <div className="key-benefits">
                  <h4>Selvforsynt System</h4>
                  <p>NFC-teknologien gir kortet energi direkte fra scanneren, noe som gjør det selvforsynt uten behov for batterier eller ekstern strømtilførsel. Når man scanner kortet med scanneren blir kortet ladet opp.</p>
                </div>

                <h4>Sync av Kort (Automatisk Løsning)</h4>
                <p>Før strøm og internett går ned, er det viktig at kortet kontinuerlig holdes oppdatert. Dette kan løses på flere måter:</p>
                <ul className="tech-detail-list">
                  <li><strong>Ved legekontor/sykehus/apotek besøk:</strong> Ny data kan skrives til kortet.</li>
                  <li><strong>Hjemmestasjoner:</strong> Legg NFC-kortet på en base som er koblet til helse-IT infrastruktur, og synkroniserer over natten.</li>
                  <li><strong>Telefon:</strong> Hold kortet mot telefonen, appen kobler til helsenorge.no og laster ned ny data til kortet.</li>
                </ul>
              </div>


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
            </div>
          )}

          {activeTab === 'skanner' && (
            <div className="tech-content">
              <div className="scanner-description">
                <h3>Skanneren - Read & Write Enhet</h3>
                <p>Scanneren er en håndholdt enhet som helsepersonell kan bruke til å lese og oppdatere pasientdata lagret på NFC-kortet. Den er utstyrt med en NFC-leser som gjør det mulig å kommunisere trådløst med kortet ved hjelp av elektromagnetiske bølger.</p>

                <div className="scanner-features">
                  <h4>Tekniske Egenskaper</h4>
                  <ul>
                    <li><strong>Selvforsynt:</strong> Innebygd batteri som kan lades via solcellepanel eller tradisjonell lading</li>
                    <li><strong>Brukervennlig:</strong> Enkelt display og tastatur for enkel navigering</li>
                    <li><strong>Lokal lagring:</strong> Midlertidig lagring av pasientdata</li>
                    <li><strong>Mesh-nettverk:</strong> Kan synkroniseres mellom flere enheter når internett og strøm er tilbake</li>
                  </ul>
                </div>

                <p>Dette gjør scanneren til et effektivt verktøy i nødsituasjoner der tradisjonelle datanettverk ikke er tilgjengelige.</p>

              </div>
            </div>
          )}
        </section>

        <section id="implementation" className="section">
          <div className="section-header">
            <h2>Implementering</h2>
          </div>

          <div className="implementation-content">
            <div className="implementation-card">
              <h3>Implementasjon i samfunnet</h3>

              <p className="implementation-intro">All teknologi som brukes, finnes allerede, så her trenger vi bare å implementere løsningen med allerede oppfunnet teknologi.</p>

              <div className="implementation-phases">
                <div className="phase">
                  <h4>Fase 1: Utrulling av kort</h4>
                  <p>Borgere får utdelt et slikt kort, med pasientjournal lagret på seg. Det er krypteringer som gjør at kun helsepersonell har tilgang til denne dataen.</p>
                </div>

                <div className="phase">
                  <h4>Fase 2: Synkronisering</h4>
                  <p>Endringer i pasientjournalen vil bli synkronisert på disse kortene i en desentralisert lagringsform (altså at det ikke er en hoveddatabase for backupsystemet).</p>
                </div>

                <div className="phase">
                  <h4>Fase 3: Kriseberedskap</h4>
                  <p>Systemet er klart for krisesituasjoner.</p>
                </div>
              </div>

              <div className="crisis-scenario">
                <h4>I en krisesituasjon:</h4>
                <ul>
                  <li>Ikke tilgang til synkronisering lengre, derfor skjer alt av reading og writing av dataen når pasienten gir helsekortet sitt til helsepersonell</li>
                  <li>Scanneren trenger strøm, men veldig lite</li>
                  <li>Kortet krever også veldig lite strøm, men lades opp av scanninger</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="feasibility" className="section">
          <div className="section-header">
            <h2>Gjennomførbarhet</h2>
          </div>
          <div className="feasibility-content">
            <p>Dette systemet er teknisk gjennomførbart, men vil kreve betydelige investeringer i infrastruktur, opplæring og standardisering. Et realistisk første skritt vil være å gjennomføre et pilotprosjekt på et sykehus for å teste løsningen under reelle forhold.</p>

            <div className="feasibility-factors">
              <div className="factor">
                <h4>Teknisk gjennomførbarhet</h4>
                <p>All nødvendig teknologi eksisterer allerede og er kommersielt tilgjengelig.</p>
              </div>

              <div className="factor">
                <h4>Implementeringsutfordringer</h4>
                <ul>
                  <li>Infrastrukturinvesteringer</li>
                  <li>Opplæring av helsepersonell</li>
                  <li>Standardisering av dataformater</li>
                  <li>Sikkerhet og personvern</li>
                </ul>
              </div>

              <div className="factor">
                <h4>Første steg</h4>
                <p>Pilotprosjekt på et utvalgt sykehus for testing under reelle forhold.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
