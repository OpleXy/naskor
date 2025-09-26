# NasjonalKort  
**Backupsystem for pasientjournaler i nedetid**  

Bidrag fra **Cyber Criminals** til *Your Extreme 2025 – Oppgave 1*  

---

## Introduksjon  
Midt i et kritisk øyeblikk, når hvert eneste sekund teller, kan helsepersonell fortsatt ha tilgang til livsviktig pasientinformasjon – selv når ordinære journalsystemer ligger nede.  

**NasjonalKort** er vår løsning: et robust og raskt backupsystem for pasientjournaler.  
Løsningen sikrer at blodtype, allergier, kroniske sykdommer, HLR-status, organdonorkort og annen kritisk informasjon alltid er tilgjengelig – uansett situasjon.  

---

## Problemstilling  
**Hva skjer når strøm og internett svikter?**  
Hvordan sikrer man at helsepersonell fortsatt har tilgang til kritisk helseinformasjon når alle ordinære systemer er utilgjengelige?  

---

## Løsning  
### 1. NFC Helsekort  
- Fysisk/elektronisk kort for offline tilgang til pasientjournal.  
- Lagrer, krypterer og leverer informasjon raskt.  
- Ingen batteri nødvendig, aktiveres av skannerens felt.  

### 2. Skanneren  
- Henter informasjon fra kortet uten nettverkstilkobling.  
- Har integrert skjerm for visning av pasientjournal.  
- Brukervennlig og designet for nødsituasjoner.  

### 3. NFC-teknologi  
- Basert på **Near Field Communication (NFC)** (< 10 cm rekkevidde).  
- Rask og sikker overføring.  
- Kombineres med micro-SD for å håndtere større journaler.  

### 4. Synkronisering  
- Oppdatering skjer automatisk gjennom:  
  - Fastlege, sykehus eller apotek  
  - Hjemmestasjon med base  
  - Mobilapp koblet til helsenorge.no  

---

## Sikkerhet og kryptering  
- Bruk av **MIFARE DESFire EV2/EV3 NFC-chips** (AES-128/AES-256).  
- Master-applikasjon + backend med nøkkelstyring.  
- Kun autorisert helsepersonell får tilgang.  

---

## Implementering  
1. **Utrulling av kort** – Alle borgere får kort med kryptert pasientjournal.  
2. **Synkronisering** – Oppdateres løpende i en desentralisert modell.  
3. **Kriseberedskap** – Fullt operativt selv uten strøm og nett.  

---

## Eksempel-case  
**Ola Nordmann (26 år):**  
- Diabetes type 1  
- Allergisk mot penicillin  
- Blodtype A+  

Ola blir funnet bevisstløs uten ID. Journalsystemet er nede.  
Med NasjonalKort kan helsepersonell fortsatt få tilgang til informasjonen som kan redde livet hans.  

---

## Teknologioversikt  
- **NFC (Near Field Communication)** – for dataoverføring  
- **Micro-SD + ASIC** – for større journaldata  
- **AES-128 / AES-256 kryptering** – for sikkerhet  
- **Integrert skanner med LCD** – for visning  

---

## Gjennomførbarhet  
- Teknologien eksisterer allerede i dag.  
- Krever investering i infrastruktur, opplæring og standardisering.  
- Realistisk første steg: **pilotprosjekt på sykehus**.  

---

## Team  
**Cyber Criminals** – bidrag til Your Extreme 2025  

- Oliver Kabicek  
- Julianne Murbrekk  
- Fredrik Andreassen Paulsen  
- Even Rygh  

Takk til 7Sense for lån av NFC-tags og kit.  

---

## Kilder  
1. Nordic Semiconductor – NFC Protocols  
2. NFC Forum Specifications  
3. NTAG Specifications  
4. Prosjektdokumentasjon (internt)  
5. Standarder for helsedata og kryptering  
