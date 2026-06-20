# Secure Cybersecurity Assessment Portal

This version fixes the answer-key visibility issue.

## What is secure here?

- `public/index.html` and `public/student.js` never contain correct answers.
- Students receive questions and options only.
- Correct answers are stored in Firestore and accessed only by Firebase Cloud Functions.
- Correct answers are returned only after final submission.
- Admin question creation requires Firebase Authentication + admin custom claim.

## Folder Structure

```text
public/
  index.html          Student portal
  admin.html          Admin panel
  student.js          Student quiz logic, no answer key
  admin.js            Admin UI logic
  firebase-config.js  Paste your Firebase web app config here
  style.css           Design
functions/
  index.js            Secure backend logic
  package.json
firestore.rules       Blocks direct database access
firebase.json         Firebase hosting/functions config
```

## Setup Steps

1. Create Firebase project.
2. Enable Authentication > Email/Password.
3. Create an admin user email/password.
4. Enable Firestore Database.
5. Enable Cloud Functions.
6. Copy Firebase web app config into `public/firebase-config.js`.
7. Install Firebase CLI:

```bash
npm install -g firebase-tools
firebase login
firebase use --add
cd functions
npm install
cd ..
firebase deploy
```

## Make a user admin

After creating the admin user in Firebase Authentication, run this once locally:

```bash
node set-admin.js admin@example.com
```

Or use Firebase Admin SDK shell to set this custom claim:

```js
admin.auth().getUserByEmail('admin@example.com')
  .then(user => admin.auth().setCustomUserClaims(user.uid, { admin: true }));
```

Then log out and log in again in `admin.html`.

## Student flow

1. Student opens `index.html`.
2. Student enters name and register number.
3. Student attends level test.
4. Student clicks final submit.
5. Backend checks answers.
6. Student sees score and correct answers only after final submit.

## Admin flow

1. Admin opens `admin.html`.
2. Admin logs in.
3. Admin adds question, options, correct option, explanation, level, difficulty.
4. Question is stored securely in Firestore.
