class Viewtask {
  constructor() {
    this.task = null;
    this.description = null;
    this.points = null;
    this.reward = null;
    this.taskelement = createElement("h1");
    this.describe = createElement("h1");
    this.pointsElement = createElement("h1");
    this.rewardElement = createElement("h1");
    this.back = createButton("Back");
    this.complete = createButton("Mark Complete");
  }
  view() {
    db.ref("/").on("value", (data) => {
      var task = data.val();
      // this.task= task.task
      // this.description= task.description
     
      points = task.points;
     if(task.task!==""){
      this.taskelement.html("TASK-" + task.task);
      this.describe.html("DESCRIPTION-" + task.description);
      this.pointsElement.html("POINTS-" + task.points);
      this.rewardElement.html("REWARD-" + task.reward);
     }
     else{
       this.taskelement.html("No task alloted")
     }
    });

    this.taskelement.position(width / 2 - 100, 50);
    this.describe.position(width / 2 - 100, 100);
    this.pointsElement.position(width / 2 - 100, 150);
    this.rewardElement.position(width / 2 - 100, 200);
  }
  display() {
    this.back.position(width / 2 + 100, height / 2);
    this.back.style("border-width", "3px");
    this.back.style("font-size", "35px");
    this.back.style("border-radius", "10px");

    this.complete.position(width / 2 - 100, height / 2);
    this.back.mousePressed(() => {
      home = new Home();
      home.display();
      this.taskelement.hide();
      this.describe.hide();
      this.pointsElement.hide();
      this.rewardElement.hide();
      this.back.hide();
      this.complete.hide();
    });

    this.complete.mousePressed(() => {

      db.ref("totalPointsGained").on("value", (data) => {
        getPoints = data.val();
      });

      db.ref("points").on("value", (data) => {
        points = data.val();
      });
     
      
      var p = getPoints + points;
      console.log(p);

      db.ref("/").update({
        totalPointsGained: p,
      });

      alert("Points added Successfully");

      db.ref("/").update({
        "description":"",
        "points":"",
        "reward":"",
        "task":"",
      //  "totalPointsGained":p
      })

      home = new Home();
      home.display();
      this.taskelement.hide();
      this.describe.hide();
      this.pointsElement.hide();
      this.rewardElement.hide();
      this.back.hide();
      this.complete.hide();

    });
  }
}
