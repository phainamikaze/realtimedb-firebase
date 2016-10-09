
'use strict';


var firebase = require('firebase');

// TODO(DEVELOPER): Change the two placeholders below.
// [START initialize]
// Initialize the app with a service account, granting admin privileges
firebase.initializeApp({
  databaseURL: 'https://test-3fa05.firebaseio.com',
  serviceAccount: 'serviceAccountCredentials.json'
});
// [END initialize]

function test() {
var db = firebase.database();
var ref = db.ref("registation_table/devices");

ref.push().set({
    mac: "11:22:33:44:55:66",
    time: new Date().getTime()
  });

}

//test();

function test2 () {
var db = firebase.database();
var ref = db.ref("registation_table/devices");
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
}

test2();