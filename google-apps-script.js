/**
 * Wakelink Form - Google Apps Script
 * 
 * SETUP:
 * 1. Create a new Google Sheet: https://sheets.google.com
 * 2. Go to Extensions > Apps Script
 * 3. Delete any code and paste this entire file
 * 4. Sheet ID is already set (or replace if using a different sheet)
 * 5. Click Deploy > New deployment > Web app
 * 6. Description: "Wakelink Form", Execute as: Me, Who has access: Anyone
 * 7. Deploy and copy the Web App URL
 * 8. In your project, create .env with: VITE_GOOGLE_SCRIPT_URL=your_copied_url
 * 9. Restart the dev server
 */

function doGet(e) {
  return handleRequest(e && e.parameter ? e.parameter : {});
}

function doPost(e) {
  let data = {};
  try {
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }
  } catch (_) {
    data = e.parameter || {};
  }
  return handleRequest(data);
}

function handleRequest(data) {
  try {
    const name = (data.name || '').toString().trim();
    const email = (data.email || '').toString().trim();
    const phone = (data.phone || '').toString().trim();
    const jetSkis = (data.jetskis || data.jetSkis || '').toString().trim();
    const ss = SpreadsheetApp.openById('12G8pd2J5pwiG7et3L97gN0gVKTRrV-yh1R0_D2mm0tQ');
    const sheet = ss.getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 5).setValues([['Date', 'Name', 'Email', 'Phone', 'Jet Skis']]);
    } else if (sheet.getLastColumn() < 5) {
      sheet.getRange(1, 5).setValue('Jet Skis');
    }
    sheet.appendRow([new Date(), name, email, phone, jetSkis]);
    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: err.toString() });
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
