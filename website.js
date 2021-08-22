

function signup(){
   // var name = document.getElementById("name").value
    var email1 = document.getElementById("email1").value
    var pass1 = document.getElementById("password1").value
    
    var alt = "Please Give All information First"
    if(email1=="" || pass1 == ""){
        document.getElementById('alt').innerText=alt
    }else{
        firebase.auth().createUserWithEmailAndPassword(email1, pass1)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    console.log("user added")
    var obj = {
      Email : email1,
      password : pass1,
      uid : user.uid
    }

    console.log(obj)

    firebase.database().ref(`/users/${user.uid}`).set(obj)
    .thy
    // window.location="login.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
        // window.location="login.html"
    

}
function adminlogin(){
    var email = document.getElementById("email").value
    var pass = document.getElementById("password").value


    
    var error = "Enter Email and Password Must"
    var not = "Wrong Password"

    if(email=="" || pass == ""){
        document.getElementById('error').innerText=error
    }
    else if(email!="ahmed@gmail.com" && pass != "123456"){
        document.getElementById('error').style.display="none"
        document.getElementById('not').innerText=not
        }
    else if (email =="ahmed@gmail.com" && pass == "123456"){
       window.location="website.html";
    }
}
}

function login(){
    var email2 = document.getElementById("email2").value
    var pass2 = document.getElementById("password2").value
    
    var log = "Please Put Email and Password First"
    if(email2=="" || pass2 == ""){
        document.getElementById('log').innerText=log
    }else{
      firebase.auth().signInWithEmailAndPassword(email2, pass2)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("login secceed")
        var a = document.getElementById("signup")
        console.log(a)
        localStorage.setItem('')
        // window.location="website.html";

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  



}
}
