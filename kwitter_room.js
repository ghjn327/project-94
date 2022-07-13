// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1wWxgj7tLr9eifbNUXmK8x0C3pLS0_rc",
    authDomain: "lets-chat-web-app-3f206.firebaseapp.com",
    projectId: "lets-chat-web-app-3f206",
    storageBucket: "lets-chat-web-app-3f206.appspot.com",
    messagingSenderId: "180367791458",
    appId: "1:180367791458:web:eab2f1cfe249c4a7c6883b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function add_room(){
    room_name=document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);

  window.location="Kwitter_page.html";
}

user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+ user_name+ "!";

function logout(){
    window.location="kwitter.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}