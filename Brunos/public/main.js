import { 
    loadData,
    trenneEinAusgaben,
    trenneEinmalMehrmals,
    sortiereAlphabetisch, 
    sortiereNeueste,
    sortiereAmount, 
    sortiereAelteste, 
    delEintragId,
    addEintrag } from './dataManager.js';

import { renderFlexibleTable } from './tableRenderer.js'

document.addEventListener("DOMContentLoaded", async () => {
  const daten = await loadData();
  console.log(daten)

  const { einnahmen, ausgaben } = await trenneEinAusgaben(daten);

  renderFlexibleTable(einnahmen, ["id", "name", "betrag", "intervall", "start_datum", "enddatum", "konto"], "tabelle_einnahmen");
  renderFlexibleTable(ausgaben, ["id", "name", "betrag", "intervall", "start_datum", "enddatum", "konto"], "tabelle_ausgaben");
  
});
