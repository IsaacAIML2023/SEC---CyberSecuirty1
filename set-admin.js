// Usage: node set-admin.js admin@example.com
// Requires GOOGLE_APPLICATION_CREDENTIALS pointing to Firebase service account JSON.
const admin = require('firebase-admin');
admin.initializeApp({ credential: admin.credential.applicationDefault() });
const email = process.argv[2];
if (!email) { console.error('Usage: node set-admin.js admin@example.com'); process.exit(1); }
admin.auth().getUserByEmail(email)
  .then(user => admin.auth().setCustomUserClaims(user.uid, { admin: true }))
  .then(() => console.log(`${email} is now admin. Log out and login again.`))
  .catch(err => { console.error(err); process.exit(1); });
