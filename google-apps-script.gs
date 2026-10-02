function doPost(e) {
  const SHEET_NAME = "Registrations";
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["No.", "Timestamp", "Name", "NIC Number", "Vehicle Number", "Kids Count"]);
  }

  const data = JSON.parse(e.postData.contents || "{}");
  const nextNo = Math.max(1, sheet.getLastRow()); // header row = 1
  sheet.appendRow([
    nextNo,
    new Date(),
    String(data.name || "").trim(),
    String(data.nic || "").trim(),
    String(data.vehicle || "").trim(),
    Number(data.kids || 0)
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}