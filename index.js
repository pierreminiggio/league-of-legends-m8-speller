// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");
 
const screenSize = robot.getScreenSize();
console.log(screenSize)

robot.moveMouse(screenSize.width - 150, screenSize.height - 380);
robot.mouseClick('left')
robot.keyToggle('z', 'down')
