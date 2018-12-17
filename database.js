let addBookToDatabase = function(addAuthor, addTitle, yearPublished) {
    let db = firebase.database();
    let dbRef = db.ref("/Database/Books/" + addAuthor);
    dbRef.set();

};

let addStudentWithPush = function(addAuthor, addTitle, yearPublished) {
    let db = firebase.database().ref("/Books");
    let obj = {
        Author : addAuthor,
        Title: addTitle,
        YearPublished: yearPublished
    };

    db.push(obj);
};


// let studentsReference = firebase.database().ref("/Students/James");
// studentsReference.on("value", function(snapshot) {
//     let data = snapshot.val();
//     console.log(data);
// });