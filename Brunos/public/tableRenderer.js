/**
 * Generiert eine HTML-Tabelle aus beliebigen Daten und Feldern
 * @param {Array} datenListe - Die Datensätze, die angezeigt werden sollen
 * @param {Array} felder - Die Feldnamen, die als Spalten angezeigt werden (Reihenfolge relevant)
 * @param {string} containerId - Die ID des HTML-Containers, in dem die Tabelle eingefügt wird
 */
export function renderFlexibleTable(datenListe, felder, containerId) {
  const container = document.getElementById(containerId);

  if (!container || !Array.isArray(datenListe) || datenListe.length === 0) {
    container.innerHTML = "<p>Keine Daten zum Anzeigen.</p>";
    return;
  }

  // Tabelle erzeugen
  const table = document.createElement('table');
  table.classList.add('table', 'table-striped', 'table-bordered');

  // Kopfzeile
  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  for (const feld of felder) {
    const th = document.createElement('th');
    th.textContent = feld.charAt(0).toUpperCase() + feld.slice(1); // z. B. "amount" → "Amount"
    headRow.appendChild(th);
  }
  thead.appendChild(headRow);
  table.appendChild(thead);

  // Tabellenkörper
  const tbody = document.createElement('tbody');
  for (const eintrag of datenListe) {
    const row = document.createElement('tr');
    for (const feld of felder) {
      const td = document.createElement('td');
      td.textContent = eintrag[feld] ?? ""; // leeres Feld, falls nicht vorhanden
      row.appendChild(td);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // In Container einfügen
  container.innerHTML = "";
  container.appendChild(table);
}
