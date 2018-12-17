let registerUser = function(email, password, displayName) {
    let fbAuth = firebase.auth();
    let ansFromCreate = 
        fbAuth.createUserWithEmailAndPassword(email, password);

    
        // let dbRef = firebase.database().ref("/Students");
        // dbRef.on('value', function(snapshot)) {

        //     console.log("Database was changed", snapshot.val());

                

        // }






    let successFunction = function(obj) {
        alert("User was successfully created");
                window.open("mainPage.html"); 


        if (displayName !== undefined) {
            // update the displayName of the user, of the CURRENT user
            firebase.auth().currentUser.updateProfile({
                displayName: displayName

            });
        } else {
            console.log("Display name was not given")
        }
        console.log(obj);
    };

    let errorFunction = function(err) {
        alert("Couldn't create the user: " + err.message);
        console.log(err);
    };

  

    ansFromCreate.then(successFunction, errorFunction);
};

let signInHoe = function(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(successObject){
        alert("Welcome back: " + firebase.auth().currentUser.email);
        window.open("mainPage.html");
    }, function(failObject) {
        alert("Couldn't log in: " + failObject.message);
    });
};

   let signOut = function() {

    firebase.auth().signOut();
   };
   let amISignedIn = function() {
    return firebase.auth().currentUser !== null;
   };

   firebase.auth().onAuthStateChanged(function(user) {
    console.log("Authentication state was changed")
});


// set the observer
firebase.auth().onAuthStateChanged(function(user) {
    if (user !== null) {
        console.log("Authentication state was changed: user is signed in");
    } else {
        console.log("Authentication state was changed: user is signed out");
    }
});
