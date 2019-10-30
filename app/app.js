currentTempBtn = document.getElementById("current-temp");
currentHumidityBtn = document.getElementById("current-humidity");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAs6OpFET624qSURX6wIGx29YTBtrsJ0UE",
  authDomain: "shaheena-smart-farm.firebaseapp.com",
  databaseURL: "https://shaheena-smart-farm.firebaseio.com",
  projectId: "shaheena-smart-farm",
  storageBucket: "shaheena-smart-farm.appspot.com",
  messagingSenderId: "923155381744",
  appId: "1:923155381744:web:7c405dedfe5ed0a4b47135",
  measurementId: "G-MC0J5YC6HF"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


const dbRef = firebase.database().ref();

currentTempBtn.addEventListener("click", displayCurrentTemp);
function displayCurrentTemp(e) {
    const tempRef = dbRef.child('current-temperature/');
    const currentDetailUI = document.getElementById("currentTempDetail");
    currentDetailUI.innerHTML = ""
    tempRef.on("child_added", snap => {
        var $p = document.createElement("p");
        $p.innerHTML = snap.key + " :  " + snap.val() ;
        currentDetailUI.append($p);
    });
}

currentHumidityBtn.addEventListener('click', displayCurrentHumidity);
function displayCurrentHumidity(e) {
  const humidityRef = dbRef.child('current-humidity/');
  const currentDetailUI = document.getElementById("currentHumidityDetail");
  currentDetailUI.innerHTML = ""
  humidityRef.on("child_added", snap => {
      var $p = document.createElement("p");
      $p.innerHTML = snap.key + " :  " + snap.val() ;
      currentDetailUI.append($p);
  });
}