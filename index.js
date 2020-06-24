const ioHook = require('iohook')
var robot = require("robotjs")

const screenSize = robot.getScreenSize()
robot.setKeyboardDelay(0)

let spell = null
let champIconPos = null
ioHook.on('keydown', evt => {

    let key = String.fromCharCode(evt.rawcode)
    if (['A', 'Z', 'E', 'R'].includes(key)) {
        spell = key.toLowerCase()
    }

    if (key === 'a') {
        champIconPos = {x: screenSize.width - 150, y: screenSize.height - 380}
    } else if (key === 'b') {
        champIconPos = {x: screenSize.width - 110, y: screenSize.height - 380}
    } else if (key === 'c') {
        champIconPos = {x: screenSize.width - 70, y: screenSize.height - 380}
    } else if (key === 'd') {
        champIconPos = {x: screenSize.width - 30, y: screenSize.height - 380}
    }

    if (spell !== null && champIconPos !== null) {
        let mousePos = robot.getMousePos()

        robot.moveMouse(champIconPos.x, champIconPos.y)
        robot.keyTap(spell)

        robot.moveMouse(mousePos.x, mousePos.y)

        console.log('cast spell ' + spell + ' on champ ' + key)

        spell = null
        champIconPos = null
    }

})

ioHook.start()