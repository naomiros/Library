let addStudentToDatabase = function(studentName, country) {
let db = firebase.database();
let dbRef = db.ref("/Students/" + studentName); 
dbRef.set(country);};

let studentsReference = firebase.database().ref("/Students/");
studentsReference.on("value", function(snapshot) {
	let data = snapshot.val();
	console.log(data);
});


