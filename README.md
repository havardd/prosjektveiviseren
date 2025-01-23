# Prosjektveiviseren
En enkel nettside som grafisk fremstiller Prosjektveiviseren utviklet av Digitaliseringsdirektoratet. Nettstedet er en ressurs for kursholdere som utfører kurs i Prosjektveiviseren.
Nettsiden er under kontinuerlig forbedring og fungerer ikke optimalt pr januar 2025

<body>
  <h1>Mapping Tabell mellom HTML, CSS og JavaScript</h1>
  <table>
    <thead>
      <tr>
        <th>HTML Element</th>
        <th>CSS Selektor(er)</th>
        <th>JavaScript Selektor(er)</th>
        <th>Beskrivelse</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>&lt;body&gt;</td>
        <td>body</td>
        <td>Ingen</td>
        <td>Stiler hele kroppselementet inkludert font, tekstartjustering, marg, bakgrunnsfarge, og linjehøyde.</td>
      </tr>
      <tr>
        <td>&lt;h1&gt;</td>
        <td>h1</td>
        <td>Ingen</td>
        <td>Stiler hovedoverskriften med farge og marg.</td>
      </tr>
      <tr>
        <td>&lt;header&gt;</td>
        <td>Ingen spesifikk</td>
        <td>Ingen</td>
        <td>Implicit stylet gjennom barneelementer (h1, h2).</td>
      </tr>
      <tr>
        <td>&lt;section class="legend"&gt;</td>
        <td>.legend</td>
        <td>Ingen</td>
        <td>Stiler legendeseksjonen med flexbox layout.</td>
      </tr>
      <tr>
        <td>&lt;div class="virksomhetsstyring"&gt;</td>
        <td>.virksomhetsstyring</td>
        <td>.tooltip</td>
        <td>Stiler den blå boksen for virksomhetsstyring og håndterer tooltip</td>
      </tr>
      <tr>
        <td>&lt;div class="prosjektstyring"&gt;</td>
        <td>.prosjektstyring</td>
        <td>.tooltip</td>
        <td>Stiler den grønne boksen for prosjektstyring og håndterer tooltip</td>
      </tr>
      <tr>
        <td>&lt;span class="tooltiptext"&gt;</td>
        <td>.tooltip .tooltiptext</td>
        <td>Ingen</td>
        <td>Stiler verktøytipstekst med synlighet og utseende.</td>
      </tr>
      <tr>
        <td>&lt;section class="prosessmodell"&gt;</td>
        <td>.prosessmodell</td>
        <td>Ingen</td>
        <td>Stiler prosessmodellseksjonen med flexbox layout.</td>
      </tr>
      <tr>
        <td>&lt;div class="phase ide"&gt;</td>
        <td>.phase.ide</td>
        <td>.tooltip</td>
        <td>Stiler spesifikt for ide-fasen i prosessmodellen og håndterer tooltip.</td>
      </tr>
      <tr>
        <td>&lt;div class="phase konsept"&gt;</td>
        <td>.phase.konsept</td>
        <td>.tooltip</td>
        <td>Stiler spesifikt for konseptfasen i prosessmodellen og håndterer tooltip.</td>
      </tr>
      <tr>
        <td>&lt;div class="phase planlegge"&gt;</td>
        <td>.phase.planlegge</td>
        <td>.tooltip</td>
        <td>Stiler spesifikt for planleggingsfasen i prosessmodellen og håndterer tooltip.</td>
      </tr>
      <tr>
        <td>&lt;div class="phase gjennomfore"&gt;</td>
        <td>.phase.gjennomfore</td>
        <td>.tooltip</td>
        <td>Stiler spesifikt for gjennomføringsfasen i prosessmodellen og håndterer tooltip.</td>
      </tr>
      <tr>
        <td>&lt;div class="phase avslutte"&gt;</td>
        <td>.phase.avslutte</td>
        <td>.tooltip</td>
        <td>Stiler spesifikt for avslutningsfasen i prosessmodellen og håndterer tooltip.</td>
      </tr>
      <tr>
        <td>&lt;div class="phase realisere"&gt;</td>
        <td>.phase.realisere</td>
        <td>.tooltip</td>
        <td>Stiler spesifikt for realiseringsfasen i prosessmodellen og håndterer tooltip.</td>
      </tr>
      <tr>
        <td>&lt;div class="arrow"&gt;</td>
        <td>.arrow, .arrow .number</td>
        <td>.tooltip</td>
        <td>Stiler piler i prosessmodellen og håndterer tooltip</td>
      </tr>
      <tr>
        <td>&lt;script&gt;</td>
        <td>Ingen</td>
        <td>querySelectorAll('.tooltip')</td>
        <td>Henter alle tooltip-elementer og legger til klikk- og touch-hendelser for å vise verktøytips.</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
