# WhatsApp Family & Vehicle Registration

This is a mobile-first registration page designed to be shared in a WhatsApp group.

## Fields
- Name
- NIC Number
- Vehicle Number
- Number of Kids

## Important
A static GitHub Pages website cannot store shared submissions by itself. Connect it to a Google Apps Script Web App that writes submissions to a Google Sheet.

### Google Sheet columns
No. | Timestamp | Name | NIC Number | Vehicle Number | Kids Count

After deploying the Apps Script Web App, replace:

PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE

in `index.html` with the Web App URL.

Then publish this folder with GitHub Pages.
