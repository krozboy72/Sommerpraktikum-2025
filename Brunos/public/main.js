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
    console.log(einnahmen)
  renderFlexibleTable(einnahmen, ["name", "betrag", "start_datum", "intervall", "konto"], "tabelle1");
});
