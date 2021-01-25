class Task {

constructor(){
    this.task= null
    this.description=null
    this.points=null
    this.reward=null
}

update(task,description,points,reward){
db.ref("/").update({
    task:task, 
    description:description,
    points:points,
    reward:reward,
  
})
}


}