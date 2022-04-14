
var firebaseConfig = {
    apiKey: "AIzaSyCLvzNhQirZYq8qFwkbAX_bPeOY0AbjVJU",
    authDomain: "kwitter-54164.firebaseapp.com",
    databaseURL: "https://kwitter-54164-default-rtdb.firebaseio.com",
    projectId: "kwitter-54164",
    storageBucket: "kwitter-54164.appspot.com",
    messagingSenderId: "607503295232",
    appId: "1:607503295232:web:c8163e93e4f0395a7589e5"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+username+"!";
  
  function add_room(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("ROOM NAMES- "+Room_names);
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoom_Name(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        //End code
        });});}
         
  getData();
  function redirectToRoom_Name(name){
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
    }
    function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";
        }