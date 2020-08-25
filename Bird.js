//extends creates a child class
class Bird extends BaseClass{
  constructor(x,y){
    //super transfers all the properties and functions of parent class to the child class
    super(x,y,50,50);
    //special property of the child
    this.image = loadImage("sprites/bird.png");
  }
  //overriding function = save name function in both parent and child class
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}