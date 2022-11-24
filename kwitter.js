var firebaseConfig = {
    apiKey: "AIzaSyDi_xdH900gob5ikpIgpFoAhxMg45rbnkQ",
    authDomain: "projectchatbot-466db.firebaseapp.com",
    databaseURL: "https://projectchatbot-466db-default-rtdb.firebaseio.com",
    projectId: "projectchatbot-466db",
    storageBucket: "projectchatbot-466db.appspot.com",
    messagingSenderId: "807971345688",
    appId: "1:807971345688:web:ad35bd72e5d4737b16fa6d",
    measurementId: "G-F3K7MEST6Y"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addroom()
  {
    document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });

    window.location = "kwitter_page.html";
  }

  function getData()
  {
    firebase.database().ref("/").on('value',
    function (snapshot)
    {
      document.getElementById("output").innerHTML ="";
      snapshot.forEach(function(childSnapshot) {childkey = childSnapshot.key;

        <div id="room_name"></div>

      });});}
      getData();