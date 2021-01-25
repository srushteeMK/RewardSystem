var form, welcome,task
var db, viewtask,home
var getPoints,points,badge;

function setup() {
  createCanvas(displayWidth,displayHeight);
  db= firebase.database()
 welcome=new Home()
 db.ref("totalPointsGained").on("value", getPoints,showError); 
}

function draw() {
welcome.display()



  background(255,255,255);  
  
}
function getPoints(data){
  getPoints = data.val();
  console.log(getPoints);
}
function showError(error){
  console.log(error)
}