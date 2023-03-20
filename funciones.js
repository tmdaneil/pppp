
// variable global
function agregarDatos() {

  const libro = SpreadsheetApp.getActiveSpreadsheet();
  const hojaOrigen = libro.getActiveSheet();
  const hojaDestino = libro.getSheetByName("Base");
  //getRange(row,column,numRows, numColumns)
  const rangoOrigen = hojaOrigen.getRange(2,1,1,7);
  const rangoDestino = hojaDestino.getRange(hojaDestino.getLastRow()+1,1,1,hojaDestino.getLastColumn());
  rangoOrigen.copyTo(rangoDestino);
  rangoOrigen.clearContent();
}
