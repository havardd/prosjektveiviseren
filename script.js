document.addEventListener('DOMContentLoaded', function () {
  // Sett inn standardverdiene i HTML
  document.title = standardverdier.title;
  document.querySelector('header h1').textContent = standardverdier.header1;
  document.querySelector('header h2').textContent = standardverdier.header2;

  const getLinkHTML = (text, href, type) => `<a href="${href}" target="_blank" class="link-${type}">${text}</a>`;

  const virksomhetsstyring = standardverdier.virksomhetsstyring;
  document.querySelector('.virksomhetsstyring.tooltip').innerHTML = `${virksomhetsstyring.title}
    <span class="tooltiptext">
      <span class="highlighted">${virksomhetsstyring.highlighted}</span><br>
      <span class="normal">${virksomhetsstyring.normal.replace(/\n/g, "<br>")}</span><br>
      ${getLinkHTML(virksomhetsstyring.linkText, virksomhetsstyring.linkHref, 'les-mer')}<br>
      ${getLinkHTML(virksomhetsstyring.padriver.text, virksomhetsstyring.padriver.linkHref, 'padriver')}<br>
      ${getLinkHTML(virksomhetsstyring.eier.text, virksomhetsstyring.eier.linkHref, 'eier')}<br>
      ${getLinkHTML(virksomhetsstyring.ansvar.text, virksomhetsstyring.ansvar.linkHref, 'ansvar')}
    </span>`;

  const prosjektstyring = standardverdier.prosjektstyring;
  document.querySelector('.prosjektstyring.tooltip').innerHTML = `${prosjektstyring.title}
    <span class="tooltiptext">
      <span class="highlighted">${prosjektstyring.highlighted}</span><br>
      <span class="normal">${prosjektstyring.normal.replace(/\n/g, "<br>")}</span><br>
      ${getLinkHTML(prosjektstyring.linkText, prosjektstyring.linkHref, 'les-mer')}<br>
      ${getLinkHTML(prosjektstyring.padriver.text, prosjektstyring.padriver.linkHref, 'padriver')}<br>
      ${getLinkHTML(prosjektstyring.eier.text, prosjektstyring.eier.linkHref, 'eier')}<br>
      ${getLinkHTML(prosjektstyring.ansvar.text, prosjektstyring.ansvar.linkHref, 'ansvar')}
    </span>`;

  // Sett inn fasene
  const faseElements = document.querySelectorAll('.phase');
  standardverdier.fases.forEach((fase, index) => {
    if (faseElements[index]) {
      faseElements[index].querySelector('p').textContent = fase.title;
      faseElements[index].querySelector('.tooltiptext').innerHTML = `
        <span class="highlighted">${fase.highlighted || ''}</span><br>
        <span class="normal">${(fase.normal || '').replace(/\n/g, "<br>")}</span><br>
        ${fase.padriver ? `${getLinkHTML(fase.padriver.text, fase.padriver.linkHref, 'padriver')}<br>` : ''}
        ${fase.eier ? `${getLinkHTML(fase.eier.text, fase.eier.linkHref, 'eier')}<br>` : ''}
        ${fase.ansvar ? `${getLinkHTML(fase.ansvar.text, fase.ansvar.linkHref, 'ansvar')}` : ''}
        ${fase.linkText ? `${getLinkHTML(fase.linkText, fase.linkHref, 'les-mer')}<br>` : ''}
      `;
    }
  });

  // Sett inn besøkspunktene
  const arrowElements = document.querySelectorAll('.arrow');
  standardverdier.besokspunkt.forEach((bp, index) => {
    if (arrowElements[index]) {
      arrowElements[index].querySelector('.number').textContent = bp.title;
      arrowElements[index].querySelector('.tooltiptext').innerHTML = `
        <span class="highlighted">${bp.highlighted || ''}</span><br>
        <span class="normal">${(bp.normal || '').replace(/\n/g, "<br>")}</span><br>
        ${bp.padriver ? `${getLinkHTML(bp.padriver.text, bp.padriver.linkHref, 'padriver')}<br>` : ''}
        ${bp.eier ? `${getLinkHTML(bp.eier.text, bp.eier.linkHref, 'eier')}<br>` : ''}
        ${bp.ansvar ? `${getLinkHTML(bp.ansvar.text, bp.ansvar.linkHref, 'ansvar')}` : ''}
        ${bp.linkText ? `${getLinkHTML(bp.linkText, bp.linkHref, 'les-mer')}<br>` : ''}
      `;
    }
  });

  const tooltips = document.querySelectorAll('.tooltip');

  tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', function () {
      const tooltipText = this.querySelector('.tooltiptext');
      if (tooltipText.style.visibility === 'visible') {
        // Skjul verktøytips
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
      } else {
        // Vis verktøytips
        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = '1';
      }
    });

    tooltip.addEventListener('touchstart', function (event) {
      event.preventDefault(); // Forhindre at touch hendelse utløser mouse events
      const tooltipText = this.querySelector('.tooltiptext');
      if (tooltipText.style.visibility === 'visible') {
        // Skjul verktøytips
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
      } else {
        // Vis verktøytips
        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = '1';
      }
    });
  });
});
