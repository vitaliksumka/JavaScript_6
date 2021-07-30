function Robot(){
    let self = this;
    self.robotWorkMethod = "Я Robot – я просто працюю";
}

function CoffeRobot(){
    let self = this;
    self.сoffeRobotWorkMethod = "Я CoffeRobot – я варю каву";
}

function RobotDancer(){
    let self = this;
    self.robotDancertWorkMethod = "Я RobotDancer – я просто танцюю";
}

function RobotCoocker(){
    let self = this;
    self.robotCoockerWorkMethod = "Я RobotCoocker – я просто готую";
}


Robot.prototype.work= function(){
     return this.robotWorkMethod;
}

CoffeRobot.prototype.work= function(){
    return this.сoffeRobotWorkMethod;
}

RobotDancer.prototype.work= function(){
    return this.robotDancertWorkMethod;
}

RobotCoocker.prototype.work= function(){
    return this.robotCoockerWorkMethod;
}


let robot = new Robot();
let coffeRobot = new CoffeRobot();
let robotDancer = new RobotDancer();
let robotCoocker = new RobotCoocker();

console.log(robot.work());
console.log(coffeRobot.work());
console.log(robotDancer.work());
console.log(robotCoocker.work());
console.log("--------------------------------");

let robotsArray = [robot, coffeRobot, robotDancer,  robotCoocker];

for (let i = 0; i < robotsArray.length; i++) {
     console.log(robotsArray[i]);
}
