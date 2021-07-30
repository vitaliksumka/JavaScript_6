function Robot(){
    let self = this;
    self.robotWorkMethod;

    self.setWorkToRobot= function(value){
        self.robotWorkMethod = value;
    }
    self.work= function(){
        return this.robotWorkMethod;
   }
}

function CoffeRobot(){
    let self = this;
    self.сoffeRobotWorkMethod;

    self.setWorkToCoffeRobot= function(value){
        self.сoffeRobotWorkMethod = value;
    }
    self.work= function(){
        return this.сoffeRobotWorkMethod;
    }
}

function RobotDancer(){
    let self = this;
    self.robotDancertWorkMethod;

    self.setWorkToRobotDancer= function(value){
        self.robotDancertWorkMethod = value;
    }
    self.work= function(){
        return this.robotDancertWorkMethod;
    }
}

function RobotCoocker(){
    let self = this;
    self.robotCoockerWorkMethod;

    self.setWorkToRobotCoocker= function(value){
        self.robotCoockerWorkMethod = value;
    }
    self.work= function(){
        return self.robotCoockerWorkMethod;
    }
}


let robot = new Robot();
let coffeRobot = new CoffeRobot();
let robotDancer = new RobotDancer();
let robotCoocker = new RobotCoocker();

robot.setWorkToRobot("Я Robot – я просто працюю");
console.log(robot.work());

coffeRobot.setWorkToCoffeRobot("Я CoffeRobot – я варю каву");
console.log(coffeRobot.work());

robotDancer.setWorkToRobotDancer("Я RobotDancer – я просто танцюю");
console.log(robotDancer.work());

robotCoocker.setWorkToRobotCoocker("Я RobotCoocker – я просто готую");
console.log(robotCoocker.work());

console.log("------------------------------------------------------");

let robotsArray = [robot, coffeRobot, robotDancer,  robotCoocker];

for (let i = 0; i < robotsArray.length; i++) {
     console.log(robotsArray[i]);
}








