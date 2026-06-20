// Usage: node seed-import.js sample-seed-questions.json
// Requires GOOGLE_APPLICATION_CREDENTIALS pointing to Firebase service account JSON.
const fs = require('fs');
const admin = require('firebase-admin');
admin.initializeApp({ credential: admin.credential.applicationDefault() });
const db = admin.firestore();
const file = process.argv[2] || 'sample-seed-questions.json';
const questions = JSON.parse(fs.readFileSync(file, 'utf8'));
(async () => {
  for (const q of questions) {
    await db.collection('questions').add({ ...q, createdAt: admin.firestore.FieldValue.serverTimestamp() });
  }
  console.log(`Imported ${questions.length} questions.`);
})();
