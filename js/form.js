class Form{

constructor(){
this.title= createElement("h2", "Enter task")
this.tasklabel= createElement("h2","Enter task to be performed")
this.taskinput= createInput()
this.describelabel= createElement("h2", "Enter description of the task")
this.describeinput= createInput()
this.submit= createButton("Allot task")
this.back=createButton("Back");
this.pointsLabel=createElement("h2","Enter points to be given ")
this.pointsInput=createInput()
this.rewardLabel=createElement("h2","Enter REWARD to be given ");
this.rewardInput=createInput()
}
display(){
this.title.position(width/2-60,-15)

this.tasklabel.position(50, 120)
this.taskinput.position(350,125)
this.taskinput.size(400,50)
this.taskinput.style("border-width", "6px")
this.taskinput.style("border-style","inset")

this.describelabel.position(50, 220)
this.describeinput.position(350,220)
this.describeinput.style("border-width", "6px")
this.describeinput.style("border-style","inset")
this.describeinput.size(400,50)

this.pointsLabel.position(50, 320)
this.pointsInput.position(350,320)
this.pointsInput.style("border-width", "6px")
this.pointsInput.style("border-style","inset")
this.pointsInput.size(400,50)

this.rewardLabel.position(50, 420)
this.rewardInput.position(350,420)
this.rewardInput.style("border-width", "6px")
this.rewardInput.style("border-style","inset")
this.rewardInput.size(400,50)

this.submit.position(width/2-100,height/2+80)
this.submit.style("border-width", "3px")
this.submit.style("font-size","35px")
this.submit.style("border-radius","10px")
this.title.style("font-size","60px")

this.back.position(width/2+100,height/2+80)
this.back.style("border-width", "3px")
this.back.style("font-size","35px")
this.back.style("border-radius","10px")

this.submit.mousePressed(()=>{
    task=new Task()
task.task=this.taskinput.value()
task.description= this.describeinput.value()
task.points= parseInt(this.pointsInput.value())
task.reward= this.rewardInput.value()
task.update(task.task,task.description,task.points,task.reward)
alert("Task alloted successfully");

})
this.back.mousePressed(()=>{
    home=new Home()
home.display();
this.title.hide();
this.tasklabel.hide();
this.taskinput.hide();
this.describelabel.hide();
this.describeinput.hide();
this.rewardInput.hide();
this.rewardLabel.hide();
this.pointsInput.hide();
this.pointsLabel.hide()
this.submit.hide();
this.back.hide();
})
}


}