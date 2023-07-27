/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

import {onCall} from "firebase-functions/v2/https";

export const addAdminRole = onCall((data:any, context?)=>{
  const isAdmin = data.admin;
  const isStaff = data.staff;
  const email = data.email;
  return admin.auth().getUserByEmail(email).then((user) =>{
    return admin.auth()
      .setCustomUserClaims(user.uid, {
        admin: isAdmin,
        staff: isStaff,
      });
  }).then(()=>{
    return {
      message: `Success! ${data.email} has been made an admin`
    };
  }).catch((err) =>{
    return err;
  });
});
// Start writing functions
// https://firebase.google.com/docs/functions/typescript
/*
export const helloWorld = onRequest((data:any, response) => {
  // logger.info("Hello logs!", {structuredData: true});
  // response.send("Hello from Firebase!");
  const isAdmin = data.admin;
  const isStaff = data.staff;
  const email = data.email;
  return admin.auth().getUserByEmail(email).then((user) =>{
    return admin.auth()
      .setCustomUserClaims(user.uid, {
        admin: isAdmin,
        staff: isStaff,
      });
  }).then(()=>{
    return {
      message: `Success! ${data.email} has been made an admin`,
    };
  }).catch( (err) => {
    return err;
  });
});*/

