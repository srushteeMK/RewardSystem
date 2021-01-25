class Badges{
    constructor(){
this.points=createElement("h1")
this.getPoints=getPoints;
this.badge1=createImg("Images/gold badge.png")
this.back=createButton("Back");
this.describe=createElement("h2");
    }
    display(){
      
        this.points.html("Total Points Gained-"+this.getPoints)
        this.points.position(width/2-200,height/2-400)

        this.badge1.position(width/2-200,height/2-300)
        this.badge1.style("width","100px")
        this.badge1.style("height","100px")

        this.back.position(width/2+100,height/2)
        this.back.style("border-width", "3px")
        this.back.style("font-size","35px")
        this.back.style("border-radius","10px")

        this.describe.html("Gain more points to unlock more badges");
        this.describe.position(width/2-300,height/2+50)
        this.back.mousePressed(()=>{
            home=new Home()
        home.display();
        this.points.hide();
        this.badge1.hide();
        this.back.hide();
        this.describe.hide()
        })

    }
}