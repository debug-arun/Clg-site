// Function expression to select elements.
//Notification

console.log(Notification.permission);
  if (Notification.permission === "granted") {
     alert("we have permission");
  } else if (Notification.permission !== "denied") {
     Notification.requestPermission().then(permission => {
        console.log(permission);
     });
  }

//side menu
// Function expression to select elements.
const selectElement = (s) => document.querySelector(s);


//Open the menu on click
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
});


//Close the menu on click
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});





/*const selectElement = (s) => document.querySelector(s);


//Open the menu on click
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
});


//Close the menu on click
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});*/
